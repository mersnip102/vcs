import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: NgForm | null;
  rememberMe?: any;
  username?: any 
  password?: string
  // passwordVisible = false;
  
  ngOnInit(): void {
    
  }

  constructor( private authService: AuthService,
    // private localStorageSv: LocalStoreService,
        
    private route: ActivatedRoute,
    private http: HttpClient,
    
    private router: Router,
    // private notifyService: NotifyService
    ) { }

  
  login() {
    // this.accountService.login(this.account).subscribe((data: any) => {
    //   localStorage.setItem('token', data.token);
    //   this.router.navigate(['/pages']);
    // }, (error: any) => {
    //   console.log(error);
    // });
  }


}
