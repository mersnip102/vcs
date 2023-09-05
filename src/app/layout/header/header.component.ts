import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { listMenu } from 'src/app/shared/router';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { environmentAPI } from 'src/environments/environment';
import { Client } from 'src/app/services/proxies/proxies.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentDate!: string;

  getCurrentDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // this.currentDate = date.toLocaleDateString('vn-VN');
  }

  listMenu: any;

  updateTime() {
    const date = new Date();
    const options: any = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZoneName: 'short'
    };
    
    this.currentDate = new Intl.DateTimeFormat('vn-VN', options).format(date);
  }

  async getUserInfo(): Promise<void> {
    // Gọi API để lấy thông tin người dùng
    await this.api.getUserInfo().subscribe(async (response: any) => {
    
      this.userInfo = response;
     
      console.log(response)
      
      this.authService.setUserInfo(this.userInfo.body.result);
    });
    
  }

  userInfo: any;
  async ngOnInit(): Promise<void> {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);

    await this.authService.userInfo$.subscribe((userInfo: any) => {
      this.userInfo = userInfo
      console.log(this.userInfo)
    });
    // this.listMenu = listMenu[];
  }

  roleUserCurrent!: number;

  constructor(private router: Router, private authService: AuthService,  private api: Client,) {
    this.authService.roleUser.subscribe(res => {
      console.log(res);
      if(res == 4) {
        
        // this.router.navigateByUrl("/auth/login");
      } else {
        this.roleUserCurrent = res;
        this.listMenu = listMenu[this.roleUserCurrent].permission;
        // this.router.navigateByUrl(listMenu[this.roleUserCurrent].defaultScreen);
      }
    }
    );
    
  }

  isCollapsed = false;
  @Output() statusEvent = new EventEmitter<string>();
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.statusEvent.emit(this.isCollapsed ? 'collapsed' : 'not collapsed');
  }

  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false,
    sub4: false,
    sub5: false,
    sub6: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  logout() {
    localStorage.removeItem('stoken')
    localStorage.removeItem('tgtoken')
    

    
  window.location.href =
    environmentAPI.REACT_APP_SSO_SITE_URL +
    "?" +
    new URLSearchParams({
      ReturnUrl: environmentAPI.REACT_APP_LOGIN_URL,
      Action: "Logout",
    }).toString();
  
  }

}
