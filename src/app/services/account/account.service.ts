import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private api = 'http://192.168.1.10:3032/api/v1/reports/r1/BC_1_1/sample';
  private readonly api2 = environment.apiUrl;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }


  getPdfData(): Observable<any> {
    const body = JSON.stringify("eJydUsuKwkAQrC8RydkF49Gbqyx6WB84LOxpyWo0WTSKJAcRv2bxP63pGXUSExEJaTpdXdU9NTnAwxg7xEiQYoRf/CHEjPkAPWJtvu/o4ge+vB4awgiFs8GcnAUU8zVrLWEcCh0Ke2z5rTGfj1aI8UF8Q9Yno54dWdygitVy5MKbIEPAPJVJRW412md9xZ2/iQQWaxa0XcxVva8rzhliyereutWUx8ebE5XU2k40Pvaol7zIP1qFDB1q6BsImV++jZaZMuTmsSAJJyn6GTCLeEcmy/cu2ad9/5LoYl12b+22CaaMM3s33vU8hhkTza4T8xqR1debmP8ur6HEk2f7Hp9f4VRLUeee/zWX9Zwj1ewyj6q6b56U9R1xBvQ4i80=")
    //stringify de chuyen doi tu object sang json 
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api , body, {headers:httpOptions.headers, responseType: 'json'})//stringify de chuyen doi tu object sang json
    // return this.http.post(this.api, {headers:httpOptions.headers, responseType: 'json'})
  }

  createAccount(data: any): Observable<any> {

    // const body = JSON.stringify(data);
    console.log(data.ten);
    

    
    
    return this.http.post(`${this.api2}/createAccount`, data,{responseType: 'json'})//stringify de chuyen doi tu object sang json
    // return this.http.post(this.api, {headers:httpOptions.headers, responseType: 'json'})

  }

  getBaoCaoHinhAnhById(id: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(`${this.api2}/getBaoCaoHinhAnhById/${id}`, {headers:httpOptions.headers, responseType: 'json'});


  }

  updateAccount(id: any, data: Object): Observable<any> {
    // const body = JSON.stringify(data);
   
    
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'form-data'
    //   })
    // };
   
    return this.http.put(`${this.api2}/updateAccount/${id}`, data,{responseType: 'json'})//stringify de chuyen doi tu object sang json
    // return this.http.post(this.api, {headers:httpOptions.headers, responseType: 'json'})

  }

  updateStatus(id: any, data: any): Observable<any> {
    // const body = JSON.stringify(data);
   
   
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'form-data'
    //   })
    // };
   
    return this.http.put(`${this.api2}/updateStatus/${id}`, data,{responseType: 'json'})//stringify de chuyen doi tu object sang json
    // return this.http.post(this.api, {headers:httpOptions.headers, responseType: 'json'})

  }

  deleteAccount(id: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(`${this.api2}/deleteAccount/${id}`, {headers:httpOptions.headers, responseType: 'json'});
  }

  getAccountList(): Observable<any> {
    
    return this.http.get(`${this.api2}/getAllAccount`, {responseType: 'json'});
  }

  getToChucList(): Observable<any> {
    
    return this.http.get(`${this.api2}/getAllToChuc`, {responseType: 'json'});
  }

  getNhomNguoDungList(): Observable<any> {
    return this.http.get(`${this.api2}/getAllNhomNguoiDung`, {responseType: 'json'});
  }



}
