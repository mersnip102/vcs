import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nhom-nguoi-dung',
  templateUrl: './nhom-nguoi-dung.component.html',
  styleUrls: ['./nhom-nguoi-dung.component.css']
})
export class NhomNguoiDungComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  isVisible = false;
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

  

}
