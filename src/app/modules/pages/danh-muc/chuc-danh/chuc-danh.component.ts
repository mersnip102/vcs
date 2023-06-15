import { Component } from '@angular/core';

@Component({
  selector: 'app-chuc-danh',
  templateUrl: './chuc-danh.component.html',
  styleUrls: ['./chuc-danh.component.css']
})
export class ChucDanhComponent {
  chucDanh = {
    title: "Quản lý chức danh",

    columnName: 
      "Tên loại đối tượng",
    
    data: [
      "Đối tượng 1",
      "Đối tượng 2",
      "Đối tượng 3",
      "Đối tượng 4",
      "Đối tượng 5",

    ]
  }

}
