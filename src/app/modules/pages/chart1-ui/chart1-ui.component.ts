import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import DevExpress from 'devextreme';
import { NzImageService } from 'ng-zorro-antd/image';
import { interval } from 'rxjs';
import { TT01DataExport } from 'src/app/models/tt01DTO/tt01DataExport.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProxiesService } from 'src/app/services/proxies/proxies.service';
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
  @Input() dataChart: any[] = [];
  @Input() color?: string;

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

  onPointClick(e: any) {
    e.target.select();
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
    private apiReport: ProxiesService,
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

    intervalMs = 0.1 * 60 * 1000; 
  count = 1;
  startIndex = 0;
  a: any[] = [{
    d: 500,
    arg: "okee"
  }]

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

  
   ngOnInit() {
      // this.a[0].d = this.dataChart._mnSoLieuTH
      //       this.a[0].arg = this.dataChart._mnSoLieuTH
      console.log(this.dataChart)
    
      this.a[0].d = this.dataChart[this.startIndex]._mnSoLieuTH
      this.a[0].arg = this.dataChart[this.startIndex]._nsChiSoDuAn
      
           interval(this.intervalMs).subscribe(() => {
           

            if (this.startIndex > this.dataChart.length) {

              this.startIndex = 0;
            } else {
              this.startIndex += this.count;
            }
            this.color = this.getRandomColor();
            this.a[0].d = this.dataChart[this.startIndex]._mnSoLieuTH
            this.a[0].arg = this.dataChart[this.startIndex]._nsChiSoDuAn
           
            // this.getChartOptions(this.dataChartArray[this.startIndex]);
          });
    
    
    
  }

  


  // animation = {
  //   enabled: true,
  //   duration: 5000,
  //   easing: 'easeOutCubic',
  //   from: { translateY: '100%' },
  // };
  

  

}
