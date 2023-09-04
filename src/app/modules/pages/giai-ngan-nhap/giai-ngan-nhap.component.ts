import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzImageService } from 'ng-zorro-antd/image';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Client } from 'src/app/services/proxies/proxies.service';
import { DataService } from 'src/app/shared/data.service';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';
import { NotifyService } from 'src/app/shared/utils/notify';
interface ItemData {
  idhuongDanLq: number;
  idvanBanChinh: number;
  tenVanBanChinh: string;
  idhinhThucVb: number;
  tenHinhThucVb: string;
  idloaiVanBan: number;
  tenLoaiVanBan: string;
  maSoVb: string;
  tenVb: string;
  idcapBanHanh: number;
  tenCapBanHanh: string;
  ngayVb: Date;
  coQuanBanHanh: string;
  ngayHieuLuc: Date;
  ngaySuaDoiBoSung: Date;
  ngayHetHieuLuc: Date;
  kyHienVanBan: string;
  chuong: string;
  muc: string;
  tieuMuc: string;
  dieu: string;
  khoan: string;
  diem: string;
  tiet: string;
  noiDung: string;
}
@Component({
  selector: 'app-giai-ngan-nhap',
  templateUrl: './giai-ngan-nhap.component.html',
  styleUrls: ['./giai-ngan-nhap.component.css']
})
export class GiaiNganNhapComponent {

  constructor(private cdr: ChangeDetectorRef, private formBuilder: FormBuilder, private router: Router,
    private dataService: DataService,
    private fb: FormBuilder, private authService: AuthService,
    private localStorageSv: LocalStorageService,
    private renderer2: Renderer2,
   
    private nzImageService: NzImageService,
    private http: HttpClient,
    private api: Client,
   
    private route: ActivatedRoute,
   
    private notifyService: NotifyService,
    // private api: HuongDanLienQuanService,

   

  ) { }

