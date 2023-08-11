import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzImageService } from 'ng-zorro-antd/image';
import { Subscription, map } from 'rxjs';
import { TT01DataDTO } from 'src/app/models/tt01DTO/tt01DataDto.model';
import { TT01DataExport } from 'src/app/models/tt01DTO/tt01DataExport.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Client } from 'src/app/services/proxies/proxies.service';
import { DataService } from 'src/app/shared/data.service';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';
import { getTT01DataExport } from 'src/app/shared/transformData/tt01/tt01DataExport';
import { getTT01DataImport } from 'src/app/shared/transformData/tt01/tt01DataImport';
import { NotifyService } from 'src/app/shared/utils/notify';

@Component({
  selector: 'app-bao-cao-ket-qua-details',
  templateUrl: './bao-cao-ket-qua-details.component.html',
  styleUrls: ['./bao-cao-ket-qua-details.component.css']
})
export class BaoCaoKetQuaDetailsComponent implements OnInit {
  private subscription!: Subscription;
  date = null
  grossChartData1!: TT01DataExport[];
  grossChartData2!: TT01DataExport[];
  grossChartData3!: TT01DataExport[];
  grossChartData4!: TT01DataExport[];
  grossChartData5!: TT01DataExport[];
  grossChartData6!: TT01DataExport[];
  grossChartData7!: TT01DataExport[];
  grossChartData8!: TT01DataExport[];
  grossChartData9!: TT01DataExport[];
  grossChartData10!: TT01DataExport[];
  customizeTooltip(info: any) {
    return {
      text: `${info.seriesName} - ${info.argumentText}: ${info.valueText}`
    };
  }

  duAnChildList: any[] = []
  duAn: any

  

  navigateRouteChild(duAn: number, child?:any[]){
   
    this.router.navigate([`/pages/bao-cao-ket-qua/child/${duAn}`], { queryParams: { child:  child} });
    

  }




  grossProductData: any[] = [{
    state: 'Illinois',
    year2016: 850,

  }, {
    state: 'Indiana',
    year2016: 316,

  }, {
    state: 'Michigan',
    year2016: 452,

  }, {
    state: 'Ohio',
    year2016: 621,

  }, {
    state: 'Wisconsin',
    year2016: 290,

  }];
  color: string = this.getRandomColor();

  onPointClick(e: any) {
    e.target.select();
  }

  populationData: any[] = [{
    arg: 1960,
    val: 3032019978,
  }, {
    arg: 1970,
    val: 3683676306,
  }, {
    arg: 1980,
    val: 4434021975,
  }, {
    arg: 1990,
    val: 5281340078,
  }, {
    arg: 2000,
    val: 6115108363,
  }, {
    arg: 2010,
    val: 6922947261,
  }, {
    arg: 2020,
    val: 7795000000,
  }];
  roleUserCurrent!: number;
  constructor(

    private dataService: DataService,
    private fb: FormBuilder, private authService: AuthService,
    private localStorageSv: LocalStorageService,
    private renderer2: Renderer2,
    private cdr: ChangeDetectorRef,
    private nzImageService: NzImageService,
    private http: HttpClient,
    private apiReport: Client,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notifyService: NotifyService) {
    this.authService.roleUser.subscribe(res => {
      this.roleUserCurrent = res;
      


    });




  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  isCollapsed = false;

  toggleCollapsed(): void {

    this.isCollapsed = !this.isCollapsed;
  }

  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }



  

  

  getRandomColor(): string {
    // const letters = '0123456789ABCDEF';
    // let color = '#';
    // for (let i = 0; i < 3; i++) {
    //   color += letters[Math.floor(Math.random() * 16)];
    // }
    // return color;
    let result = '';
    for (let i = 0; i < 6; ++i) {
      const value = Math.floor(16 * Math.random());
      result += value.toString(16);
    }
    return '#' + result;
  }
  isSpinning = false;

  animation = {
    enabled: true,
    duration: 2000,
    easing: 'easeOutCubic',
    // from: { translateY: '100%' },
  };




  intervalMs = 0.1 * 60 * 1000;
  count = 1;
  startIndex = 0;

  dataChartArray: any[] =[]
 

  chart!: Highcharts.Chart;

