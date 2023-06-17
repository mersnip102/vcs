import { Component } from '@angular/core';

@Component({
  selector: 'app-duyet-bao-cao',
  templateUrl: './duyet-bao-cao.component.html',
  styleUrls: ['./duyet-bao-cao.component.css']
})
export class DuyetBaoCaoComponent {
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
