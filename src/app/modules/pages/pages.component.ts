import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { listMenu } from 'src/app/shared/router';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  roleUserCurrent!: number;

  constructor(private router: Router, private authService: AuthService) {
    // this.authService.roleUser.subscribe(res => {
    //   console.log(res);
    //   if(res == 4) {
        
    //     this.router.navigateByUrl("/auth/login");
    //   } else {
    //     this.roleUserCurrent = res;
    //     this.router.navigateByUrl(listMenu[this.roleUserCurrent].defaultScreen);
    //   }
      
      
    // });

    this.authService.roleUser.subscribe(res => {
      console.log(res);
      if(res == 4) {
        
        this.router.navigateByUrl("/auth/login");
      } else {
        this.roleUserCurrent = res;
        // this.listMenu = listMenu[this.roleUserCurrent].permission;
        this.router.navigateByUrl(listMenu[this.roleUserCurrent].defaultScreen);
        
      }
      
      
    }
    
    
    );
    
  }

}
