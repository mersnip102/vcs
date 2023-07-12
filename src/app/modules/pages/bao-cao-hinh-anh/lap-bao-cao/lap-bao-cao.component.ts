import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import axios from 'axios';
import * as moment from 'moment';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { QuillModules } from 'ngx-quill';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PagesService } from 'src/app/services/pages/pages.service';
import { DataService } from 'src/app/shared/data.service';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';
import { NotifyService } from 'src/app/shared/utils/notify';
import { environment } from 'src/environments/environment.prod';
declare var google: any;
@Component({
  selector: 'app-lap-bao-cao',
  templateUrl: './lap-bao-cao.component.html',
  styleUrls: ['./lap-bao-cao.component.css']
})
export class LapBaoCaoComponent implements OnInit {

  private citis?: HTMLSelectElement
  private districts?: HTMLSelectElement
  private wards?: HTMLSelectElement

  latitude!: any;
  longitude!: any;
  mapOptions!: google.maps.MapOptions;

  address: any = '';
  private geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

  // lay api ra
  slecetData: any;
  value?: string;
  
  async onChange() {
    
    // const selectedOptionName = event.target.selectedOptions[0].innerText;
    // this.slecetData = selectedOptionName;
    // console.log(this.citis?.selectedOptions[0].innerText);
    this.value = this.changeLocationOnMap(this.citis?.selectedOptions[0].innerText!,
      this.districts?.selectedOptions[0].innerText!,
      this.wards?.selectedOptions[0].innerText!)

    console.log(this.value)

    let geocoder = await new google.maps.Geocoder();
    geocoder.geocode(
      {
        address: this.value
      },
      (results: any, status: any) => {
        if (status === 'OK') {
          const latlng = results[0].geometry.location;
         this.getAddress(latlng.lat(), latlng.lng())
         this.setLatLong(latlng.lat(), latlng.lng());
          this.center = { lat: latlng.lat(), lng: latlng.lng() };
          this.markerPosition = { lat: latlng.lat(), lng: latlng.lng() };

          
        } else {
          alert(`Geocode was not successful for the following reason: ${status}`);
        }
      }
    );


  }

  changeLocationOnMap(city?: string, district?: string, ward?: string) {


    // this.value = 'Việt Nam'
    // if (city != null &&
    //   city != undefined &&
    //   city != '') {
    //   this.value = `${city}, ` + this.value
    //   if (district != null &&
    //     district != undefined &&
    //     district != '') {
    //     this.value = `${district}, ` + this.value

    // if (ward != null &&
    //   ward != undefined &&
    //   ward != '') {
    //   this.value = `${ward}, ` + this.value
    // }
    //   }
    // }

    // console.log(this.value)
    let result = 'Việt Nam';
    if (city) {
      result = `${city}, ${result}`;
    }
    if (district) {
      result = `${district}, ${result}`;
    }
    if (ward) {
      result = `${ward}, ${result}`;
    }
    return result;
  }

  private renderCity(data: any) {

    for (const x of data) {
      this.citis!.options[this.citis!.options.length] = new Option(x.Name, x.Id);
    }
    this.citis!.onchange = () => {

      this.districts!.length = 1;
      this.wards!.length = 1;
      if (this.citis!.value !== "") {
        const result = data.filter((n: any) => n.Id === this.citis!.value);
        for (const k of result[0].Districts) {
          this.districts!.options[this.districts!.options.length] = new Option(k.Name, k.Id);
        }
      }
    };
    this.districts!.onchange = () => {
      this.wards!.length = 1;
      const dataCity = data.filter((n: any) => n.Id === this.citis!.value);
      if (this.districts!.value !== "") {
        const dataWards = dataCity[0].Districts.filter((n: any) => n.Id === this.districts!.value)[0].Wards;

        for (const w of dataWards) {
          this.wards!.options[this.wards!.options.length] = new Option(w.Name, w.Id);
        }
      }
    };
  }

  // lay api ra

