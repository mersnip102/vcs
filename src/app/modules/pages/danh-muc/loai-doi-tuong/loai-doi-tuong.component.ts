import { Component } from '@angular/core';

@Component({
  selector: 'app-loai-doi-tuong',
  templateUrl: './loai-doi-tuong.component.html',
  styleUrls: ['./loai-doi-tuong.component.css']
})
export class LoaiDoiTuongComponent {
  doiTuong = {
    title: "Quản lý đối tượng",

    columnName: 
      "Tên loại đối tượng",
    
    data: [
      "Đối tượng 6",
      "Đối tượng 7",
      "Đối tượng 8",
      "Đối tượng 9",
      "Đối tượng 10",

    ]
  }

}
