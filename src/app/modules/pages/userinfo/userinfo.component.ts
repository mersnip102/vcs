import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Any } from '@grpc/grpc-js/build/src/generated/google/protobuf/Any';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Client } from 'src/app/services/proxies/proxies.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  private citis?: HTMLSelectElement  
  private districts?: HTMLSelectElement 
  private wards?: HTMLSelectElement 

   // lay api ra

  private renderCity(data: any) {

    for (const x of data) {
      this.citis!.options[this.citis!.options.length] = new Option(x.Name, x.Id);
    }
    this.citis!.onchange = () => {
      this.districts!.length = 1;
      this.wards!.length = 1;
      if (this.citis!.value !== "") {
        const result = data.filter((n: any) => n.Id === this.citis!.value);

        for (const k of result[0].Districts) {
          this.districts!.options[this.districts!.options.length] = new Option(k.Name, k.Id);
        }
      }
    };
    this.districts!.onchange = () => {
      this.wards!.length = 1;
      const dataCity = data.filter((n: any) => n.Id === this.citis!.value);
      if (this.districts!.value !== "") {
        const dataWards = dataCity[0].Districts.filter((n: any) => n.Id === this.districts!.value)[0].Wards;

        for (const w of dataWards) {
          this.wards!.options[this.wards!.options.length] = new Option(w.Name, w.Id);
        }
      }
    };
  }
  
    // lay api ra

  nodes = [
    {
      title: '11 - Tổ chức Grap',
      key: '00',
      expanded: true,
      children: [
        {
          title: '02 Tổ chức 2',
          key: '000',
          expanded: true,
          children: [
            { title: '04 - Tổ chức 04', key: '0000', isLeaf: true },
           
          ]
        },
        
        
      ]
    },
    {
      title: '03 - Tổ chức 03',
      key: '01',
      isLeaf: true,
    },
    {
      title: '01-Tổ chức 04',
      key: '02',
      
      expanded: true,
      children: [
        {
          title: '011-Xã ĐT',
          key: '010',
          children: [
            { title: '012-Thôn TK3', key: '0100', expanded: true, children: [ 
              { title: '013-Tổ vệ sinh', key: '01000', isLeaf: true },
              
            ] },
           
          ]
        },
      ]
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  isVisible = false;

  userInfo: any
  constructor(private router: Router, private authService: AuthService,  private http: HttpClient, private api: Client,) {}
  async ngOnInit(): Promise<void> {
    const children: string[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(`${i.toString(36)}${i}`);
    }
    this.listOfOption = children;

    this.authService.userInfo$.subscribe((userInfo: any) => {
      this.userInfo = userInfo
      console.log(this.userInfo)
    });
    
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  listOfOption: string[] = [];
  listOfSelectedValue = ['a10', 'c12'];

  

}
