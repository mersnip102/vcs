import { Component, EventEmitter, Output } from '@angular/core';
import { listMenu } from 'src/app/shared/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  listMenu: any;
  
  ngOnInit(): void {
    this.listMenu = listMenu.permission;
  }

  isCollapsed = false;
  @Output() statusEvent = new EventEmitter<string>();
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.statusEvent.emit(this.isCollapsed ? 'collapsed' : 'not collapsed');
  }

  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false,
    sub4: false,
    sub5: false,
    sub6: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

}
