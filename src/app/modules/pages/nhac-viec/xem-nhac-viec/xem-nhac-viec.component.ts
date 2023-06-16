import { Component } from '@angular/core';

@Component({
  selector: 'app-xem-nhac-viec',
  templateUrl: './xem-nhac-viec.component.html',
  styleUrls: ['./xem-nhac-viec.component.css']
})
export class XemNhacViecComponent {

   
  

  isVisible = false;

  constructor() {}
  async ngOnInit(): Promise<void> {
    
   
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

  

}