  startDate = '';
  endDate = '';

  async onChange(result: Date[]): Promise<void> {
    if(result.length > 0) {
      this.startDate = moment(result[0]).format("MM/DD/YYYY");
      this.endDate = moment(result[1]).format("MM/DD/YYYY");
      console.log(result)
      console.log(this.startDate)
      console.log(this.endDate)
      // await this.getAllDuAn()
     
    } else {
      this.startDate = ''
      this.endDate = ''
      console.log(result)
      console.log(this.startDate)
      console.log(this.endDate)
      // await this.getAllDuAn()

    }
    
   
  }

  async callApiReport(rpCode: string): Promise<any> {
    this.isSpinning = true;
    return new Promise((resolve, reject) => {
      let dataExport: TT01DataExport[] = []
      let query: any = {}
      if (this.startDate != '' && this.endDate != '') {
        query = {
          "PrintObjectID": rpCode, // giống reportCode
          "PeriodOfTime2": {
            "TuNgay": this.startDate,
            "DenNgay": this.endDate
          }
        }
      } else if (this.startDate != '' && this.endDate == '') {
        query = {
          "PrintObjectID": rpCode, // giống reportCode
          "PeriodOfTime2": {
            "TuNgay": this.startDate,
          }
        }

      } else {
        query = {
          "PrintObjectID": rpCode, // giống reportCode

        }
      }

      

      // const response = await this.apiReport
      //   .apiV1ReportsR1DataUnauthorized(rpCode, query)
      //   .toPromise().then( value=> {
      //     return 
      //   })


      this.apiReport.apiV1ReportsR1DataUnauthorized(rpCode, query).pipe(
        map((response: any) => response.result),
        map(data => data.map((d: any) => getTT01DataImport(d)))

      ).subscribe(
        async (data: TT01DataDTO[]) => {
          this.isSpinning = false;
          const temp = data;

          const nsTTArray = temp.map((item: any) => {
            return item.nsTT;
          });

          this.isSpinning = false;

          dataExport = await getTT01DataExport(nsTTArray, temp);


          resolve(dataExport);

        },
        error => {
          reject(error);
          console.error(error);
          this.isSpinning = false;

        }
      );


    })
  }

 
   async getDAByCode(): Promise<any>  {
    
       let arr: any[] = await this.callApiReport(this.duAn)
       arr = arr.map(item => [item])
       return arr

  }


  async ngOnInit() {
   

    await this.route.paramMap.subscribe(params => {
      this.duAn = params.get('id');
      console.log(this.duAn)
      
    });
     this.dataChartArray = await this.getDAByCode()
     console.log(this.dataChartArray)


    // await this.getDAByCode()
    // console.log(this.dataChartArray)
    
    // this.dataChartArray1 =  await this.getDA1();
    // console.log(this.dataChartArray1)
    // this.dataChartArray2 = await this.getDA2();
    // console.log(this.dataChartArray2)
    // this.dataChartArray3 = await this.getDA3();
    // this.dataChartArray4 = await this.getDA4();
    // this.dataChartArray5 = await this.getDA5();
    // this.dataChartArray6 = await this.getDA6();
    // this.dataChartArray7 = await this.getDA7();
    // this.dataChartArray8 = await this.getDA8();
    // this.dataChartArray9 = await this.getDA9();
    // this.dataChartArray10 = await this.getDA10();

  }

  

  colors: string[] = [];

  // markerPosition = { lat: 48.8634286, lng: 12.3114617 };
  provinces = [
    'Hà Nội',
    'Hồ Chí Minh',
    'Đà Nẵng',
    'Hải Phòng',
    'Cần Thơ',
    // Thêm các tỉnh/thành phố khác ở Việt Nam vào đây
  ];
  center: any = { lat: 21.027763, lng: 105.834160 };
  zoom = 12;
  selectedProvince!: string;

  onProvinceChange() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        address: `${this.selectedProvince}, Vietnam`
      },
      (results: any, status) => {
        if (status === 'OK') {
          const latlng = results[0].geometry.location;
          this.center = { lat: latlng.lat(), lng: latlng.lng() };
        } else {
          alert(`Geocode was not successful for the following reason: ${status}`);
        }
      }
    );
  }

}
