import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import DevExpress from 'devextreme';
import { NzImageService } from 'ng-zorro-antd/image';
import { interval } from 'rxjs';
import { TT01DataExport } from 'src/app/models/tt01DTO/tt01DataExport.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Client } from 'src/app/services/proxies/proxies.service';
import { DataService } from 'src/app/shared/data.service';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';
import { NotifyService } from 'src/app/shared/utils/notify';
//import npm i randomcolor


@Component({
  selector: 'app-chart1-ui',
  templateUrl: './chart1-ui.component.html',
  styleUrls: ['./chart1-ui.component.css']
})
export class Chart1UIComponent implements OnInit, AfterViewInit {
  // @Input() reportDataExport!: TT01DataExport[];
  @Input() animation?: any;
  @Input() dataChart: TT01DataExport[] = [];
  @Input() color?: string;
  @Input() duAn?: string;
  @Input() moveAnimation?: boolean;

  // @Input() seriesType!: string;

  getRandomColor(): string {
    let result = '';
    for (let i = 0; i < 6; ++i) {
      const value = Math.floor(16 * Math.random());
      result += value.toString(16);
    }
    return '#' + result;
  }

  // commonSeriesSettings = {
  //   type: 'bar',
  //   animation: {
  //     enabled: true,
  //     duration: 10000,
  //     easing: 'easeOutCubic',

  //   }
  // };

  // onPointClick(e: any) {
  //   e.target.select();
  //   console.log("okeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
  // }

  customizeTooltip(arg: any) {
    
    return {
      text: arg.argument + ": " + arg.value.toFixed(2)
    };
  }


  grossProductData: any[] = [
    //   {

    //   state: 'Illinois',
    //   year2016: 850,

    // }, {
    //   state: 'Indiana',
    //   year2016: 316,

    // },
    // {
    //   state: 'aaa',
    //   year2016: 316,

    // }  
  ];

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

    // this.authService.roleUser.subscribe(res => {
    //   this.roleUserCurrent = res;


    // });
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
  // colors: string = this.getRandomColor()


  data: any

  intervalMs = 0.2 * 60 * 1000;
  count = 1;
  startIndex = 0;

  seriesName = ''
  dxiSeries = '' 
  titleChart = ''
  convertDataChart: any[] = []

  // chart = new DevExpress.ui.cg("chart", {
  //   dataSource: this.a,
  //   commonSeriesSettings: {
  //     argumentField: "state",
  //     type: "bar",
  //     animation: {
  //       enabled: true,
  //       duration: 10000,
  //       easing: 'easeOutCubic',
  //     }
  //   },
  //   series: [
  //     { valueField: "year2016", name: "2016" },
  //     { valueField: "year2017", name: "2017" }
  //   ],
  //   legend: {
  //     verticalAlignment: "bottom",
  //     horizontalAlignment: "center"
  //   },
  //   title: "Gross State Product within the Great Lakes Region",
  //   "export": {
  //     enabled: true
  //   },
  //   onPointClick: function (e: any) {
  //     e.target.select();
  //   }
  // });

  // convertDataChart(data: TT01DataExport[]): any[] {
  //   let dataChart: any[] = []
  //   data.forEach((item: any) => {
  //     dataChart.push({
  //       nsChiSoDuAn: item.nsChiSoDuAn,
  //       mnSoLieuTH: item.mnSoLieuTH,
  //       nsDVT: item.nsDVT,
  //       nsTTDuAn: item.nsTTDuAn,
  //       nsChiSo: item.nsChiSo,
  //       nsChiSoDuAn: item.nsChiSoDuAn,
  //     })
  //   });
  //   return dataChart
  // }

   convertDataChartFunction(data: any): any {
   
    this.titleChart = `Dự án ${this.duAn}.${data.nsTTDuAn}. ${data.nsChiSoDuAn}`
    this.seriesName = data.nsChiSo
    this.dxiSeries = `Đơn vị tính: ${data.nsDVT}`
    this.convertDataChart = []
    this.convertDataChart.push(
      {
        data: data.mnSoLieuTH,
        nameColumn: 'Số liệu thực hiện trong kỳ bào cáo'
      },
      {
        data: data.mnSoLieuLuyKe,
        nameColumn: 'Số liệu lũy kế từ đầu năm đến thời điểm báo cáo'
      },
      {
        data: data.mnLuyKeThucHien,
        nameColumn: 'Lũy kế thực hiện từ đầu giai đoạn'
      }
    )
  }


  ngOnInit() {
    
    this.color = this.getRandomColor();
   
    if( this.moveAnimation == true) {
      this.convertDataChartFunction(this.dataChart[0])
    

      interval(this.intervalMs).subscribe(async () => {
  
  
        if (this.startIndex > this.dataChart.length) {
  
          this.startIndex = 0;
        } else {
          this.startIndex += this.count;
        }
        this.color = this.getRandomColor();
        await this.convertDataChartFunction(this.dataChart[this.startIndex])
  
        // this.getChartOptions(this.dataChartArray[this.startIndex]);
      });
    } else {
      this.convertDataChartFunction(this.dataChart[0])

    }

   



  }




  // animation = {
  //   enabled: true,
  //   duration: 5000,
  //   easing: 'easeOutCubic',
  //   from: { translateY: '100%' },
  // };




}
