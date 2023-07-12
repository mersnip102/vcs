import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import axios from 'axios';
import * as moment from 'moment';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { AccountService } from 'src/app/services/account/account.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PagesService } from 'src/app/services/pages/pages.service';
import { DataService } from 'src/app/shared/data.service';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';
import { NotifyService } from 'src/app/shared/utils/notify';

@Component({
  selector: 'app-quan-ly-phan-quyen',
  templateUrl: './quan-ly-phan-quyen.component.html',
  styleUrls: ['./quan-ly-phan-quyen.component.css']
})
export class QuanLyPhanQuyenComponent implements OnInit {
  isVisible = false;
  listAccount: any;

  selectedAccountId!: number;
  status: string = '';
  showModal(id: any): void {

    // if(statusReport == 'Đã duyệt') {
    //   this.status = '1'
    // } else if (statusReport == 'Không duyệt') {
    //   this.status = '0'
    // } else {
    //   this.status = '2'
    // }

    this.selectedAccountId = id;
    if (this.selectedAccountId == -1) {
    
    this.isVisible = true;
    } else {
      
      
      const data = this.listAccount.find((item: any) => item.id == id)
       console.log(data)
     
      this.uploadForm.get('ten')?.setValue(data.ten)
      this.uploadForm.get('username')?.setValue(data.username)
      this.uploadForm.get('email')?.setValue(data.email)
     this.uploadForm.get('phone')?.setValue(data.phone)
      this.uploadForm.get('chuc_danh')?.setValue(data.chuc_danh)
      this.uploadForm.get('dia_chi')?.setValue(data.dia_chi)
      if(data.role == 'Hoạt động') {
        this.uploadForm.get('role')?.setValue(1)
      } else {
        this.uploadForm.get('role')?.setValue(0)
      }
      
      this.uploadForm.get('ho')?.setValue(data.ho)
      this.uploadForm.get('password')?.setValue(data.password)
      this.uploadForm.get('ngay_tao')?.setValue(data.ngay_tao)
      
      this.uploadForm.get('to_chuc')?.setValue(data.to_chuc)
      this.uploadForm.get('status')?.setValue(data.status)
      
      if(data.ngay_tao) {
        const date1 = moment(data.ngay_tao).format('YYYY-MM-DD')
    
        this.uploadForm.get('ngay_tao')?.setValue(date1)
      }

      if(data.ngay_het_han) {
        const date2 = moment(data.ngay_het_han).format('YYYY-MM-DD')
    
    this.uploadForm.get('ngay_het_han')?.setValue(date2)
      }

      this.isVisible = true;
    }
  }