  nodes = [
    {
      title: '11 - Tổ chức Grap',
      key: '00',
      expanded: true,
      children: [
        {
          title: '02 Tổ chức 2',
          key: '000',
          expanded: true,
          children: [
            { title: '04 - Tổ chức 04', key: '0000', isLeaf: true },

          ]
        },


      ]
    },
    {
      title: '03 - Tổ chức 03',
      key: '01',
      isLeaf: true,
    },
    {
      title: '01-Tổ chức 04',
      key: '02',

      expanded: true,
      children: [
        {
          title: '011-Xã ĐT',
          key: '010',
          children: [
            {
              title: '012-Thôn TK3', key: '0100', expanded: true, children: [
                { title: '013-Tổ vệ sinh', key: '01000', isLeaf: true },

              ]
            },

          ]
        },
      ]
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  isVisible = false;
  autocomplete: any;


  getAddress(latitude: any, longitude: any): string {
    const url = `${this.geocodeUrl}?latlng=${latitude},${longitude}&key=AIzaSyAkzMp9vyXtwqh4o6pAMzGal7IXUmuRgGU`;

    this.http.get(url).subscribe((res: any) => {

     
      console.log(res);
      this.address = res.results[0].formatted_address;
      console.log(this.address);
      this.uploadForm.get('DiaChi')?.setValue(this.address);
    }
    );

    return this.address;


  }

  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };
  markerPosition!: google.maps.LatLngLiteral;
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPosition = (event.latLng.toJSON());
  }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  clearMarker() {
      // Xóa đối tượng Marker bằng cách đặt map của nó là null
      this.markerPosition = { lat: 0, lng: 0 };
      this.uploadForm.get('DiaChi')?.setValue('');
      this.uploadForm.get('Tinh')?.setValue('');
      this.uploadForm.get('Huyen')?.setValue('');
      this.uploadForm.get('Xa')?.setValue('');
    }
  openInfoWindow(marker: MapMarker) {
    const latLng = marker.getPosition();
    const lat = latLng!.lat();
    const lng = latLng!.lng();
    console.log(lat + " " + lng)
    this.getAddress(lat, lng);
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }

  nzFileList: NzUploadFile[] = []

  
  idBaoCao: any  = 0
  async getDataById() {
    this.dataService.currentData.subscribe(data => this.idBaoCao = data);
    if(this.idBaoCao != null && this.idBaoCao != undefined && this.idBaoCao != 0){
      this.api.getBaoCaoHinhAnhById(this.idBaoCao).subscribe((res: any) => {
       
        let data = { ...res.data[0]};
        this.status = data.status;
        console.log(this.status);
        this.uploadForm.get('TieuDe')?.setValue(data.tieu_de);
        this.uploadForm.get('NoiDung')?.setValue(data.noi_dung);
        this.uploadForm.get('KienNghi')?.setValue(data.kien_nghi);
        this.uploadForm.get('LoaiBaoCao')?.setValue(data.loai_bao_cao);
        this.uploadForm.get('DoiTuong')?.setValue(data.doi_tuong);
        this.uploadForm.get('DiaChi')?.setValue(data.dia_chi);
        this.uploadForm.get('DonViChuTri')?.setValue(data.don_vi_chu_tri);
        this.uploadForm.get('DonViLienQuan')?.setValue(data.don_vi_lien_quan);
        this.uploadForm.get('LoaiVuViec')?.setValue(data.loai_vu_viec);
        this.uploadForm.get('KinhDo')?.setValue(data.geo.lat);
        this.uploadForm.get('ViDo')?.setValue(data.geo.lmg);
        this.uploadForm.get('File')?.setValue(data.file);
        
        if(data.file != null && data.file != undefined && data.file != ''){

        const files = data.file.split(', ');
        let temp: any = [];
        for (let i = 0; i < files.length; i++) {
          temp.push({
            uid: (i+1).toString(),
            name: files[i],
            status: 'done',
            url: `${environment.apiUrl}/download/${files[i]}`,
          });
        }
        this.nzFileList = temp
      }

        
        
        this.uploadForm.get('ToChuc')?.setValue(data.to_chuc);
        this.uploadForm.get('NguoiBaoCao')?.setValue(data.nguoi_bao_cao);
        const latLng = data.geo;
        this.setLatLong(latLng.lat, latLng.lng);
        this.center = { lat: latLng.lat, lng: latLng.lng };
        this.markerPosition = { lat: latLng.lat, lng: latLng.lng}
        
        // let data2 = await { ...res.data };
        // for (let key in res.data) {
        //   if (data.hasOwnProperty(key)) {
        //     this.uploadForm.get(key)?.setValue(data[key]);
        //   }
        // }
        
        if(this.roleUser == 2){
          this.uploadForm.disable();
        }
  
        // }
      }, (err: any) => {
        console.log(err);
        
      });
      return

    }else{
      this.idBaoCao = 0;
      this.getCurentLocation()
      return
    }


   
  }
  roleUser: any = 0;
  previousUrl!: string;

  goBack() {
    // console.log(this.previousUrl);
    // if (this.previousUrl) {
    //   this.router.navigateByUrl(this.previousUrl);
    // }

    if(this.roleUser == 1){
      this.router.navigate(['/pages/bao-cao-hinh-anh/quan-ly-bao-cao']);
    }else if(this.roleUser == 2){
      this.router.navigate(['/pages/bao-cao-hinh-anh/duyet-bao-cao']);
    }
  }
 

