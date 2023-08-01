import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as e from 'express';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';
import { NotifyService } from 'src/app/shared/utils/notify';
import { RoleNumber } from 'src/app/shared/utilities';
import * as _ from "lodash";
import { REACT_APP_URL_SEND_STOKEN, environmentAPI } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { UrlParams } from 'src/app/shared/constants';

interface ProjectNode {
  name: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: NgForm | null;
  rememberMe?: any;
  username?: any 
  password?: any
  // passwordVisible = false;
  
  uploadedFiles: any[] = [];

    

    onUpload(event: any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        
    }

    
    status: any;
    durationInSeconds = 5;
    constructor(
      private cookieService: CookieService,
      
      private authService: AuthService, private localStorageSv: LocalStorageService,
        
        private route: ActivatedRoute,
        private http: HttpClient,
        
        private router: Router,
        private notifyService: NotifyService) { } //dependency injection

        // showToast() {
        //     this.toastr.success('Success!', 'Toastr Message');
        //   }

        //   showSuccess() {
        //     this.toastr.success('Thành công', 'Thông báo', {
        //       timeOut: 2000,
        //       progressBar: true,
        //       progressAnimation: 'increasing',
        //       closeButton: true,
        //       positionClass: 'toast-top-right'
        //     });
        //   }


        getCookieValue(): void {
          // Lấy giá trị của cookie
          const cookieValue = this.cookieService.get('AUTH_COOKIE');
          console.log(cookieValue);
        }

        tgtoken?: string | null;
        stoken?: string | null;
        isAuth: string | undefined;
      
        
    ngOnInit(): void {
      
        // this.loginForm.patchValue({
        //     phone: this.route.snapshot.queryParamMap.get('phone')!,
        //     password: this.route.snapshot.queryParamMap.get('password')!
        //   });
        
        // window.location.href = environmentAPI.REACT_APP_SSO_SITE_URL
        
        this.phone = this.route.snapshot.queryParamMap.get('phone')!;
        this.password = this.route.snapshot.queryParamMap.get('password')!;
      

        const cookies = document.cookie


        const query = this.route.snapshot.queryParamMap;
        this.tgtoken = query.get(UrlParams.TGTOKEN);
        this.stoken = query.get(UrlParams.STOKEN);
        this.isAuth = localStorage.getItem('stoken') || undefined;
    
        console.log(query.get(UrlParams.STOKEN));
        console.log(query.get(UrlParams.TGTOKEN));
        console.log(this.isAuth);
        console.log(this.tgtoken)
    
        if (this.tgtoken) {
          
          this.redirectToSSOSiteToGetSTicket(
            environmentAPI.REACT_APP_LOGIN_URL,
            this.tgtoken
          );
        } else if (this.stoken) {
          this.adoptNewSToken(this.stoken);
        } else if (!this.isAuth) {
          this.redirectToSSOSite(environmentAPI.REACT_APP_LOGIN_URL);
        } else {
          console.log("testtttttttttttt")
          this.router.navigate(['/'])
        }

     }

     redirectToSSOSite(requestUrl: string) {
      window.location.href =
        environmentAPI.REACT_APP_SSO_SITE_URL +
        '?' +
        new URLSearchParams({ ReturnUrl: requestUrl }).toString();
    }
  
    redirectToSSOSiteToGetSTicket(requestUrl: string, tgtoken: string) {
      const url = REACT_APP_URL_SEND_STOKEN(requestUrl, tgtoken)
      // `https://cas.phanmemvcs.com/Authenticate.aspx?ReturnUrl=${requestUrl}&TGT=${tgtoken}&SVC=https://projectydev.phanmemvcs.com/`
      const serviceUrl = this.getServiceUrl();
      window.location.href = url
        // environmentAPI.REACT_APP_SSO_SITE_URL +
        // '?' +
        // new URLSearchParams({
        //   ReturnUrl: requestUrl,
        //   TGT: tgtoken,
        //   SVC: serviceUrl
        // }).toString();
    }
  
