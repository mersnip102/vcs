import { Component } from '@angular/core';

@Component({
  selector: 'app-su-kien',
  templateUrl: './su-kien.component.html',
  styleUrls: ['./su-kien.component.css']
})
export class SuKienComponent {
  suKien = {
    title: "Quản lý sự kiện",

    columnName: 
      "Tên loại sự kiện",
    
    data: [
      "Đối tượng 16",
      "Đối tượng 17",
      "Đối tượng 18",
      "Đối tượng 19",
      "Đối tượng 20",

    ]
  }

}
