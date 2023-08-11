import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, concatMap, switchMap, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';
import { environment, environment2 } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl!: string;

  private userInfoSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public userInfo$ = this.userInfoSubject.asObservable();

  setUserInfo(userInfo: any): void {
    this.userInfoSubject.next(userInfo);
  }



  login2() {
    // Navigate to the login page of the external website
    window.location.href = 'https://projectydev.phanmemvcs.com';
  }

  handleLoginCallback() {
    // Parse the URL search params to get the redirect URL
    const queryParams = new URLSearchParams(window.location.search);
    console.log("okee")
    const redirectUrl = queryParams.get('redirectUrl');

    if (redirectUrl) {
      this.redirectUrl = redirectUrl;
    } else {
      this.redirectUrl = '/';
    }

    // Set the login status and navigate to the redirect URL
    this.isLoggedIn = true;
    this.router.navigateByUrl(this.redirectUrl);
  }

  logout2() {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  private readonly apiUrl = environment2.apiUrl; // URL API được lấy từ environment

  // private readonly apiUrl = 'http://localhost:3000';
  private readonly accessTokenKey = 'accessToken'; 
  private readonly refreshTokenKey = 'encryptedAccessToken';
  roleUser: Observable<number>;
  //role-number
  roleUserSubject: BehaviorSubject<number> = new BehaviorSubject<number>(4);
  // roleUserSubject!: BehaviorSubject<number>

  constructor( private router: Router, private http: HttpClient, private route: ActivatedRoute, private localStoreService: LocalStorageService) {
    // if(this.localStoreService.getLocalStorageItemAsJSON(this.accessTokenKey) !== null) {
    this.roleUser = this.roleUserSubject.asObservable();
    
  }

  setValueRole(value: number) {
    console.log(value)
    this.roleUserSubject.next(value);
  }


  login(username: string, password: string): Observable<any> {
    console.log(username, password);
    // const check = JSON.stringify(JSON.stringify({"PrintObjectID":"01_DA1","PeriodOfTime2":{"TuNgay":"01/15/2022","DenNgay":"01/15/2023"}}))
    // return this.http.post('http://192.168.1.10:3032/api/v1/reports/r1/01_DA1/data/unauthorized', check,{
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
      
    // })
    return this.http.post(`${this.apiUrl}/TokenAuth/Authenticate`, {userNameOrEmailAddress: username, password: password }, {responseType: 'json'}).pipe(
      
      tap((tokens: any) => {
        
        
        this.localStoreService.setLocalStorageItem(this.accessTokenKey, tokens.result.accessToken);
        this.localStoreService.setLocalStorageItem(this.refreshTokenKey, tokens.result.encryptedAccessToken);
        this.localStoreService.setLocalStorageItem(this.refreshTokenKey, tokens.result.userId);
        
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(this.localStoreService.getLocalStorageItemAsJSON(this.accessTokenKey));
       
        // this.setValueRole(decodedToken.role);

        console.log(decodedToken)

        
        // this.roleUserSubject.next(decodedToken.role);
        // this.roleUserSubject.next(1);
        // this.roleUserSubject.next(2);
        
        
        
        
        // this.setToken(tokens.access_token);
        // this.setRefreshToken(tokens.refreshToken);
      })
    );
  }

  getRoleUser(userId: any): Observable<any> {
   
    return this.http.get(`${this.apiUrl}/services/app/Role/GetRoleByUserId?userId=${userId}`, {responseType: 'json'});
  }

  getToken(): any {
    return localStorage.getItem(this.accessTokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  getRefreshToken(): any {
    return localStorage.getItem(this.refreshTokenKey);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshTokenKey, token);
  }

  isUserAuthenticated(): boolean {
    const token = this.getToken();
    // kiểm tra xem token có tồn tại hay không
    return !!token;
  }

  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    return this.http.post(`${this.apiUrl}/refreshToken`, { refresh_token: refreshToken })
    // .pipe(
    //   tap((tokens: any) => { //tap là 1 operator của rxjs nó sẽ thực hiện 1 hành động nào đó khi observable được gọi 
    //     // this.setToken(tokens.access_token); 
    //     // this.setRefreshToken(tokens.refresh_token);
    //     this.localStoreService.setLocalStorageItem(this.accessTokenKey, tokens.accessToken);
    //     this.localStoreService.setLocalStorageItem(this.refreshTokenKey, tokens.refreshToken);
    //   })
    // );
  }

  logout() {
    this.setValueRole(4);
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);

    this.router.navigateByUrl('/auth/login');
    
    
  }
}
