import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { listMenu } from 'src/app/shared/router';
@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css']
})
export class BasicLayoutComponent {
  listMenu: any;
  ngOnInit(): void {
    // this.listMenu = listMenu.permission;
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

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  receiveStatus($event: any) {
    this.isCollapsed = !this.isCollapsed;
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
