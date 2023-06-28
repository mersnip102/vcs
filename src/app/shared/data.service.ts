import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private myData = new BehaviorSubject<any>(0);
  currentData = this.myData.asObservable();

  constructor() { }

  sendDataId(data: any) {
    this.myData.next(data);
  }
}