import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { X1Service } from '../x1/x1.service';
import * as e from 'express';

@Injectable({
  providedIn: 'root'
})
export class DanhMucService {
  private api = 'http://192.168.1.10:3032/api/v1/reports/r1/BC_1_1/sample';
  private readonly api2 = environment.apiUrl;
  constructor(private http: HttpClient, private route: ActivatedRoute, private x1Api: X1Service) { }
  getAllDM500(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.x1Api.dMLoaiSoLieu_GetAllPrim(true).subscribe((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }
  

  getAllDM07(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.x1Api.dMGiaiDoan_GetAllPrim(true).subscribe((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  getAllDM501(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.x1Api.dMChiTieuBaoCaoTongHop_GetAllPrim(true).subscribe((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  getAllDM14(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.x1Api.dMDonViTinh_GetAllPrim(true).subscribe((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  getAllD502(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.x1Api.dMChuongTrinh_GetAllPrim(true).subscribe((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  getAllD503(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.x1Api.dMDuAnThuocChuongTrinh_GetAllPrim(true).subscribe((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  getAllDM27(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.x1Api.dMDiaBan_GetAllPrim(true).subscribe((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }



  
  //   const body = JSON.stringify("eJydUsuKwkAQrC8RydkF49Gbqyx6WB84LOxpyWo0WTSKJAcRv2bxP63pGXUSExEJaTpdXdU9NTnAwxg7xEiQYoRf/CHEjPkAPWJtvu/o4ge+vB4awgiFs8GcnAUU8zVrLWEcCh0Ke2z5rTGfj1aI8UF8Q9Yno54dWdygitVy5MKbIEPAPJVJRW412md9xZ2/iQQWaxa0XcxVva8rzhliyereutWUx8ebE5XU2k40Pvaol7zIP1qFDB1q6BsImV++jZaZMuTmsSAJJyn6GTCLeEcmy/cu2ad9/5LoYl12b+22CaaMM3s33vU8hhkTza4T8xqR1debmP8ur6HEk2f7Hp9f4VRLUeee/zWX9Zwj1ewyj6q6b56U9R1xBvQ4i80=")
  //   //stringify de chuyen doi tu object sang json 
  //   console.log(body);
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   return this.http.post(this.api , body, {headers:httpOptions.headers, responseType: 'json'})//stringify de chuyen doi tu object sang json
  //   // return this.http.post(this.api, {headers:httpOptions.headers, responseType: 'json'})
  // }
}
