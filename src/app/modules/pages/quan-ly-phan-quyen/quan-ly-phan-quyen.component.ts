import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import axios from 'axios';
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
    console.log(this.selectedAccountId);
    this.isVisible = true;
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

          let formData = {

            id: this.uploadForm.get('id'),
            ten: this.uploadForm.get('ten'),
            username: new FormControl(''),
            email: new FormControl(''),
            phone: new FormControl(''),
            chuc_danh: new FormControl(),
            dia_chi: new FormControl(''),
            role: new FormControl(''),
            ho: new FormControl(''),
            password: new FormControl(''),
            ngay_tao: new FormControl(''),
            cap_tren: new FormControl(''),
            to_chuc: new FormControl(''),
            status: new FormControl(''),
            ngay_het_han: new FormControl(''),


          }



          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));




          // const Id = this.route.snapshot.params['Id'];

          this.api.createAccount(formData)
            .subscribe(
              response => {
                console.log(response);

                this.isVisible = false;
                this.notifyService.successMessage("Tạo mới nhóm người dùng thành công").then(
                  () => {

                    this.getAccountList();

                  }
                );


                // TODO: Update the list of users
              },
              error => {
                console.error(error);
              }
            );
        }
      })
    } else {

      // const data = {ten_nhom: this.tenNhom, mo_ta: this.moTa };
      // this.api.updateNhomNguoiDung(this.selectedGroupId, data)
      //   .subscribe(
      //     response => {
      //       console.log(response);
      //       this.isVisible = false;

      //       this.notifyService.successMessage("Chỉnh sửa nhóm người dùng thành công").then(
      //         () => {

      //           this.getNhomNguoiDungList();

      //         }
      //       );


      //       // TODO: Update the list of users
      //     },
      //     error => {
      //       console.error(error);
      //     }
      //   );

    }

  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
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
    const url = `${this.geocodeUrl}?latlng=${latitude},${longitude}&key=AIzaSyBI0DTl9QdF8NjI1g7P3TDvG0wwbjBPfwU`;

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
      ngay_tao: new FormControl(''),
      cap_tren: new FormControl(''),
      to_chuc: new FormControl(''),
      status: new FormControl(''),
      ngay_het_han: new FormControl(''),

    });
    this.statusForm = this.fb.group({
      status: ['', Validators.required],
      idBaoCao: ['', [Validators.required]],
    });
    this.getAccountList();
    this.getToChucList();


  }

  listToChuc: any;

  getToChucList() {

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));
    console.log(decodedToken);
    const query = {
      id: decodedToken.id,
      role: decodedToken.role
    };
    // this.idStudent = this.route.snapshot.params['Id'];
    this.api.getToCHucList().subscribe((res: any) => {
      this.listToChuc = res.data;
      console.log(this.listToChuc);

      console.log(this.listAccount);
    }, error => {
      this.notifyService.errorMessage(error.error.message);
      console.log(error);
    }

    );

  }

  getAccountList() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));
    console.log(decodedToken);
    const query = {
      id: decodedToken.id,
      role: decodedToken.role
    };
    // this.idStudent = this.route.snapshot.params['Id'];
    this.api.getAccountList().subscribe((res: any) => {
      this.listAccount = res.data;

      console.log(this.listAccount);
    }, error => {
      this.notifyService.errorMessage(error.error.message);
      console.log(error);
    }

    );
  }


  deleteAccount(id: any) {
    this.notifyService.confirmDelete().then((result) => {
      if (result) {
        this.api.deleteBaoCaoHinhAnh(id).subscribe((res: any) => {
          this.notifyService.successMessage("Xóa thành công");
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

  // profileForm = this.fb.group({
  //   basicInfo: this.fb.group({
  //     name: 'Nguyễn Xuân Quyền',
  //     nationality: 'Việt Nam',
  //     sex: this.sexOptions[0],
  //     dateOfBirth: '02/12/1998',
  //     placeOfBirth: 'abc',
  //     id: '3423523',
  //     licienseDate: '16/03/2023',
  //     liciensePlace: 'Hà Nội',
  //     phoneNumber: '0379172166',
  //     email: 'mersnip102@gmail.com',
  //     major: this.majorOptions[0],
  //     linkFb: 'test.facebook.com',
  //   }),
  //   highSchoolInfo: this.fb.group({
  //     city: this.cityOptions[0],
  //     graduateYear: '2014',
  //     nameSchool: 'THPT Nguyễn Trãi',
  //   }),
  //   address: this.fb.group({
  //     city: this.cityOptions[0],
  //     district: '',
  //     ward: '',
  //     specificAddress: '',
  //   }),
  //   protector: this.fb.group({
  //     nameProSt: '',
  //     phoneProSt: '',
  //     emailProSt: '',
  //     nameProNd: '',
  //     phoneProNd: '',
  //     emailProNd: '',
  //   }),
  //   brief: this.fb.group({
  //     highSchoolDiploma: '',
  //     highSchoolTranscript: '',
  //     avatar: '',
  //     birthCert: '',
  //     graduationCert: '',
  //     englishCert: '',
  //     idCard: '',
  //     otherDocuments: '',
  //   }),
  // });
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

  // // handleEdit() {
  // //   this.profileForm.enable();
  // // }

  // onFileChange(event: any) {
  //   // let fileList: File[] = event.target.files;
  //   // this.formData.append("File", fileList);
  //   console.log(event.target.files)

  //   // console.log(event.srcElement.files[0].name);
  //   const parent = event.target.parentNode;
  //   // console.log(event.target.parentNode);
  //   const test = this.renderer2.createElement('img');
  //   // const test2 = this.renderer2.createElement('p');
  //   // this.renderer2.setProperty(test2, 'innerHTML', 'Ảnh thay đổi: ');
  //   this.renderer2.setProperty(test, 'src', URL.createObjectURL(event.srcElement.files[0]));
  //   this.renderer2.setStyle(test, 'height', '100px');
  //   this.renderer2.setStyle(test, 'width', '100px');
  //   this.renderer2.setStyle(test, 'margin', '25px');

  //   this.renderer2.insertBefore(parent, test, event.target);
  //   // this.renderer2.insertBefore(test,test2, event.target);



  // }


  fileList: any[] = [];


  handleChange(info: NzUploadChangeParam): void {
    this.fileList = [];
    this.fileList = [...info.fileList];

    console.log(this.fileList.length)

    // this.formData.append('File', this.fileList);

    // for (let i = 0; i < this.fileList.length; i++) {
    //   this.formData.append('File', this.fileList[i].originFileObj);
    //   console.log(this.formData.get('File'))
    // }

    // // Cập nhật giá trị của formGroup
    // this.uploadForm.patchValue({
    //   File: this.fileList.map((file) => file.originFileObj),
    // });



  }


  // handleCancelModalEdit() {
  //   this.verifyFee = false;
  // }
  // handleOkEditFee() {

  //   //get list by select = true
  //   const listFeeType = this.listFee.filter(x => x.select == true);

  //   const data = {
  //     StudentId: this.route.snapshot.params['Id'],
  //     RequestDate: moment().format('YYYY-MM-DD'),
  //     PaymentValue: 20000000,
  //     FeeType: listFeeType
  //   }

  //   console.log(data);

  //   this.notifyService.confirmAdd('Bạn có chắc chắn muốn xác nhận xác minh phí cho học sinh này?').then((result) => {
  //     if (result) {
  //       this.api.addPaymentStudent(data).subscribe(response => {
  //         this.notifyService.successMessage('Gửi xác minh phí thành công');

  //         this.profile()

  //       },
  //         error => {
  //           console.log(error);
  //           this.notifyService.errorMessage('Gửi xác minh phí thất bại');
  //           this.profile()


  //         }
  //       );
  //     }

  //   });
  //   this.verifyFee = false;
  // }
  // show = false;
  // showEdit = false;
  // handleCancelShow() {
  //   this.show = false;
  //   this.showEdit = false;
  // }
  // handleOkShow() {
  //   this.show = false;
  //   this.showEdit = false;
  // }


  // idStudent!: any

  // scholarshipStudent!: any

  // scholarshipSelectedValue!: any

  // form!: FormGroup;


  // editStatus!: number;

  // profileStatus!: number;

  // payments: any[] = [];



  // uploadForm!: FormGroup;

  // selectedFiles?: FileList;
  // currentFile?: File;
  // progress = 0;
  // message = '';



  // ngOptionsGender: Array<string> = ["Nam", "Nữ"]
  // ngDropdownGender = "Nam";
  // years: number[] = [];


  // FullName!: string;
  // CertificateOfGraduation!: File;


  // ngOptionsMajors = ["Công Nghệ Thông Tin", "Quản Trị Kinh Doanh", "Thiêt Kế Đồ Họa", "Quản Trị Marketing", "Quản Trị Sự Kiện", "Quản Trị Truyền Thông"];


  // ngOptionsProvinceTHPT = ["An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước",
  //   "Bình Thuận", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái", "Phú Yên", "Cần Thơ", "Đà Nẵng", "Hải Phòng", "Hà Nội", "TP HCM"];

  // ngOptionsHightSchool = ["An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang"]
  // ngOptionsSemester = ["Spring", "Summer", "Fall"]
  // ngDropdownSemester = "Spring";

  // onClickImage(imageURL: any): void {
  //   const image = [
  //     {
  //       src: imageURL,
  //       width: '300px',
  //       height: '350px',
  //       alt: 'ng-zorro'
  //     }
  //   ]


  //   this.nzImageService.preview(image, { nzZoom: 1.5, nzRotate: 0 });
  // }

  // // images: Images = {
  // //   CertificateOfGraduation: null,
  // //   TemporaryCertificateOfGraduation: null,
  // //   StudyRecords: null,
  // //   EnglishCertificate: null,
  // //   BirthCertificate: null,

  // //   PortraitImage: null,
  // //   CitizenIdentificationIm: null,
  // //   OtherPapers: null,
  // // };

  // // student: Students = {
  // //   FullName: null,
  // //   Gender: null,
  // //   Birthday: null,
  // //   PlaceOfBirth: null,
  // //   Nationality: null,
  // //   CitizenIdentificationNum: null,
  // //   DateCitizenIdentification: null,
  // //   PlaceCitizen: null,
  // //   GraduationYear: null,
  // //   LinkFacebook: null,
  // //   Email: null,
  // //   PhoneNumberSponsor1: null,
  // //   NameSponsor1: null,
  // //   PhoneNumberSponsor2: null,
  // //   NameSponsor2: null,
  // //   EmailSponsor1: null,
  // //   EmailSponsor2: null,
  // //   CertificateOfGraduation: null,
  // // };

  // // openModal(imageUrl: string) {
  // //   const modalRef = this.modalService.open(ImageModalComponent, { size: 'lg' });
  // //   modalRef.componentInstance.imageUrl = imageUrl;
  // // }



  // // imgSrc?:string;
  // // onClick(event: any){
  // //   const imgElem = event.target;
  // //   var target = event.target || event.srcElement || event.currentTarget;
  // //   var srcAttr = target.attributes.src;
  // //   this.imgSrc = srcAttr.nodeValue;
  // //   console.log(this.imgSrc);
  // // }


  // date!: any

  // onChange2(result: Date): void {
  //   console.log('onChange: ', result);
  // }







  // listFee: any[] = []

  // onChange(event: any) {
  //   const Id = event.target.value;
  //   const isChecked = event.target.checked;


  //   this.listFee = this.listFee.map((item) => {
  //     if (item.Id == Id) {
  //       item.select = isChecked;
  //       return item;
  //     }
  //     return item;
  //   });
  //   console.log(this.listFee)



  // }

  // dataImage!: any;

  // profile() {

  //   this.api.getAllFees().subscribe(res => {
  //     console.log(res);
  //     this.listFee = res.fee;

  //   }, error => {
  //     console.log(error);

  //   });

  //   const helper = new JwtHelperService();
  //   const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));

  //   this.idStudent = this.route.snapshot.params['Id'];


  //   //get password from localstorage
  //   // var account: any = localStorage.getItem('account');
  //   // var phone = JSON.parse(account).Phone;
  //   // console.log("dsadsds" + phone);

  //   const Id = this.route.snapshot.params['Id'];





  //   // if(this.loginForm.invalid){
  //   //     return false;
  //   // } 
  //   // truyen du lieu vao form
  //   // console.log(data.phone, data.password);
  //   // this.router.navigateByUrl('/students');

  //   // return true;
  //   // console.log(
  //   //  this.resetPasswordForm.value);
  //   // if (this.resetPasswordForm.value.oldPassword != oldPw) {

  //   //   alert("Mật khẩu cũ không đúng");
  //   //   return false;
  //   // }
  //   // else if (this.resetPasswordForm.value.newPassword != this.resetPasswordForm.value.reNewPassword) {
  //   //   alert("Mật khẩu mới không trùng khớp");
  //   //   return false;
  //   // }
  //   // else {


  //   this.api.getStudentById(Id
  //   ).subscribe(async res => {



  //     var d = await JSON.parse(res)

  //     this.payments = d.payments

  //     this.api.getScholarshipByStudent(d.student.Id).subscribe(async res => {
  //       this.scholarshipStudent = res.scholarship[0];
  //       console.log(this.scholarshipStudent);

  //       this.citis = document.getElementById("city") as HTMLSelectElement;
  //       this.districts = document.getElementById("district") as HTMLSelectElement;
  //       this.wards = document.getElementById("ward") as HTMLSelectElement;
  //       // lay api ra
  //       await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
  //         .then(result => {
  //           this.dataProvince = result.data;
  //           this.renderCity(result.data);
  //           this.renderCity2(this.dataProvince, this.uploadForm.get('Province')?.value, this.uploadForm.get('District')?.value, this.uploadForm.get('Commune')?.value);
  //         });

  //     }, error => {
  //       console.log(error);
  //     });

  //     this.editStatus = d.student.AllowEditing

  //     this.profileStatus = d.student.EnoughProfile



  //     localStorage.setItem('studentPhone', d.student.Phone);

  //     let data = await { ...d.student };
  //     this.dataImage = data
  //     console.log(data);

  //     let array = await data.ImageFolder.split('\\')




  //     this.images = {
  //       CertificateOfGraduation: 'http://localhost:3000/' + array.slice(7, array.length).join('/') + '/' + data.CertificateOfGraduation,
  //       TemporaryCertificateOfGraduation: 'http://localhost:3000/' + array.slice(7, array.length).join('/') + '/' + data.TemporaryCertificateOfGraduation,
  //       StudyRecords: 'http://localhost:3000/' + array.slice(7, array.length).join('/') + '/' + data.StudyRecords,
  //       EnglishCertificate: 'http://localhost:3000/' + array.slice(7, array.length).join('/') + '/' + data.EnglishCertificate,
  //       BirthCertificate: 'http://localhost:3000/' + array.slice(7, array.length).join('/') + '/' + data.BirthCertificate,
  //       PortraitImage: 'http://localhost:3000/' + array.slice(7, array.length).join('/') + '/' + data.PortraitImage,
  //       CitizenIdentification: 'http://localhost:3000/' + array.slice(7, array.length).join('/') + '/' + data.CitizenIdentification,
  //       OtherPapers: 'http://localhost:3000/' + array.slice(7, array.length).join('/') + '/' + data.OtherPapers,

  //     }






  //     // for (let key in data) {
  //     //   if (data.hasOwnProperty(key)) {
  //     //     this.uploadForm.get(key)?.setValue(data[key]);
  //     //   }

  //     // }

  //     this.uploadForm.get('AccountId')?.setValue(data.AccountId);
  //     this.uploadForm.get('Address')?.setValue(data.Address);
  //     this.uploadForm.get('Admission')?.setValue(data.Admission);
  //     this.uploadForm.get('AdmissionManager')?.setValue(data.AdmissionManager);
  //     this.uploadForm.get('AllowEditing')?.setValue(data.AllowEditing);
  //     this.uploadForm.get('BirthCertificate')?.setValue(data.BirthCertificate);
  //     this.uploadForm.get('Birthday')?.setValue(data.Birthday);
  //     this.uploadForm.get('CertificateOfGraduation')?.setValue(data.CertificateOfGraduation);
  //     this.uploadForm.get('CitizenIdentification')?.setValue(data.CitizenIdentification);
  //     this.uploadForm.get('CitizenIdentificationNum')?.setValue(data.CitizenIdentificationNum);
  //     this.uploadForm.get('Commune')?.setValue(data.Commune);
  //     this.uploadForm.get('CoverImage')?.setValue(data.CoverImage);
  //     this.uploadForm.get('DateCitizen')?.setValue(data.DateCitizen);
  //     this.uploadForm.get('District')?.setValue(data.District);
  //     this.uploadForm.get('Email')?.setValue(data.Email);
  //     this.uploadForm.get('EmailSponsor1')?.setValue(data.EmailSponsor1);
  //     this.uploadForm.get('EmailSponsor2')?.setValue(data.EmailSponsor2);
  //     this.uploadForm.get('EnglishCertificate')?.setValue(data.EnglishCertificate);
  //     this.uploadForm.get('EnglishLevel')?.setValue(data.EnglishLevel);
  //     this.uploadForm.get('EnoughProfile')?.setValue(data.EnoughProfile);
  //     this.uploadForm.get('FullName')?.setValue(data.FullName);
  //     this.uploadForm.get('Gender')?.setValue(data.Gender);
  //     this.uploadForm.get('GraduationYear')?.setValue(data.GraduationYear);
  //     this.uploadForm.get('HightSchool')?.setValue(data.HightSchool);
  //     this.uploadForm.get('Id')?.setValue(data.Id);
  //     this.uploadForm.get('ImageFolder')?.setValue(data.ImageFolder);
  //     this.uploadForm.get('InnitiatedDate')?.setValue(data.InnitiatedDate);
  //     this.uploadForm.get('LeadSoure')?.setValue(data.LeadSoure);
  //     this.uploadForm.get('LinkFacebook')?.setValue(data.LinkFacebook);
  //     this.uploadForm.get('Majors')?.setValue(data.Majors);
  //     this.uploadForm.get('NameSponsor1')?.setValue(data.NameSponsor1);
  //     this.uploadForm.get('NameSponsor2')?.setValue(data.NameSponsor2);
  //     this.uploadForm.get('Nationality')?.setValue(data.Nationality);
  //     this.uploadForm.get('OtherPapers')?.setValue(data.OtherPapers);
  //     this.uploadForm.get('Phone')?.setValue(data.Phone);
  //     this.uploadForm.get('PhoneNumberSponsor1')?.setValue(data.PhoneNumberSponsor1);
  //     this.uploadForm.get('PhoneNumberSponsor2')?.setValue(data.PhoneNumberSponsor2);
  //     this.uploadForm.get('PlaceCitizen')?.setValue(data.PlaceCitizen);
  //     this.uploadForm.get('PlaceOfBirth')?.setValue(data.PlaceOfBirth);
  //     this.uploadForm.get('PortraitImage')?.setValue(data.PortraitImage);
  //     this.uploadForm.get('Province')?.setValue(data.Province);
  //     this.uploadForm.get('Scholarship')?.setValue(data.Scholarship);
  //     this.uploadForm.get('SchoolId')?.setValue(data.SchoolId);
  //     this.uploadForm.get('StudyRecords')?.setValue(data.StudyRecords);
  //     // this.uploadForm.get('TemporaryCertificateOfGraduation')?.setValue(data.TemporaryCertificateOfGraduation);
  //     this.uploadForm.get('provinceTHPT')?.setValue(data.provinceTHPT);


  //     // this.citis!.selectedIndex = this.uploadForm.get('Province')?.value - 1;
  //     // this.districts!.selectedIndex = this.uploadForm.get('District')?.value -1;
  //     // this.wards!.selectedIndex = this.uploadForm.get('Commune')?.value - 1;

  //     // this.uploadForm.get('Phone')?.disable();
  //     if (this.uploadForm.get('Birthday')?.value != null) {
  //       let birthday = new Date(data.Birthday);

  //       let converDate1 = moment(birthday).format('YYYY-MM-DD');
  //       this.uploadForm.get('Birthday')?.setValue(converDate1);
  //       console.log(this.uploadForm.get('Birthday')?.value);

  //     }
  //     if (this.uploadForm.get('DateCitizen')?.value != null) {
  //       let dateCitizen = new Date(data.DateCitizen);
  //       let converDate2 = moment(dateCitizen).format('YYYY-MM-DD');


  //       this.uploadForm.get('DateCitizen')?.setValue(converDate2);
  //     }

  //     if (this.uploadForm.get('GraduationYear')?.value == null) {
  //       this.uploadForm.get('GraduationYear')?.setValue(null);
  //     }



  //     // let birthday = moment.utc(data.Birthday).local().toDate(); // Chuyển đổi chuỗi ngày tháng sang đối tượng Date
  //     // await this.uploadForm.get('Birthday')?.setValue(moment(birthday).format('YYYY-MM-DD')); // Định dạng lại đối tượng Date và gán giá trị cho trường input


  //     // let dateCitizen = moment.utc(data.DateCitizen).local().toDate(); // Chuyển đổi chuỗi ngày tháng sang đối tượng Date
  //     // await this.uploadForm.get('DateCitizen')?.setValue(moment(dateCitizen).format('YYYY-MM-DD')); // Định dạng lại đối tượng Date và gán giá trị cho trường input

  //     // this.uploadForm.get('FullName')?.setValue(d.student.FullName.toString());
  //     // this.uploadForm.get('Gender')?.setValue(d.student.Gender.toString());
  //     // this.uploadForm.get('Birthday')?.setValue(d.student.Birthday.toString());


  //     // this.ngDropdownMajor = this.profileForm.get('Majors')?.value?.toString();

  //     // this.images.CertificateOfGraduation = d.student.CertificateOfGraduation;

  //     // this.images.TemporaryCertificateOfGraduation = d.student.TemporaryCertificateOfGraduation.toString();
  //     // this.images.StudyRecords = d.student.StudyRecords.toString();
  //     // this.images.EnglishCertificate = d.student.EnglishCertificate.toString();
  //     // this.images.BirthCertificate = d.student.BirthCertificate.toString();
  //     // this.images.PortraitImage = d.student.PortraitImage.toString();
  //     // this.images.CitizenIdentificationIm = d.student.CitizenIdentification.toString();
  //     // this.images.OtherPapers = d.student.OtherPapers.toString();



  //     // alert("Đổi mật khẩu thành công");

  //     // this.router.navigateByUrl('/students');


  //     // this.router.navigateByUrl('/students');

  //     // luu lai trang trc roi quay lai trang do, sau do xoa di
  //     // this.router.navigateByUrl('/students');
  //     // localStorage.setItem('token', res.result);
  //   },

  //     error => {
  //       console.log("Error", error);

  //       // this.router.navigateByUrl('/students');
  //     }

  //   );

  //   this.cdr.detectChanges();

  // }
  // dateFormat = 'dd/MM/yyyy';


  // // onFileSelected(event: any) {
  // //   const file = event.target.files[0];
  // //   const controlName = event.target.name;
  // //   this.profileForm?.get(controlName)?.setValue(file);
  // // }

  // UploadProfile() {


  //   // const formData = new FormData();
  //   // formData.append('name', this.FullName);
  //   // formData.append('image1', this.images.image1);
  //   // formData.append('image2', this.images.image2);

  //   // console.log(formData.get('CertificateOfGraduation'));
  //   // let headers = new HttpHeaders();
  //   // headers.append('Content-Type', 'multipart/form-data');
  //   // headers.append('Accept', 'application/json');

  //   // this.http.post('http://localhost:3000/handleUpload', formData, {headers: headers}).subscribe(
  //   //   (response) => console.log(response),
  //   //   (error) => console.log(error)
  //   // );

  //   // //get password from localstorage
  //   // var account: any = localStorage.getItem('account');
  //   // var phone = JSON.parse(account).Phone;
  //   // console.log("dsadsds" + phone);

  //   // var formData = new FormData();

  //   // //add form group value to form data

  //   // formData.append('FullName', this.profileForm.value.FullName!);
  //   // formData.append('CertificateOfGraduation', this.profileForm.value.CertificateOfGraduation!);
  //   // console.log(formData.get('CertificateOfGraduation'));

  //   //   console.log("hii");
  //   //   this.api.handleUpload(this.route.snapshot.paramMap.get('Id')!, phone, formData
  //   //   ).subscribe(res => {
  //   //     alert("Thay đổi thông tin thành công");

  //   //     // this.router.navigateByUrl('/students/profilestudent');
  //   //     window.location.reload();
  //   //   },

  //   //     error => {
  //   //         console.log("Error", error);
  //   //         alert("Error");
  //   //         this.router.navigateByUrl('/students');
  //   //     }

  //   //   );

  // }

  // //   onFileSelected(event: Event, fieldName: string) {
  // //   const input = event.target as HTMLInputElement ;
  // //   const file = input.files[0];
  // //   this[fieldName] = file;
  // // }


  // async selectFile(event: any, fieldName: string) {
  //   // this.selectedFiles = event.target.files;
  //   // this.formData = new FormData();

  //   // if (this.selectedFiles!.length > 0) {
  //   // for (let i = 0; i < this.selectedFiles!.length; i++) {
  //   //   const file: File = this.selectedFiles![i];
  //   //   this.formData.append('file[]', file, file.name);
  //   // }

  //   let file: File = event.target.files[0];
  //   this.formData.append(fieldName, file);



  //   // if (event.target.files.length > 0) {
  //   //   console.log(event.target.files.length);
  //   //   for (let i = 0; i < event.target.files.length; i++) {
  //   //     const file: File = event.target.files[0];
  //   //     console.log(file);

  //   //     this.uploadForm.get(fieldName)!.setValue(file);


  //   //   }
  //   // }


  // }


  // // function for filling in pdf form fields
  // async fillPDF(pdfSrc: string, data: any) {
  //   // // read the contents of the PDF file
  //   // const pdfBytes = await fs.readFile(pdfSrc);
  //   // // create a PDFDocument object from the buffered data
  //   // const pdfDoc = await PDFDocument.load(pdfBytes);
  //   // // get the first page of the PDF file
  //   // const page: PDFPage = pdfDoc.getPages()[0];

  //   // // create a font to use for the field values
  //   // // const fontBytes = await fs.readFile('assets/fonts/OpenSans-Regular.ttf');
  //   // // const font: PDFFont = await pdfDoc.embedFont(fontBytes);

  //   // // fill in the form fields with the provided data
  //   // page.drawText(data.firstName, { x: 45, y: 388, size: 11 });
  //   // page.drawText(data.lastName, { x: 45, y: 363, size: 11 });
  //   // page.drawText(data.address, { x: 45, y: 338, size: 11 });
  //   // page.drawText(data.city, { x: 45, y: 313, size: 11 });

  //   // // serialize the PDFDocument object to bytes
  //   // const pdfBytesFilled = await pdfDoc.save();

  //   // // save the filled-in PDF to a file
  //   // await fs.writeFile('assets/filled-in-form.pdf', pdfBytesFilled);
  // }

  // // function to call to fill in the form fields and save the PDF

  // async exportPdf() {
  //   // // Load template PDF from the assets folder
  //   // const templatePDF = './test.pdf';

  //   // // Initialize jsPDF instance
  //   // const doc = new jsPDF();

  //   // // Set the coordinates (x, y) of the new content on the PDF page
  //   // const x = 10;
  //   // const y = 10;

  //   // // Add new content to the PDF page
  //   // doc.text('Hello, World!', x, y);

  //   // // Load the template PDF and add it as a new page to the jsPDF instance
  //   // // doc.addPage();
  //   // doc.addFileToVFS(templatePDF, 'test.pdf');
  //   // // doc.addFont('Helvetica', 'Helvetica', 'normal');
  //   // // doc.addFont('Helvetica-Bold', 'Helvetica', 'bold');
  //   // // doc.addImage('template.pdf', 'PDF', 0, 0, 210, 297, '', 'FAST');

  //   // // Save the PDF and download it
  //   // doc.save('new-pdf-file.pdf');

  //   // Load the existing PDF file
  //   const existingPdfBytes = await fetch('http://localhost:3000/my-pdf-file.pdf').then(res => res.arrayBuffer());

  //   const pdfDoc = await PDFDocument.load(existingPdfBytes);

  //   // Add new data to the PDF file
  //   const page = pdfDoc.getPage(0);
  //   const { width, height } = page.getSize();
  //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  //   const fontSize = 16;
  //   const text = 'New data to be added to the PDF file';
  //   const textWidth = font.widthOfTextAtSize(text, fontSize);
  //   page.drawText(text, {
  //     x: 50,
  //     y: 650,
  //     size: fontSize,
  //     font: font,
  //     color: rgb(0, 0, 0),
  //   });

  //   // Save the new PDF file
  //   const newPdfBytes = await pdfDoc.save();

  //   // Download the new PDF file
  //   const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
  //   saveAs(blob, 'profile.pdf');
  // }

  // //   async exportPdf() {
  // //     // // Load the existing PDF file
  // //     // const url = '/assets/template.pdf';
  // //     // const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

  // //     // // Load the PDFDocument
  // //     // const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // //     // // Get the font to use for adding text
  // //     // const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // //     // // Get the first page of the PDF
  // //     // const page = pdfDoc.getPages()[0];

  // //     // // Add the text to the PDF
  // //     // const text = 'Hello World!';
  // //     // page.drawText(text, {
  // //     //   x: 50,
  // //     //   y: 500,
  // //     //   size: 50,
  // //     //   font,

  // //     // });

  // //     // // Save the PDF
  // //     // const pdfBytes = await pdfDoc.save();

  // //     // // Convert the PDF to a blob
  // //     // const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

  // //     // // Create a new jsPDF instance
  // //     // const pdf = new jsPDF();

  // //     // // Load the blob into the PDF using addPageContent
  // //     // const options = {
  // //     //   pagesplit: true,
  // //     // };
  // //     // pdf.addPage();
  // //     // pdf.addPageContent(pdfBlob, 0, 0, options);
  // //     // // Save the PDF using saveAs
  // //     // pdf.save('newPdf.pdf');

  // //     const pdfUrl = 'path/to/your/pdf/file.pdf';

  // // const pdfDoc = new jsPDF();
  // // const pdf = pdfDoc.loadFile(pdfUrl)
  // // pdf.text('Hello, world!', 10, 10);
  // // pdf.image('path/to/your/image.png', 50, 50, 50, 50);

  // // pdf.save('new-file.pdf');


  // //   }

  navigateTaoBaoCao(id: any): any {


    this.dataService.sendDataId(id);
    this.router.navigate(['pages/bao-cao-hinh-anh/lap-bao-cao']);

  }


  // async onSubmit() {
  //   this.notifyService.confirmAdd('Bạn có chắc chắn muốn lưu thông tin?').then(async (result) => {
  //     if (result) {

  //       // const helper = new JwtHelperService();
  //       // const decodedToken = helper.decodeToken(this.localStorageSv.getLocalStorageItemAsJSON("accessToken"));

  //       // await this.api.getAStudent(decodedToken.Phone
  //       // ).subscribe(async res => {
  //       //   console.log(res);



  //       //   var d: any = res;
  //       //   this.editStatus = d.student.AllowEditing

  //       //   if (this.editStatus == 0 || this.editStatus == 2) {
  //       //     this.notifyService.warningMessage("Bạn đang không có quyền chỉnh sửa thông tin này");
  //       //     // this.toastService.warning({duration: 3000, summary: 'You are not authorized to edit this profile.'});
  //       //     return;
  //       //   } 

  //       //add form group value to form data ignore file
  //       let formData: FormData = new FormData();

  //       for (let key in this.uploadForm.value) {
  //         if (key != 'File') {
  //           formData.append(key, this.uploadForm.get(key)?.value);

  //         }
  //       }
  //       console.log(formData.get('TieuDe'));

  //       for (let i = 0; i < this.fileList.length; i++) {
  //         formData.append('File', this.fileList[i].originFileObj);

  //       }

  //       const Id = this.route.snapshot.params['Id'];

  //       this.api.createBaoCaoHinhAnh(formData).subscribe(response => {

  //         console.log(response);
  //         // Swal.fire('Saved!', '', 'success')

  //         this.notifyService.successMessage("Thêm phản ánh thành công").then(() => {
  //           // reset uploadForm to ''
  //           for (let key in this.uploadForm.value) {
  //             this.uploadForm.get(key)?.setValue('');
  //           }

  //           console.log(this.uploadForm.value);



  //         });

  //         return
  //         // this.toastService.success({ detail: "Success", summary: "Edit Success", duration: 3000 });



  //         // this.router.navigateByUrl('/pages', { skipLocationChange: true }).then(() => {
  //         //   this.router.navigate(['/pages/profile']).then(() => {
  //         //     this.notifyService.successMessage("Chỉnh sửa thông tin thành công");
  //         //     // this.toastService.success({ detail: "Success", summary: "Edit Success", duration: 3000 });
  //         //   });
  //         // })
  //       },
  //         error => {
  //           console.log(error);

  //           this.notifyService.errorMessage(error.error.message).then(() => {
  //             // this.formData = new FormData();

  //             console.log(error.error);
  //           });

  //           // this.router.navigateByUrl('/pages', { skipLocationChange: true }).then(() => {
  //           //   this.router.navigate(['/pages/profile']).then(() => {
  //           //     console.log(error);
  //           //     this.notifyService.errorMessage("Chỉnh sửa thông tin thất bại");
  //           //     // this.toastService.error({ detail: "Error", summary: error.statusText, duration: 3000 });
  //           //   });
  //           // })
  //         }
  //       );



  //     }


  //   });

  // }



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
