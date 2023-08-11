import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  ngOnDestroy(): void {
    localStorage.removeItem('stoken')
    localStorage.clear();
  }
  title = 'VCS.PAKN';
  @HostListener('window:beforeunload')
  onBeforeUnload() {
    localStorage.removeItem('stoken')
    localStorage.clear();
  }
}
