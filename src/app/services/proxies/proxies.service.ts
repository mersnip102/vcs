import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { TT01DataDTO } from 'src/app/models/tt01DTO/tt01DataDto.model';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';
import { reportAPI } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProxiesService {

  private readonly apiUrl = reportAPI.apiUrl; // URL API được lấy từ environment

  // private readonly apiUrl = 'http://localhost:3000';
  private readonly accessTokenKey = 'accessToken'; 
  private readonly refreshTokenKey = 'encryptedAccessToken';
  roleUser: Observable<number>;
  //role-number
  roleUserSubject: BehaviorSubject<number> = new BehaviorSubject<number>(2);
  // roleUserSubject!: BehaviorSubject<number>

  constructor( private router: Router, private http: HttpClient, private route: ActivatedRoute, private localStoreService: LocalStorageService) {
    // if(this.localStoreService.getLocalStorageItemAsJSON(this.accessTokenKey) !== null) {
    this.roleUser = this.roleUserSubject.asObservable();
    
  }

  setValueRole(value: number) {
    console.log(value)
    this.roleUserSubject.next(value);
  }


  DA1_01(PrintObjectID: string, TuNgay?: string, DenNgay?: string): Observable<any> {
    const query = JSON.stringify(JSON.stringify({
      "PrintObjectID" : PrintObjectID, // giống reportCode
      "PeriodOfTime2": TuNgay && DenNgay ? {
        "TuNgay": TuNgay,
        "DenNgay": DenNgay,
        "PeriodType": "DD"
      } : {}
    }))
    
    return this.http.post<TT01DataDTO>(`${this.apiUrl}/r1/${PrintObjectID}/data/unauthorized`, query,{
      headers: {
        "Content-Type": "application/json"
      }, responseType: 'json'
      
    },)

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

