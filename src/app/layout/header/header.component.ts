import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { listMenu } from 'src/app/shared/router';

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

  
  ngOnInit(): void {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
    // this.listMenu = listMenu[];
  }

  roleUserCurrent!: number;

  constructor(private router: Router, private authService: AuthService) {
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

}
