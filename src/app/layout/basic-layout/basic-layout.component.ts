import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { listMenu } from 'src/app/shared/router';
@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css']
})
export class BasicLayoutComponent {
  listMenuByRole?: any;
  
  roleUserCurrent!: number;

  constructor(private router: Router, private authService: AuthService) {
    this.listMenuByRole = listMenu[2].permission;
    // this.authService.roleUser.subscribe(res => {
    //   this.roleUserCurrent = res;
      
    //   this.listMenuByRole = listMenu[this.roleUserCurrent].permission;
      
    // });
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


  
  // listMenu: IListMenu[] = [
  //   {
  //     name: 'Email',
  //     roleActivated: [
  //       {
  //         roleNumber: [RoleNumber.student, RoleNumber.admissionsManager],
  //         routerLink: 'email/box-email/inbox',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Chat',
  //     roleActivated: [
  //       {
  //         roleNumber: RoleNumber.student,
  //         routerLink: 'chat-students',
  //       },
  //       {
  //         roleNumber: RoleNumber.admissions,
  //         routerLink: 'chat-admissions',
  //       },
  //     ],
  //   },
  // ];
  
  
  // arr = [];

  logout() {
    this.authService.logout();
  }

}
