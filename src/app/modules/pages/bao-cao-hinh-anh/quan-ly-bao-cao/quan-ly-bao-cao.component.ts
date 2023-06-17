import { Component } from '@angular/core';

@Component({
  selector: 'app-quan-ly-bao-cao',
  templateUrl: './quan-ly-bao-cao.component.html',
  styleUrls: ['./quan-ly-bao-cao.component.css']
})
export class QuanLyBaoCaoComponent {
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
