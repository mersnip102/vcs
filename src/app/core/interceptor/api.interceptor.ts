import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute, private localStoreService: LocalStorageService) {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   return next.handle(request);
  // }




  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   // Thêm header cố định vào request
  //   // const modifiedRequest = request.clone({
  //   //   headers: request.headers.set('Content-Type', 'application/json')
  //   // });
  //   // // Tiếp tục xử lý request
  //    const modifiedRequest = request.clone({
  //     // headers: request.headers.set('Content-Type', 'application/json')
  //   });
  //   // Tiếp tục xử lý request
  //   return next.handle(modifiedRequest);


  
  
  // }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Lấy token xác thực từ localStorage
   
   
    // const accessToken = this.localStoreService.getLocalStorageItemAsJSON('accessToken')
    const accessToken = localStorage.getItem('stoken')
    
    // Nếu token tồn tại, thêm header Authorization vào yêu cầu HTTP
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }

    // Chuyển tiếp yêu cầu HTTP tới interceptor tiếp theo
    return next.handle(request);
  }



}
