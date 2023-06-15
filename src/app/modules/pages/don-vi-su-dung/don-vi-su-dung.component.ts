import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-don-vi-su-dung',
  templateUrl: './don-vi-su-dung.component.html',
  styleUrls: ['./don-vi-su-dung.component.css']
})
export class DonViSuDungComponent implements OnInit {


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

  constructor() {}
  async ngOnInit(): Promise<void> {
    this.citis = document.getElementById("city") as HTMLSelectElement;
    this.districts = document.getElementById("district") as HTMLSelectElement;
    this.wards = document.getElementById("ward") as HTMLSelectElement;
    await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
   .then(result => {
    
     this.renderCity(result.data);
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

  async loadData() {
    this.citis = document.getElementById("city") as HTMLSelectElement;
    this.districts = document.getElementById("district") as HTMLSelectElement;
    this.wards = document.getElementById("ward") as HTMLSelectElement;
    await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
   .then(result => {
    
     this.renderCity(result.data);
   });
    
  }

 
    

      

}