  @ViewChild('saveButton') saveButton!: ElementRef;
  ngOnInit() {

    // this.router.events.subscribe((event ) => {
      
    //   if (event  instanceof NavigationEnd) {
    //     this.previousUrl = event.url;
    //     console.log("okeee");
    //     console.log(this.previousUrl);
    //   }
    // });



    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));
    this.roleUser = decodedToken.role;

    
    
    
    
    this.uploadForm = this.formBuilder.group({
      // Id: new FormControl(''),
      TieuDe: new FormControl('', [Validators.required, Validators.minLength(10)]),
      NoiDung: new FormControl(''),
      KienNghi: new FormControl(''),
      LoaiBaoCao: new FormControl('',[Validators.required]),
      DoiTuong: new FormControl('',[Validators.required]),
      DonViChuTri: new FormControl('',[Validators.required]),
      DonViLienQuan: new FormControl(''),
      LoaiVuViec: new FormControl(''),
      File:  [[]],
      KinhDo: new FormControl(''),
      ViDo: new FormControl(''),
      DiaChi: new FormControl(''),
      NgayTao: new FormControl(''),
      Status: new FormControl(''),
      NguoiBaoCao: new FormControl(''),

      Tinh: new FormControl(''),
      Huyen: new FormControl(''),
      Xa: new FormControl(''),
    });

    this.citis = document.getElementById("city") as HTMLSelectElement;
    this.districts = document.getElementById("district") as HTMLSelectElement;
    this.wards = document.getElementById("ward") as HTMLSelectElement;
    // lay api ra
    axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
      .then(result => {

        this.renderCity(result.data);

      });
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      {
        types: ['geocode']
      });

    console.log(this.autocomplete);
    this.getDataById();
    // this.getCurentLocation();



    // Đăng ký sự kiện khi người dùng chọn một địa điểm từ danh sách gợi ý
    // this.autocomplete.addListener('place_changed', this.onPlaceChanged);
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      
      this.getAddress(lat, lng);
      this.markerPosition = { lat, lng };
      this.center = { lat, lng };
      this.uploadForm.get('Tinh')?.setValue("");
      this.uploadForm.get('Huyen')?.setValue("");
      this.uploadForm.get('Xa')?.setValue("");

      this.setLatLong(lat, lng);
    
    });

    // this.autocomplete.addListener("place_changed", () => {


    //   const place = this.autocomplete.getPlace();

    //   if (!place.geometry || !place.geometry.location) {
    //     // User entered the name of a Place that was not suggested and
    //     // pressed the Enter key, or the Place Details request failed.
    //     window.alert("No details available for input: '" + place.name + "'");
    //     return;
    //   }

    //   // If the place has a geometry, then present it on a map.
    //   console.log(place.geometry.location.lat());
    //   // console.log(place);
    // });






    const children: string[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(`${i.toString(36)}${i}`);
    }
    this.listOfOption = children;
    this.citis = document.getElementById("city") as HTMLSelectElement;
    this.districts = document.getElementById("district") as HTMLSelectElement;
    this.wards = document.getElementById("ward") as HTMLSelectElement;
    axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
      .then(result => {

        this.renderCity(result.data);
      });


      // this.saveButton.nativeElement.disabled = true;
  }

  lat: any = 0
  lng: any = 0

  setLatLong(lat: any, lng: any) {
    this.uploadForm.get('KinhDo')?.setValue(lat);
    this.uploadForm.get('ViDo')?.setValue(lng);
    this.uploadForm.get('KinhDo')?.disable();
    this.uploadForm.get('ViDo')?.disable();
  }


  getCurentLocation() {
    
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        
        this.center = { lat: this.latitude, lng: this.longitude };
        this.markerPosition = { lat: this.latitude, lng: this.longitude };
        this.setLatLong(this.latitude, this.longitude);
        this.uploadForm.get('Tinh')?.setValue("")
        this.uploadForm.get('Huyen')?.setValue("")
        this.uploadForm.get('Xa')?.setValue("")
        this.getAddress(position.coords.latitude, position.coords.longitude)

        
        

        this.mapOptions = {
          center: { lat: this.latitude, lng: this.longitude },
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        };
        // this.markerPosition = { lat: this.latitude, lng: this.longitude };
        // console.log(this.mapOptions);
        
        


        

      });






    } else {
      this.notifyService.warningMessage('Geolocation is not supported by this browser.');

    }
  }

  onPlaceChanged() {
    // this.autocomplete = new google.maps.places.Autocomplete(
    //   document.getElementById('autocomplete'),
    //   {
    //     types: ['geocode']
    //   });
    // console.log(this.autocomplete);
    const place = this.autocomplete
    console.log(place);
    if (place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      console.log(`Kinh độ: ${lng}, Vĩ độ: ${lat}`);
    }
  }

  

  

  handleCancel(): void {
    
    this.isVisible = false;
  }

  async loadData() {
    this.citis = document.getElementById("city") as HTMLSelectElement;
    this.districts = document.getElementById("district") as HTMLSelectElement;
    this.wards = document.getElementById("ward") as HTMLSelectElement;
    await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
      .then(result => {

        this.renderCity(result.data);
      });

  }

  listOfOption: string[] = [];
  listOfSelectedValue = ['a10', 'c12'];


  defaultFileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error'
    }
  ];

  fileList1 = [...this.defaultFileList];
  fileList2 = [...this.defaultFileList];

  center: any = { lat: 21.027763, lng: 105.834160 };
  zoom = 13;
  selectedProvince!: string;

  onSelectChange() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        address: `${this.citis}, Vietnam`
      },
      (results: any, status: any) => {
        if (status === 'OK') {
          const latlng = results[0].geometry.location;
          this.center = { lat: latlng.lat(), lng: latlng.lng() };
          console.log(latlng);
        } else {
          alert(`Geocode was not successful for the following reason: ${status}`);
        }
      }
    );
  }

  roleUserCurrent!: number;
  uploadForm!: FormGroup;
  constructor(
    
    private dataService: DataService,
    private fb: FormBuilder, private authService: AuthService,
    private localStorageSv: LocalStorageService,
    private renderer2: Renderer2,
    private cdr: ChangeDetectorRef,
    private nzImageService: NzImageService,
    private http: HttpClient,
    private api: PagesService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notifyService: NotifyService) {
    this.authService.roleUser.subscribe(res => {
      this.roleUserCurrent = res;


    });

    


  }


 
  fileList: any[] = [];
 
  
  handleChange(info: NzUploadChangeParam): void {
    this.fileList= [];
    this.fileList = [...info.fileList];
    
    console.log(this.fileList.length)
  
  }
  status: string = '';
  selectedReportId!: any;

  handleOk(): void {



    if (this.status) {
      const data = { status: this.status, idBaoCao: this.selectedReportId };
      this.api.updateStatus(this.selectedReportId, data)
        .subscribe(
          response => {
            console.log(response);
            this.isVisible = false;
            this.status = '';
            this.notifyService.successMessage("Cập nhật trạng thái báo cáo thành công").then(
              () => {

                this.ngOnInit();

              }
            );


            // TODO: Update the list of users
          },
          error => {
            console.error(error);
          }
        );
    }

  }

  showModal(id: any, statusReport: string): void {
    console.log(statusReport)
    if(statusReport == 'Đã duyệt') {
      this.status = '1'
    } else if (statusReport == 'Không duyệt') {
      this.status = '0'
    } else {
      this.status = '2'
    }

    this.selectedReportId = id;
    console.log(this.selectedReportId);
    this.isVisible = true;
  }


  async onSubmit() {
    this.notifyService.confirmAdd('Bạn có chắc chắn muốn lưu thông tin?').then(async (result) => {
      if (result) {

        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));

        // await this.api.getAStudent(decodedToken.Phone
        // ).subscribe(async res => {
        //   console.log(res);



        //   var d: any = res;
        //   this.editStatus = d.student.AllowEditing

        //   if (this.editStatus == 0 || this.editStatus == 2) {
        //     this.notifyService.warningMessage("Bạn đang không có quyền chỉnh sửa thông tin này");
        //     // this.toastService.warning({duration: 3000, summary: 'You are not authorized to edit this profile.'});
        //     return;
        //   } 

        //add form group value to form data ignore file
        let formData: FormData = new FormData();
        
        for(let key in this.uploadForm.value){
          if(key != 'File'&& key != 'NguoiBaoCao'){
            
            formData.append(key, this.uploadForm.get(key)?.value);
            
          }
        }
       
        
        for (let i = 0; i < this.fileList.length; i++) {
          formData.append('File', this.fileList[i].originFileObj);
          
        }

        const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));
    

       formData.append('NguoiBaoCao', decodedToken.id);

        // const Id = this.route.snapshot.params['Id'];
       

        if(this.idBaoCao == 0 || this.idBaoCao == undefined || this.idBaoCao == null){ 
        this.api.createBaoCaoHinhAnh(formData).subscribe(response => {

          console.log(response);
          // Swal.fire('Saved!', '', 'success')

          this.notifyService.successMessage("Thêm phản ánh thành công").then(() => {
            // reset uploadForm to ''
            for(let key in this.uploadForm.value){
              this.uploadForm.get(key)?.setValue('');
            }
       
            
            this.router.navigate(['/pages/bao-cao-hinh-anh/quan-ly-bao-cao']);
          });

          return
          // this.toastService.success({ detail: "Success", summary: "Edit Success", duration: 3000 });



          // this.router.navigateByUrl('/pages', { skipLocationChange: true }).then(() => {
          //   this.router.navigate(['/pages/profile']).then(() => {
          //     this.notifyService.successMessage("Chỉnh sửa thông tin thành công");
          //     // this.toastService.success({ detail: "Success", summary: "Edit Success", duration: 3000 });
          //   });
          // })
        },
          error => {
            console.log(error);

            this.notifyService.errorMessage(error.error.message).then(() => {
              // this.formData = new FormData();

              console.log(error.error);
            });

            // this.router.navigateByUrl('/pages', { skipLocationChange: true }).then(() => {
            //   this.router.navigate(['/pages/profile']).then(() => {
            //     console.log(error);
            //     this.notifyService.errorMessage("Chỉnh sửa thông tin thất bại");
            //     // this.toastService.error({ detail: "Error", summary: error.statusText, duration: 3000 });
            //   });
            // })
          }
        );

        }else{
         
          
          formData.append('idBaoCao', this.idBaoCao);
          
          this.api.updateBaoCaoHinhAnh(formData).subscribe(response => {

            console.log(response);
            // Swal.fire('Saved!', '', 'success')
  
  
            
  
            this.notifyService.successMessage("Chỉnh sửa phản ánh kiến nghị thành công").then(() => {
              
              
              // reset uploadForm to ''
              for(let key in this.uploadForm.value){
                this.uploadForm.get(key)?.setValue('');
              }
              
              
              
              this.router.navigate(['/pages/bao-cao-hinh-anh/quan-ly-bao-cao']);
              
            });
  
            return
            // this.toastService.success({ detail: "Success", summary: "Edit Success", duration: 3000 });
  
  
  
            // this.router.navigateByUrl('/pages', { skipLocationChange: true }).then(() => {
            //   this.router.navigate(['/pages/profile']).then(() => {
            //     this.notifyService.successMessage("Chỉnh sửa thông tin thành công");
            //     // this.toastService.success({ detail: "Success", summary: "Edit Success", duration: 3000 });
            //   });
            // })
          },
            error => {
              console.log(error);
  
              this.notifyService.errorMessage(error.error.message).then(() => {
                // this.formData = new FormData();
  
                console.log(error.error);
              });
  
              // this.router.navigateByUrl('/pages', { skipLocationChange: true }).then(() => {
              //   this.router.navigate(['/pages/profile']).then(() => {
              //     console.log(error);
              //     this.notifyService.errorMessage("Chỉnh sửa thông tin thất bại");
              //     // this.toastService.error({ detail: "Error", summary: error.statusText, duration: 3000 });
              //   });
              // })
            }
          );

        }

        }


      });

  }



  // // onFileChange(event: any) {
  // //   if (event.target.files.length > 0) {
  // //     const file = event.target.files[0];
  // //     this.profileForm.get('CertificateOfGraduation')!.setValue(file);
  // //   }
  // // }






  private renderCity2(data: any, city: any, district: any, ward: any) {
    console.log(data);
    for (const x of data) {
      this.citis!.options[this.citis!.options.length] = new Option(x.Name, x.Id);
    }
    //set item selected for city
    this.citis!.value = city;


    this.districts!.length = 1;
    this.wards!.length = 1;
    if (this.citis!.value !== "") {
      const result = data.filter((n: any) => n.Id === this.citis!.value);

      console.log(this.citis!.selectedIndex);
      for (const k of result[0].Districts) {
        this.districts!.options[this.districts!.options.length] = new Option(k.Name, k.Id);
      }
    }
    this.districts!.value = district;


    this.wards!.length = 1;
    const dataCity = data.filter((n: any) => n.Id === this.citis!.value);
    if (this.districts!.value !== "") {
      const dataWards = dataCity[0].Districts.filter((n: any) => n.Id === this.districts!.value)[0].Wards;

      for (const w of dataWards) {
        this.wards!.options[this.wards!.options.length] = new Option(w.Name, w.Id);
      }
      this.wards!.value = ward;
    }

  }
}
function saveAs(blob: Blob, arg1: string) {
  throw new Error('Function not implemented.');
}