  handleOk(): void {



    if (this.selectedAccountId == -1) {
      console.log("okeee")
      this.notifyService.confirmAdd('Bạn có chắc chắn muốn tạo mới một account?').then(async (result) => {
        if (result) {


          // let formData: FormData = new FormData();

          // for(let key in this.uploadForm.value){
          //   // if(key != 'File'&& key != 'NguoiBaoCao'){

          //     formData.append(key, this.uploadForm.get(key)?.value);


          //   // }
          // }

          const data = {

            id: this.uploadForm.get('id')?.value,
            ten: this.uploadForm.get('ten')?.value,
            username: this.uploadForm.get('username')?.value,
            email: this.uploadForm.get('email')?.value,
            phone: this.uploadForm.get('phone')?.value,
            chuc_danh: this.uploadForm.get('chuc_danh')?.value,
            dia_chi: this.uploadForm.get('dia_chi')?.value,
            role: this.uploadForm.get('role')?.value,
            ho: this.uploadForm.get('ho')?.value,
            password: this.uploadForm.get('password')?.value,
            ngay_tao: this.uploadForm.get('ngay_tao')?.value,
            cap_tren: this.uploadForm.get('cap_tren')?.value,
            to_chuc: this.uploadForm.get('to_chuc')?.value,
            status: this.uploadForm.get('status')?.value,
            ngay_het_han: this.uploadForm.get('ngay_het_han')?.value,


          }

          console.log(this.uploadForm.get('role')?.value)



          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));




          // const Id = this.route.snapshot.params['Id'];

          this.api.createAccount(data)
            .subscribe(
              response => {
                console.log(response);

                this.isVisible = false;
                this.notifyService.successMessage("Tạo mới nhóm người dùng thành công").then(
                  () => {
                    this.uploadForm.reset()
                    this.getAccountList();
                    

                  }
                );


                // TODO: Update the list of users
              },
              error => {
                this.notifyService.errorMessage(error.error.message)
                console.error(error);
              }
            );
        }
      })
    } else {
      const data = {

        id: this.uploadForm.get('id')?.value,
        ten: this.uploadForm.get('ten')?.value,
        username: this.uploadForm.get('username')?.value,
        email: this.uploadForm.get('email')?.value,
        phone: this.uploadForm.get('phone')?.value,
        chuc_danh: this.uploadForm.get('chuc_danh')?.value,
        dia_chi: this.uploadForm.get('dia_chi')?.value,
        role: this.uploadForm.get('role')?.value,
        ho: this.uploadForm.get('ho')?.value,
        password: this.uploadForm.get('password')?.value,
        ngay_tao: this.uploadForm.get('ngay_tao')?.value,
        cap_tren: this.uploadForm.get('cap_tren')?.value,
        to_chuc: this.uploadForm.get('to_chuc')?.value,
        status: this.uploadForm.get('status')?.value,
        ngay_het_han: this.uploadForm.get('ngay_het_han')?.value,


      }

      this.notifyService.successMessage("Tạo mới nhóm người dùng thành công").then(
        () => {
      this.api.updateAccount(this.selectedAccountId, data)
        .subscribe(
          response => {
            console.log(response);
            this.isVisible = false;

            this.notifyService.successMessage("Chỉnh sửa nhóm người dùng thành công").then(
              () => {

                this.getAccountList();

              }
            );


            // TODO: Update the list of users
          },
          error => {
            this.notifyService.errorMessage(error.error.message)
            console.error(error);
          }
        );
        })

    }

  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.uploadForm.reset()
  }



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
  statusForm!: FormGroup;

  async ngOnInit(): Promise<void> {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));
    // this.roleUser = decodedToken.role;





    this.uploadForm = this.formBuilder.group({
      id: new FormControl(''),
      ten: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      chuc_danh: new FormControl(),
      dia_chi: new FormControl(''),
      role: new FormControl(''),
      ho: new FormControl(''),
      password: new FormControl(''),
      re_password: new FormControl(''),
      ngay_tao: new FormControl(''),
      cap_tren: new FormControl(''),
      to_chuc: new FormControl(''),
      status: new FormControl(''),
      ngay_het_han: new FormControl(''),

    });
    this.statusForm = this.fb.group({
      status: ['', Validators.required],
      idBaoCao: ['', [Validators.required]],
    })
    await this.getAccountList()
    await this.getToChucList()
    await this.getGroupUserList()


  }

  listToChuc: any;

  getToChucList() {

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));
    
    const query = {
      id: decodedToken.id,
      role: decodedToken.role
    };
    // this.idStudent = this.route.snapshot.params['Id'];
    this.api.getToChucList().subscribe((res: any) => {
      this.listToChuc = res.data;
     

      
    }, error => {
      this.notifyService.errorMessage(error.error.message);
      console.log(error);
    }

    );

  }

  listGroupUser: any;

  getGroupUserList() {

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));
    
    const query = {
      id: decodedToken.id,
      role: decodedToken.role
    };
    // this.idStudent = this.route.snapshot.params['Id'];
    this.api.getNhomNguoDungList().subscribe((res: any) => {
      this.listGroupUser = res.data;
     

      
    }, error => {
      this.notifyService.errorMessage(error.error.message);
      console.log(error);
    }

    );

  }

  getAccountList() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));
   
    const query = {
      id: decodedToken.id,
      role: decodedToken.role
    };
    // this.idStudent = this.route.snapshot.params['Id'];
    this.api.getAccountList().subscribe((res: any) => {
      this.listAccount = res.data;

      
    }, error => {
      this.notifyService.errorMessage(error.error.message);
      console.log(error);
    }

    );
  }


  deleteAccount(id: any) {
    this.notifyService.confirmDelete().then((result) => {
      if (result) {
        this.api.deleteAccount(id).subscribe((res: any) => {
          this.notifyService.successMessage("Xóa tài khoản thành công");
          this.getAccountList();
        }, error => {
          this.notifyService.errorMessage(error.error.message);
          console.log(error);
        }
        )
      }
    })
  }




  getCurentLocation() {


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(this.latitude, this.longitude);
        this.center = { lat: this.latitude, lng: this.longitude };
        this.markerPosition = { lat: this.latitude, lng: this.longitude };

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
    private modal: NzModalService,
    private dataService: DataService, private fb: FormBuilder, private authService: AuthService,
    private localStorageSv: LocalStorageService,
    private renderer2: Renderer2,
    private cdr: ChangeDetectorRef,
    private nzImageService: NzImageService,
    private http: HttpClient,
    private api: AccountService,
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
    this.fileList = [];
    this.fileList = [...info.fileList];

    console.log(this.fileList.length)

   



  }


  

  navigateTaoBaoCao(id: any): any {


    this.dataService.sendDataId(id);
    this.router.navigate(['pages/bao-cao-hinh-anh/lap-bao-cao']);

  }


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
