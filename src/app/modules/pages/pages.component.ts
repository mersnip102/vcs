import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { listMenu } from 'src/app/shared/router';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  roleUserCurrent!: number;

  constructor(private router: Router, private authService: AuthService) {
    
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
  ngOnInit(): void {
    console.log("tessttttttttt")
  }

}
