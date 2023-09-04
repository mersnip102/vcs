import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Client } from 'src/app/services/proxies/proxies.service';
import { listMenu } from 'src/app/shared/router';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, OnDestroy {
  messages: string[] = [];
  inputMessage: string = '';
  isChatbotOpen: boolean = false;

  // socket = io('http://localhost:3000');

toggleChatbot() {
  this.isChatbotOpen = !this.isChatbotOpen;
}


sendMessage(option: string) {
  this.messages.push(option);
  // Gửi tin nhắn tới server (nếu cần thiết)
}
  roleUserCurrent!: number;

  constructor(private router: Router, private authService: AuthService,  private http: HttpClient, private api: Client,) {
    
    // this.authService.roleUser.subscribe(res => {
      
    //   if(res == 4) {
    //     this.router.navigateByUrl("/auth/login");
    //   } else {
    //     this.roleUserCurrent = res;
    //     console.log(res)
    //     // this.listMenu = listMenu[this.roleUserCurrent].permission;
    //     this.router.navigateByUrl(listMenu[this.roleUserCurrent].defaultScreen);
    //     console.log(listMenu[this.roleUserCurrent].defaultScreen)
    //   }
    // }
    
    // );
    
  }
  ngOnDestroy(): void {
    localStorage.removeItem('stoken')
    localStorage.clear();
  }
  @HostListener('window:beforeunload')
  onBeforeUnload() {
    localStorage.removeItem('stoken')
    localStorage.clear();
  }

  userInfo: any;
  getUserInfo(): void {
    // Gọi API để lấy thông tin người dùng
    this.api.getUserInfo().subscribe((response: any) => {
    
      this.userInfo = response;
      console.log(response)
      this.authService.setUserInfo(this.userInfo.body.result);
    });
  }
  ngOnInit(): void {
    this.getUserInfo();
  }

}
