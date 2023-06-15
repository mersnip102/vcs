import { Component } from '@angular/core';

@Component({
  selector: 'app-nhiem-vu',
  templateUrl: './nhiem-vu.component.html',
  styleUrls: ['./nhiem-vu.component.css']
})
export class NhiemVuComponent {
  nhiemVu = {
    title: "Quản lý nhiệm vụ",

    columnName: 
      "Tên loại nhiệm vụ",
    
    data: [
      "Đối tượng 11",
      "Đối tượng 12",
      "Đối tượng 13",
      "Đối tượng 14",
      "Đối tượng 15",

    ]
  }

}