  uploadForm = this.formBuilder.group({
    idhuongDanLq: new FormControl(),
    idvanBanChinh: new FormControl(),
    idhinhThucVb: new FormControl(),
    idloaiVanBan: new FormControl(),
    maSoVb: new FormControl(),
    tenVb: new FormControl(''),
    idcapBanHanh: new FormControl(),
    ngayVb: new FormControl(''),
    coQuanBanHanh: new FormControl(''),
    ngayHieuLuc: new FormControl(''),
    ngaySuaDoiBoSung: new FormControl(''),
    ngayHetHieuLuc: new FormControl(''),
    kyHienVanBan: new FormControl(''),
    chuong: new FormControl(''),
    muc: new FormControl(''),
    tieuMuc: new FormControl(''),
    dieu: new FormControl(''),
    khoan: new FormControl(''),
    diem: new FormControl(''),
    tiet: new FormControl(''),
    noiDung: new FormControl(''),



  });
  displayThuoc = false;
  listLoaiVanBanhChinh: any[] = [];
  listLoaiCtda: any[] = [];
  listChuongTrinhChinh: any[] = [];
  listVanBanChinh: any[] = [];
  listHinhThucVb: any[] = [];
  listLoaiVanBan: any[] = [];
  listCapBanHanh: any[] = [];
  isVisible2 = false
  isVisible3 = false
  async onSubmit(): Promise<void> {
    await this.uploadForm.get('ngayHetHieuLuc')?.setValue(moment(this.uploadForm.value.ngayHetHieuLuc).format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    await this.uploadForm.get('ngayHieuLuc')?.setValue(moment(this.uploadForm.value.ngayHieuLuc).format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    await this.uploadForm.get('ngayVb')?.setValue(moment(this.uploadForm.value.ngayVb).format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    await this.uploadForm.get('ngaySuaDoiBoSung')?.setValue(moment(this.uploadForm.value.ngaySuaDoiBoSung).format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    // this.isOkLoading = true;
    if(this.id != '' && this.id != undefined && this.id != null) {
      this.notifyService.confirmAdd('Bạn có chắc chắn muốn sửa hướng dẫn liên quan này?').then((result)=>{
     
        if(result){
          
            // this.api.updateHuongDanLienQuan(
            //   {
            //     "idhuongDanLq": this.uploadForm.value.idhuongDanLq,
            //     "idvanBanChinh": this.uploadForm.value.idvanBanChinh,
            //     "idhinhThucVb": this.uploadForm.value.idhinhThucVb,
            //     "idloaiVanBan": this.uploadForm.value.idloaiVanBan,
            //     "maSoVb": this.uploadForm.value.maSoVb,
            //     "tenVb": this.uploadForm.value.tenVb,
            //     "idcapBanHanh": this.uploadForm.value.idcapBanHanh,
            //     "ngayVb": this.uploadForm.value.ngayVb,
            //     "coQuanBanHanh": this.uploadForm.value.coQuanBanHanh,
            //     "ngayHieuLuc": this.uploadForm.value.ngayHieuLuc,
            //     "ngaySuaDoiBoSung": this.uploadForm.value.ngaySuaDoiBoSung,
            //     "ngayHetHieuLuc": this.uploadForm.value.ngayHetHieuLuc,
            //     "kyHienVanBan": this.uploadForm.value.kyHienVanBan,
            //     "chuong": this.uploadForm.value.chuong,
            //     "muc": this.uploadForm.value.muc,
            //     "tieuMuc": this.uploadForm.value.tieuMuc,
            //     "dieu": this.uploadForm.value.dieu,
            //     "khoan": this.uploadForm.value.khoan,
            //     "diem": this.uploadForm.value.diem,
            //     "tiet": this.uploadForm.value.tiet,
            //     "noiDung": this.uploadForm.value.noiDung
            //   }
                
            //   ).subscribe(async (res: any) => {
            //   this.notifyService.successMessage("Sửa thành công hướng dẫn liên quan");
            //    this.getListHuongDanLienQuan();
            //    this.isVisible = false
            //     this.uploadForm.reset()
            // }, error => {
              
            //   this.notifyService.errorMessage(error.error.title);
            //   console.log(error);
            // }
            // )
          
          
        }
      })
    } else {
      this.notifyService.confirmAdd('Bạn có chắc chắn muốn thêm mới một loại văn bản chính?').then((result)=>{
     
        if(result){
        
          // this.api.createHuongDanLienQuan(
          //   {
              
          //     "idvanBanChinh": this.uploadForm.value.idvanBanChinh,
          //     "idhinhThucVb": this.uploadForm.value.idhinhThucVb,
          //     "idloaiVanBan": this.uploadForm.value.idloaiVanBan,
          //     "maSoVb": this.uploadForm.value.maSoVb,
          //     "tenVb": this.uploadForm.value.tenVb,
          //     "idcapBanHanh": this.uploadForm.value.idcapBanHanh,
          //     "ngayVb": this.uploadForm.value.ngayVb,
          //     "coQuanBanHanh": this.uploadForm.value.coQuanBanHanh,
          //     "ngayHieuLuc": this.uploadForm.value.ngayHieuLuc,
          //     "ngaySuaDoiBoSung": this.uploadForm.value.ngaySuaDoiBoSung,
          //     "ngayHetHieuLuc": this.uploadForm.value.ngayHetHieuLuc,
          //     "kyHienVanBan": this.uploadForm.value.kyHienVanBan,
          //     "chuong": this.uploadForm.value.chuong,
          //     "muc": this.uploadForm.value.muc,
          //     "tieuMuc": this.uploadForm.value.tieuMuc,
          //     "dieu": this.uploadForm.value.dieu,
          //     "khoan": this.uploadForm.value.khoan,
          //     "diem": this.uploadForm.value.diem,
          //     "tiet": this.uploadForm.value.tiet,
          //     "noiDung": this.uploadForm.value.noiDung
          //   }
          // ).subscribe(async (res: any) => {
          //   this.notifyService.successMessage("Thêm thành công hướng dẫn liên quan");
          //   await this.getListHuongDanLienQuan();
          //   this.isVisible = false  
          //   await this.uploadForm.reset()
    
          // }, error => {
    
          //   this.notifyService.errorMessage(error.error.title);
          //   console.log(error);
          // }
          // )
          }
          
        
      })
      // setTimeout(() => {
      //   this.isVisible = false;
      //   this.isOkLoading = false;
      // }, 3000);
    }
  }

  click(): void {
    this.isVisible2 = true
  }
  handleCancel2(): void {
    this.isVisible2 = false;
  }
  handleOk2(): void {
    this.isVisible2 = false;

  }

  handleOk3(): void {
    this.isVisible3 = false;

  }
  // onVanBanChinhChange() {
  //   console.log(this.listLoaiCtda)
  //   const ctda = this.listLoaiCtda.filter(item =>
  //     item.tenLoaiCtda == 'Chương trình'

  //   )
  //   const loaiCtda = this.uploadForm.value.idloaiCtda
  //   if (loaiCtda == ctda[0].idloaiCtda) {
  //     this.displayThuoc = true;
  //     return true;
  //   } else {
  //     this.uploadForm.get('idthuoc')?.setValue(null)
  //     this.displayThuoc = false;
  //     return false;
  //   }

  //   // // this.uploadForm.value.idloaiVanBanChinh =;
  //   // this.showOption2 = false;
  //   // this.uploadForm.value.idloaiCtda = null;

  //   // if (this.uploadForm.value.idloaiVanBanChinh) {
  //   //   this.fetchOption2Options(this.option1Value);
  //   // }
  // }
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.idvanBanChinh, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.idvanBanChinh, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    console.log(this.checked)
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.idvanBanChinh, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.idvanBanChinh));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.idvanBanChinh)) && !this.checked;
  }
  listHuongDanLienQuan!: ItemData[]
  isSpinning = false;
  loading: boolean = true;
  getListHuongDanLienQuan() {

    this.isSpinning = true;
    // this.api.getListHuongDanLienQuan().toPromise().then((res) => {
    //   console.log(res);
    //   this.listHuongDanLienQuan = res;
    //   this.isSpinning = false;
    // }).catch((error) => {
    //   this.notifyService.errorMessage(error.error.title);
    //   console.log(error);
    // })
    // this.api.getListHuongDanLienQuan().subscribe((res: any) => {


    // }, error => {

    // }

    // );
  }
  selectedOption!: any
  handleChange(selectedValue: string) {
    // Xử lý logic khi giá trị được chọn thay đổi
    console.log('Selected value:', selectedValue);
    console.log('Selected value:', this.uploadForm.value.idloaiVanBan);
    // Gọi hàm change() hoặc các hàm khác bạn muốn thực thi
   
  }

  showModel3() {
    this.isVisible3 = true;
   
  }
  

  // async getInputInfo(): Promise<void> {
    
  //     await this.vanBanChinhSv.getListVanBanChinh().toPromise().then((res) => {

  //       this.listVanBanChinh = res
       
  //     }).catch((error) => {
        
  //       console.log(error);
  //     })

  //     await this.hinhThucVbSv.getListHinhThucVanBan().toPromise().then((res) => {

  //       this.listHinhThucVb = res
       

  //     }).catch((error) => {
        
  //       console.log(error);
  //     })

  //     await this.loaiVanBanSv.getListLoaiVanBan().toPromise().then((res) => {

  //       this.listLoaiVanBan = res
  //       console.log(res)
        
  //     }).catch((error) => {
        
  //       ;
  //     })

  //     await this.loaiVanBanChinhSv.getListLoaiVanBanChinh().toPromise().then((res) => {

  //       this.listLoaiVanBanhChinh = res
        
  //     }).catch((error) => {
        
        
  //     })
  //     await this.capBanHanhSv.getListCapBanHanh().toPromise().then((res) => {

  //       this.listCapBanHanh = res
        
  //     }).catch((error) => {
        
  //       console.log(error);
  //     })
    




  //   // await this.loaiCTDASv.getListLoaiCTDA().toPromise().then((res) => {

  //   //   this.listLoaiCtda = res
  //   //   // this.listLoaiVanBanChinh = res;
  //   // }).catch((error) => {

  //   //   console.log(error);
  //   // })
  // }

  async ngOnInit(): Promise<void> {
    await this.getListHuongDanLienQuan();


    // await this.getListVanBanChinh()

    // this.listOfData = new Array(5).fill(0).map((_, index) => ({
    //   id: index,
    //   name: `Chương trình dự án ${index}`


    // }));
  }

  addClick(): void {
    const data = "van-ban-chinh";
    
    this.router.navigate(['/pages/van-ban-chinh']); // Điều hướng đến trang /pages/van-ban-chinh

  }
  tenVanBanChinh?: string

  visible: boolean = false;

  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }

  isVisible = false;
  isOkLoading = false;
  vanBanChinh?: any
  async showModal(id?: any): Promise<void> {
    this.id = id
    this.isVisible = true;
  

    if (this.id != '' && this.id != undefined && this.id != null) {
      // await this.getInputInfo().then(async (res) => {
      //   this.loading = false;
      // })
      await this.getHuongDanLienQuanById(this.id)

    } else {

      // await this.getInputInfo().then(async (res) => {
      //   this.loading = false;

      // })
      this.uploadForm.reset()
    }
  }
  async showModalDetail(id?: any): Promise<void> {
    this.id = id
    this.isVisible2 = true;
    // if (this.id != '' && this.id != undefined && this.id != null) {
    //   await this.getInputInfo().then(async (res) => {
    //     await this.getHuongDanLienQuanById(this.id).then(result =>{
    //       this.loading = false
    //     })
       
    //   })
      

    // } else {

    //   await this.getInputInfo().then(async (res) => {
      
    //   })
    //   this.uploadForm.reset()
    // }
  }
  id?: any

  huongDanLienQuanById?: ItemData
  isLoading = false;
  async getHuongDanLienQuanById(id: any) {
    this.isLoading = true; // Bắt đầu quá trình tải dữ liệu
  
  
      // await this.api.getHuongDanLienQuanById(id).toPromise().then(async (res: any) => {
      //   this.huongDanLienQuanById = res
  
      //  this.uploadForm.get('idhuongDanLq')?.setValue(res.idhuongDanLq)
      //   this.uploadForm.get('idhinhThucVb')?.setValue(res.idhinhThucVb)
      //   this.uploadForm.get('idloaiVanBan')?.setValue(res.idloaiVanBan)
      //   this.uploadForm.get('idcapBanHanh')?.setValue(res.idcapBanHanh)
      //   this.uploadForm.get('ngayVb')?.setValue(res.ngayVb)
      //   this.uploadForm.get('coQuanBanHanh')?.setValue(res.coQuanBanHanh)
      //   this.uploadForm.get('ngayHieuLuc')?.setValue(res.ngayHieuLuc)
      //   this.uploadForm.get('ngaySuaDoiBoSung')?.setValue(res.ngaySuaDoiBoSung)
      //   this.uploadForm.get('ngayHetHieuLuc')?.setValue(res.ngayHetHieuLuc)
  
      //   await this.uploadForm.get('ngayHetHieuLuc')?.setValue(moment(this.uploadForm.value.ngayHetHieuLuc).format('YYYY-MM-DD'));
      //   await this.uploadForm.get('ngayHieuLuc')?.setValue(moment(this.uploadForm.value.ngayHieuLuc).format('YYYY-MM-DD'));
      //   await this.uploadForm.get('ngayVb')?.setValue(moment(this.uploadForm.value.ngayVb).format('YYYY-MM-DD'));
      //   await this.uploadForm.get('ngaySuaDoiBoSung')?.setValue(moment(this.uploadForm.value.ngaySuaDoiBoSung).format('YYYY-MM-DD'));
  
      //   this.uploadForm.get('kyHienVanBan')?.setValue(res.kyHienVanBan)
      //   this.uploadForm.get('chuong')?.setValue(res.chuong)
      //   this.uploadForm.get('muc')?.setValue(res.muc)
      //   this.uploadForm.get('tieuMuc')?.setValue(res.tieuMuc)
      //   this.uploadForm.get('dieu')?.setValue(res.dieu)
      //   this.uploadForm.get('khoan')?.setValue(res.khoan)
      //   this.uploadForm.get('diem')?.setValue(res.diem)
      //   this.uploadForm.get('tiet')?.setValue(res.tiet)
      //   this.uploadForm.get('noiDung')?.setValue(res.noiDung)
      //   this.uploadForm.get('maSoVb')?.setValue(res.maSoVb)
      //   this.uploadForm.get('tenVb')?.setValue(res.tenVb)
      //   this.uploadForm.get('idvanBanChinh')?.setValue(res.idvanBanChinh)

      
      // await this.getInputInfo().then(async (result) => {
      //   const vanBanChinh: any = await this.listVanBanChinh.filter(item =>
      //     item.idvanBanChinh == res.idvanBanChinh
      //   )
  
      //   const hinhThucVb: any = await this.listHinhThucVb.filter(item =>
      //     item.idhinhThucVb == res.idhinhThucVb
      //   )
        
      //   const loaiVanBan: any = await this.listLoaiVanBan.filter(item =>
      //     item.idloaiVanBan == res.idloaiVanBan
      //   )
      //   console.log(loaiVanBan)
  
        
      //   // const loaiVanBanhChinh: any = await this.listLoaiVanBanhChinh.filter(item =>
      //   //   item.idloaiVanBanChinh == res.idloaiVanBanChinh
      //   // )
  
      //   const capBanHanh: any = await this.listCapBanHanh.filter(item =>
      //     item.idcapBanHanh == res.idcapBanHanh
      //   )
        
        
      //   // const loaiCtda = this.uploadForm.value.idloaiCtda
      //   // if (loaiCtda == ctda[0].idloaiCtda) {
      //   //   this.displayThuoc = true;
      //   // } else {
      //   //   this.displayThuoc = false;
      //   // }
       
      //   this.huongDanLienQuanById = {
         
  
      //     idhuongDanLq: res.idhuongDanLq,
      //     idvanBanChinh: res.idvanBanChinh,
      //     tenVanBanChinh: vanBanChinh[0].ten,
      //     idhinhThucVb: res.idhinhThucVb,
      //     tenHinhThucVb: hinhThucVb[0].tenHinhThucVb,
      //     idloaiVanBan: res.idloaiVanBan,
      //     tenLoaiVanBan: loaiVanBan[0].tenLoaiVanBan,
      //     maSoVb: res.maSoVb,
      //     tenVb: res.tenVb,
      //     idcapBanHanh: res.idcapBanHanh,
      //     tenCapBanHanh: capBanHanh[0].tenCapBanHanh,
      //     ngayVb: res.ngayVb,
      //     coQuanBanHanh: res.coQuanBanHanh,
      //     ngayHieuLuc: res.ngayHieuLuc,
      //     ngaySuaDoiBoSung: res.ngaySuaDoiBoSung,
      //     ngayHetHieuLuc: res.ngayHetHieuLuc,
      //     kyHienVanBan: res.kyHienVanBan,
      //     chuong: res.chuong,
      //     muc: res.muc,
      //     tieuMuc: res.tieuMuc,
      //     dieu: res.dieu,
      //     khoan: res.khoan,
      //     diem: res.diem,
      //     tiet: res.tiet,
      //     noiDung: res.noiDung,
      //   }

      //   this.cdr.detectChanges();
       
  
      //   this.isLoading = false; // Kết thúc quá trình tải dữ liệu
      // })
  
  
        
       
  
      // }).catch((error) => {
      //   this.isLoading = false;
      //   this.notifyService.errorMessage(error);
      //   console.log(error);
      // })
    
    
   
  }

  handleOk(): void {
    // this.isOkLoading = true;
    if (this.id != '' && this.id != undefined && this.id != null) {
      this.notifyService.confirmAdd('Bạn có chắc chắn muốn sửa văn bản chính?').then((result) => {

        if (result) {

          // this.api.updateHuongDanLienQuan(this.uploadForm.value).subscribe(async (res: any) => {
          //   this.notifyService.successMessage("Sửa thành công văn bản chính");
          //   this.getListHuongDanLienQuan();
          //   this.isVisible = false
          //   this.uploadForm.reset()
          // }, error => {
          //   this.uploadForm.reset()
          //   this.notifyService.errorMessage(error.error.title);
          //   console.log(error);
          // }
          // )


        }
      })
    } else {
      this.notifyService.confirmAdd('Bạn có chắc chắn muốn thêm mới một văn bản chính?').then((result) => {

        if (result) {
          if (this.tenVanBanChinh == '' || this.tenVanBanChinh == null || this.tenVanBanChinh == undefined) {
            this.notifyService.errorMessage("Tên văn bản chính không được để trống")
          } else {
            // this.api.createHuongDanLienQuan({ "tenHinhThucVb": this.tenVanBanChinh }).subscribe(async (res: any) => {
            //   this.notifyService.successMessage("Thêm thành công văn bản chính");
            //   this.getListHuongDanLienQuan();
            //   this.isVisible = false
            //   this.tenVanBanChinh = ''
            // }, error => {
            //   this.tenVanBanChinh = ''
            //   this.notifyService.errorMessage(error.error.title);
            //   console.log(error);
            // }
            // )
          }

        }
      })
      // setTimeout(() => {
      //   this.isVisible = false;
      //   this.isOkLoading = false;
      // }, 3000);
    }

  }

  handleCancel(): void {
    this.isVisible = false;
    this.uploadForm.reset()
  }

  handleCancelModel3(): void {
    this.isVisible3 = false;
   
  }

  deleteHuongDanLienQuan(id: any) {
    if (id != null && id != undefined && id != '' && id != 0) {
      this.notifyService.confirmDelete().then(
        (result) => {

          if (result) {
            // this.api.getHuongDanLienQuanById(id).subscribe((res: any) => {
              
            //     this.api.deleteHuongDanLienQuan(id).subscribe(async (res: any) => {
            //       this.notifyService.successMessage("Xóa thành công hướng dẫn liên quan");
            //       this.getListHuongDanLienQuan();
            //     }, error => {
            //       this.notifyService.errorMessage(error.error.title);
            //       console.log(error);
            //     }
            //     )
              
            // }, error => {
            //   this.notifyService.errorMessage(error.error.title);
            //   console.log(error);
            // }
            // )

          }

        }
      );
    }

  }

}