    adoptNewSToken(stoken: string) {
      // this.authService.setSToken(stoken);
      localStorage.setItem('stoken', stoken);
      this.router.navigate(['/']).then(() => {
        this.notifyService.successMessage("Đăng nhập thành công");
      }
      );
    }
  
    getServiceUrl(): string {
      return environmentAPI.REACT_APP_DEFAULT_URL;
    }

    //  openSnackBar() {
    //     this._snackBar.openFromComponent(ToastComponent, {
    //       duration: this.durationInSeconds * 1000,
    //     });
    //   }

    // loginForm = new FormGroup({
    //     phone: new FormControl('', [Validators.required, Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/)]),
    //     password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    // })



    






    phone?: any;
   
    login() {
     
        
        this.authService.login(
            this.username,
            this.password,
        ).subscribe(async res => {
        

          

       
          
              

            
        const helper = new JwtHelperService();
        const userId = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON('accessToken')).sub;

          console.log(userId);
        this.authService.getRoleUser(userId).subscribe(async res => {
          
          if (Object.values(RoleNumber).indexOf(res.result[0].roleCode) !== -1) {
            // Nếu chuỗi tồn tại trong enum RoleNumber, trả về giá trị đó
           
            await this.authService.setValueRole(RoleNumber[res.result[0].roleCode] as any);
            await this.router.navigate(['/pages']).then(() => {
              this.notifyService.successMessage("Đăng nhập thành công");
            });
           
          }
          
          
         
        
        }, error => {
          console.log(error);
        })

          
          
          
          // confirm("Đăng nhập thành công");

            // var d = JSON.parse(res); //doi tu json sang object
            //     console.log(d.account.ID);
            // const expriesAt = moment().add(d.expiresIn, 'second'); // add de cong them thoi diem hien tai + khoang thoi gian 480s nua thi no se het han
            // localStorage.setItem('id_token', d.idToken);
            // localStorage.setItem('expires_at', JSON.stringify(expriesAt.valueOf()));

            // localStorage.setItem('account', JSON.stringify(d.account));
            
            // if(d.account.Role == 0){
            //     this.toastService.success({detail:"Login success", duration: 3000})
            //     this.router.navigateByUrl('/admissions');
                
            // } else if(d.account.Role == 1){
            //     this.toastService.success({detail:"Login success", duration: 3000})
            //     this.router.navigate(['/students']);
            // }

            
        
            // luu lai trang trc roi quay lai trang do, sau do xoa di
                // this.router.navigateByUrl('/students');
                // localStorage.setItem('token', res.result);
        },
        
        error => {
           
            console.log(error); 
            this.notifyService.errorMessage(error.error.error.details);
            
        }
        
        );

    }

    // details: LoginDetails = {
    //     username: null,
    //     password: null,
    // }
    // isValidated(ctrl: NgModel): boolean | null {
    //     var result: boolean | null
    //         = ctrl.valid || (ctrl.pristine && ctrl.untouched)
    //     return result;
    // }
    // getValidationClass(ctrl: NgModel): any {
    //     // solution 1: return a class name as string
    //     if (ctrl.touched && ctrl.value && this.isValidated(ctrl)) {
    //         return 'is-valid';
    //     } else if (!this.isValidated(ctrl)) {
    //         return 'is-invalid';
    //     } else {
    //         return '';
    //     }

    // }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
       
        this.router.navigateByUrl('/login');
    }

    // logined() {
    //     const str = localStorage.getItem('expires_at') || ""; // || " " nghia la neu khong co thi gan cho gia tri rong dung cho const
    //     if(str == ""){
    //         return false; //chua login

    //     }
    //     const expriesAt = JSON.parse(str);
    //     // return moment().isBefore(moment(expriesAt)); //isBefore kiem tra xem thoi gian hien tai co truoc thoi gian expriesAt hay khong - tra ve true or false
    // }

  


}
