import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { listMenu } from '../shared/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  roleUserCurrent!: number;

  constructor(private router: Router, private authService: AuthService) {
    
    this.authService.roleUser.subscribe(res => {
      
      if(res == 4) {
        this.router.navigateByUrl("/auth/login");
      } else {
        this.roleUserCurrent = res;
        console.log(res)
        // this.listMenu = listMenu[this.roleUserCurrent].permission;
        this.router.navigateByUrl(listMenu[this.roleUserCurrent].defaultScreen);
      }
    }
    
    );
    
  }

}
