import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeforeUnloadServiceService {

  constructor() {
    window.addEventListener('beforeunload', () => {
      console.log("okee")
      localStorage.removeItem('stoken')
      // Thêm các giá trị khác nếu cần thiết
    });
  }
}
