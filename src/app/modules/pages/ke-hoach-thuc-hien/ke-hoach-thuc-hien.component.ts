import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';
import { NzImageService } from 'ng-zorro-antd/image';
import { Subscription, interval, map } from 'rxjs';
import { TT01DataDTO } from 'src/app/models/tt01DTO/tt01DataDto.model';
import { TT01DataExport } from 'src/app/models/tt01DTO/tt01DataExport.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Client } from 'src/app/services/proxies/proxies.service';
import { DataService } from 'src/app/shared/data.service';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';
import { getTT01DataExport } from 'src/app/shared/transformData/tt01/tt01DataExport';
import { getTT01DataImport } from 'src/app/shared/transformData/tt01/tt01DataImport';
import { detailChild } from 'src/app/shared/utilities';
import { NotifyService } from 'src/app/shared/utils/notify';


@Component({
  selector: 'app-ke-hoach-thuc-hien',
  templateUrl: './ke-hoach-thuc-hien.component.html',
  styleUrls: ['./ke-hoach-thuc-hien.component.css']
})
export class KeHoachThucHienComponent implements OnInit, OnDestroy {
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



  Highcharts: typeof Highcharts = Highcharts;

  // chartOptions: Highcharts.Options = {
  //   series: [{

  //     data: [1, 2, 3],
  //     type: 'line',
  //     label: {
  //       style: {
  //         fontSize: '30px',


  //       }

  //     },
  //     name: 'Check',
  //     dataLabels: {
  //       style: {
  //         fontSize: '30px'
  //       }
  //     },




  //   }]
  // };

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

  dataChartArray1!: TT01DataExport[]
  dataChartArray2!: TT01DataExport[]
  dataChartArray3!: TT01DataExport[]
  dataChartArray4!: TT01DataExport[]
  dataChartArray5!: TT01DataExport[]
  dataChartArray6!: TT01DataExport[]
  dataChartArray7!: TT01DataExport[]
  dataChartArray8!: TT01DataExport[]
  dataChartArray9!: TT01DataExport[]
  dataChartArray10!: TT01DataExport[]

  chart!: Highcharts.Chart;

  async onChange(result: Date[]): Promise<void> {
    
   
    this.startDate = moment(result[0]).format("MM/DD/YYYY");
    this.endDate = moment(result[1]).format("MM/DD/YYYY");
    await this.getAllDuAn()
    console.log(this.dataChartArray1)
  }

  startDate = '';
  endDate = '';

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

  async getDA1() {
    let F01_DA1 = await this.callApiReport('01_DA1')
    console.log(F01_DA1)

    let data = [...F01_DA1]
    return data

  }
  async getDA2() {
    let F02_DA2 = await this.callApiReport('02_DA2')

    let data = [...F02_DA2]
    return data

  }
  async getDA3() {


    //   ...this.callApiReport('03_DA3_01'),
    // ... this.callApiReport('04_DA3_02_01'), ...this.callApiReport('05_DA3_02_02_02')

    let F03_DA3_01 = await this.callApiReport('03_DA3_01')
    let F04_DA3_02_01 = await this.callApiReport('04_DA3_02_01')
    let F05_DA3_02_02_02 = await this.callApiReport('05_DA3_02_02_02')
    let F06_DA3_02_03 = await this.callApiReport('06_DA3_02_03')
    let F07_DA3_03 = await this.callApiReport('07_DA3_03')
    let data = [...F03_DA3_01, ...F04_DA3_02_01, ...F05_DA3_02_02_02, ...F06_DA3_02_03, ...F07_DA3_03]
    return data


  }

  async getDA4() {
    let F08_DA4_01_01 = await this.callApiReport('08_DA4_01_01')
    let F09_DA4_01_02 = await this.callApiReport('09_DA4_01_02')
    // let F10_DA4_02 = await this.callApiReport('10_DA4_02')
    
    let data = [...F08_DA4_01_01, ...F09_DA4_01_02]
    return data

  }

  async getDA5() {
    let F11_DA5_01 = await this.callApiReport('11_DA5_01')
    let F12_DA5_02 = await this.callApiReport('12_DA5_02')
    let F13_DA5_03 = await this.callApiReport('13_DA5_03')
    let F14_DA5_04 = await this.callApiReport('14_DA5_04')
    
    let data = [...F11_DA5_01, ...F12_DA5_02, ...F13_DA5_03, ...F14_DA5_04]
    return data

  }


  async getDA6() {
    let F15_DA6 = await this.callApiReport('15_DA6')
   
    
    let data = [...F15_DA6]
    return data

  }

  async getDA7() {
    let F16_DA7 = await this.callApiReport('16_DA7')
   
    
    let data = [...F16_DA7]
    return data

  }


  async getDA8() {
    let F17_DA8= await this.callApiReport('17_DA8')
   
    
    let data = [...F17_DA8]
    return data

  }


  async getDA9() {
    let F18_DA9_01= await this.callApiReport('18_DA9_01')
    let F19_DA9_02= await this.callApiReport('19_DA9_02')
   
    
    let data = [...F18_DA9_01, ...F19_DA9_02]
    return data

  }

  async getDA10() {
    let F20_DA10_01= await this.callApiReport('20_DA10_01')
    let F21_DA10_02= await this.callApiReport('21_DA10_02')
    let F22_DA10_03= await this.callApiReport('22_DA10_03')
   
    
    let data = [...F20_DA10_01, ...F21_DA10_02, ...F22_DA10_03]
    return data

  }


  async getAllDuAn() {
    this.dataChartArray1 =  await this.getDA1();
   
    this.dataChartArray2 = await this.getDA2();
    
    this.dataChartArray3 = await this.getDA3();
    this.dataChartArray4 = await this.getDA4();
    this.dataChartArray5 = await this.getDA5();
    this.dataChartArray6 = await this.getDA6();
    this.dataChartArray7 = await this.getDA7();
    this.dataChartArray8 = await this.getDA8();
    this.dataChartArray9 = await this.getDA9();
    this.dataChartArray10 = await this.getDA10();
  }
  


  async ngOnInit() {
    await this.getAllDuAn();
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

  public getChartOptions(data: any) {

    let yAxisData: any[] = [];
    yAxisData.push(data._mnSoLieuTH)
    yAxisData.push(data._mnSoLieuLuyKe)
    yAxisData.push(data._mnLuyKeThucHien)

    this.chartOptions = {
      credits: {
        enabled: false
      },
      yAxis: {
        labels: {
          style: {
            fontSize: "1.5em"
          }
        },
        title: {
          text: `Đơn vị tính: ${data._nsDVT}`,
          style: {
            fontSize: "1.5em"
          },


        }
      },
      title: {

        text: `Dự án 1.${data._nsTTDuAn}. ${data._nsChiSoDuAn}`,
        style: {
          fontSize: "2em"
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} Hộ</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,

        style: {
          fontSize: "1em"
        }
      },
      legend: {
        itemStyle: {
          fontSize: '1.5em'
        },
        title: {
          style: {
            fontSize: "1.5em"
          }
        }
      },
      chart: {
        type: 'column',
        animation: {
          duration: 2000,
          easing: 'easeOutBounce',

        },
        // events: {
        //   click: (event: any) => {
        //     // if (event.point) {
        //     //   // Lấy giá trị của cột được click
        //     //   const value = event.point.y;

        //     //   // Chuyển hướng đến trang mới với tham số là giá trị cột

        //     // }
        //     this.router.navigate(['pages/ke-hoach-thuc-hien/01_DA1']);

        //   }

        // }
      },

      xAxis: {
        categories: ['Số liệu thực hiện trong kỳ báo cáo', 'Số liệu lũy kế từ đầu năm đến thời điểm báo cáo', 'Lũy kế thực hiện giai đoạn đến thời điểm báo cáo'],
        labels: {
          style: {
            fontSize: "1.5em"
          }
        }
      },
      // colors: ['red'],
      series: [{
        color: this.getRandomColor(),
        type: 'column',
        name: data._nsChiSo,
        data: yAxisData,
        dataLabels: {
          enabled: true,
          style: {
            color: 'black',
            fontSize: '1.5em'

          }
        },
        animation: {
          duration: 2000,
          easing: 'easeOutBounce',
        }
      },]
    };
  }

  public getChartOptions2(data: TT01DataDTO): Highcharts.Options {
    return {
      credits: {
        enabled: false
      },
      yAxis: {
        labels: {
          style: {
            fontSize: "1.5em"
          }
        },
        title: {
          text: 'Đơn vị tính: %',
          style: {
            fontSize: "1.5em"
          },


        }
      },
      title: {
        text: 'Dự án 1: Hỗ trợ đất ở',
        style: {
          fontSize: "2em"
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,

        style: {
          fontSize: "1em"
        }
      },
      legend: {
        itemStyle: {
          fontSize: '1.5em'
        },
        title: {
          style: {
            fontSize: "1.5em"
          }
        }
      },
      chart: {
        type: 'column'
      },

      xAxis: {
        categories: ['Tỷ lệ (%) thực hiện KH năm', 'Tỷ lệ (%) thực hiện KH cả giai đoạn'],
        labels: {
          style: {
            fontSize: "1.5em"
          }
        }
      },
      colors: ['#198754'],
      series: [{
        type: 'column',
        name: 'Số hộ nghèo dân tộc thiểu số',
        data: [300, 54]
      },]
    };
  }

  colors: string[] = [];

  // chartOptions: Highcharts.Options = {
  //   chart: {
  //     type: 'column'
  //   },
  //   title: {
  //     text: 'Column chart with random colors for each column'
  //   },
  //   xAxis: {
  //     categories: ['Apples', 'Oranges', 'Bananas', 'Pears', 'Grapes']
  //   },
  //   yAxis: {
  //     title: {
  //       text: 'Fruit eaten'
  //     }
  //   },
  //   series: [{
  //     name: 'Jane',
  //     type: 'column',
  //     data: [3, 2, 1, 3, 4],
  //     color: this.colors[0] // set color for the first column
  //   }, {
  //     name: 'John',
  //     type: 'column',
  //     data: [2, 3, 5, 7, 6],
  //     color: this.colors[1] // set color for the second column
  //   }, {
  //     name: 'Joe',
  //     type: 'column',
  //     data: [4, 3, 3, 9, 0],
  //     color: this.colors[2] // set color for the third column
  //   }]
  // };










  // plotOptions: {
  //   column: {
  //     dataLabels: {
  //       enabled: true,
  //       style: {
  //         fontSize: "1.5em",

  //         fontWeight: 'bold',
  //         maxFontSize: "1.5em"
  //       }
  //     },
  //     label: {
  //       style: {
  //         fontSize: "1.5em",
  //         maxFontSize: "1.5em"
  //       }
  //     },

  //     grouping: false,
  //     shadow: false,
  //     borderWidth: 0,
  //     borderRadius: 5,
  //     colorByPoint: true,
  //     // colors: ['#FFC0CB', '#FF69B4', '#FF1493', '#C71585', '#DB7093'],


  //   }
  // },

  chartOptions!: Highcharts.Options

  // chartOptions: Highcharts.Options = {
  //   credits: {
  //     enabled: false
  //   },
  //   yAxis: {
  //     labels: {
  //       style: {
  //         fontSize: "1.5em"
  //       }
  //     },
  //     title: {
  //       text: 'Đơn vị tính: Hộ',
  //       style: {
  //         fontSize: "1.5em"
  //       },


  //     }
  //   },
  //   title: {
  //     text: 'Dự án 1: Hỗ trợ đất ở',
  //     style: {
  //       fontSize: "2em"
  //     }
  //   },
  //   tooltip: {
  //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
  //       '<td style="padding:0"><b>{point.y:.1f} Hộ</b></td></tr>',
  //     footerFormat: '</table>',
  //     shared: true,
  //     useHTML: true,

  //     style: {
  //       fontSize: "1em"
  //     }
  //   },
  //   legend: {
  //     itemStyle: {
  //       fontSize: '1.5em'
  //     },
  //     title: {
  //       style: {
  //         fontSize: "1.5em"
  //       }
  //     }
  //   },
  //   chart: {
  //     type: 'column',
  //   },

  //   xAxis: {
  //     categories: ['Số liệu thực hiện trong kỳ báo cáo', 'Số liệu lũy kế từ đầu năm đến thời điểm báo cáo','Lũy kế thực hiện giai đoạn đến thời điểm báo cáo'],
  //     labels: {
  //       style: {
  //         fontSize: "1.5em"
  //       }
  //     }
  //   },
  //   // colors: ['red'],
  //   series: [{
  //     type: 'column',
  //     name: 'Số hộ nghèo dân tộc thiểu số',
  //     data: [400, 600, 800]
  //   },]




  // };
  chartOptions2: Highcharts.Options = {
    credits: {
      enabled: false
    },
    yAxis: {
      labels: {
        style: {
          fontSize: "1.5em"
        }
      },
      title: {
        text: 'Đơn vị tính: %',
        style: {
          fontSize: "1.5em"
        },


      }
    },
    title: {
      text: 'Dự án 1: Hỗ trợ đất ở',
      style: {
        fontSize: "2em"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,

      style: {
        fontSize: "1em"
      }
    },
    legend: {
      itemStyle: {
        fontSize: '1.5em'
      },
      title: {
        style: {
          fontSize: "1.5em"
        }
      }
    },
    chart: {
      type: 'column'
    },

    xAxis: {
      categories: ['Tỷ lệ (%) thực hiện KH năm', 'Tỷ lệ (%) thực hiện KH cả giai đoạn'],
      labels: {
        style: {
          fontSize: "1.5em"
        }
      }
    },
    colors: ['#198754'],
    series: [{
      type: 'column',
      name: 'Số hộ nghèo dân tộc thiểu số',
      data: [300, 54]
    },]




  };

  chartOptions3: Highcharts.Options = {
    credits: {
      enabled: false
    },
    yAxis: {
      labels: {
        style: {
          fontSize: "1.5em"
        }
      },
      title: {
        text: 'Đơn vị tính: Hộ',
        style: {
          fontSize: "1.5em"
        },


      }
    },
    title: {
      text: 'Dự án 1: Hỗ trợ đất ở',
      style: {
        fontSize: "2em"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} Hộ</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,

      style: {
        fontSize: "1em"
      }
    },
    legend: {
      itemStyle: {
        fontSize: '1.5em'
      },
      title: {
        style: {
          fontSize: "1.5em"
        }
      }
    },
    chart: {
      type: 'column'
    },

    xAxis: {
      categories: ['Số liệu thực hiện trong kỳ báo cáo', 'Số liệu lũy kế từ đầu năm đến thời điểm báo cáo', 'Lũy kế thực hiện giai đoạn đến thời điểm báo cáo'],
      labels: {
        style: {
          fontSize: "1.5em"
        }
      }
    },
    colors: ['#bf5a43'],
    series: [{
      type: 'column',
      name: 'Số hộ nghèo dân tộc Kinh',
      data: [450, 680, 820]
    },]




  };
  chartOptions4: Highcharts.Options = {
    credits: {
      enabled: false
    },
    yAxis: {
      labels: {
        style: {
          fontSize: "1.5em"
        }
      },
      title: {
        text: 'Đơn vị tính: %',
        style: {
          fontSize: "1.5em"
        },


      }
    },
    title: {
      text: 'Dự án 1: Hỗ trợ đất ở',
      style: {
        fontSize: "2em"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,

      style: {
        fontSize: "1em"
      }
    },
    legend: {
      itemStyle: {
        fontSize: '1.5em'
      },
      title: {
        style: {
          fontSize: "1.5em"
        }
      }
    },
    chart: {
      type: 'column'
    },

    xAxis: {
      categories: ['Tỷ lệ (%) thực hiện KH năm', 'Tỷ lệ (%) thực hiện KH cả giai đoạn'],
      labels: {
        style: {
          fontSize: "1.5em"
        }
      }
    },
    colors: ['#43bfb5'],
    series: [{
      type: 'column',
      name: 'Số hộ nghèo dân tộc Kinh',
      data: [215, 98.4]
    },]




  };





  chartOptions5: Highcharts.Options = {
    credits: {
      enabled: false
    },
    yAxis: {
      labels: {
        style: {
          fontSize: "1.5em"
        }
      },
      title: {
        text: 'Đơn vị tính: %',
        style: {
          fontSize: "1.5em"
        },


      }
    },
    title: {
      text: 'Dự án 1: Hỗ trợ nhà ở',
      style: {
        fontSize: "2em"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,

      style: {
        fontSize: "1em"
      }
    },
    legend: {
      itemStyle: {
        fontSize: '1.5em'
      },
      title: {
        style: {
          fontSize: "1.5em"
        }
      }
    },
    chart: {
      type: 'column'
    },

    xAxis: {
      categories: ['Số hộ nghèo dân tộc thiểu số', 'Số hộ nghèo dân tộc Kinh'],
      labels: {
        style: {
          fontSize: "1.5em"
        }
      }
    },

    series: [{
      type: 'column',
      name: 'Tỷ lệ (%) thực hiện KH năm',
      data: [200, 157.5]
    }]




  };

  chartOptions6: Highcharts.Options = {
    credits: {
      enabled: false
    },
    yAxis: {
      labels: {
        style: {
          fontSize: "1.5em"
        }
      },
      title: {
        text: 'Đơn vị tính: %',
        style: {
          fontSize: "1.5em"
        },


      }
    },
    title: {
      text: 'Dự án 1: Hỗ trợ nhà ở',
      style: {
        fontSize: "2em"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,

      style: {
        fontSize: "1em"
      }
    },
    legend: {
      itemStyle: {
        fontSize: '1.5em'
      },
      title: {
        style: {
          fontSize: "1.5em"
        }
      }
    },
    chart: {
      type: 'column'
    },

    xAxis: {
      categories: ['Số hộ nghèo dân tộc thiểu số', 'Số hộ nghèo dân tộc Kinh'],
      labels: {
        style: {
          fontSize: "1.5em"
        }
      }
    },

    series: [{
      type: 'column',
      name: 'Tỷ lệ (%) thực hiện KH cả giai đoạn',
      data: [1.8, 1.42]
    }]




  };








  // chartOptions7: Highcharts.Options = {
  //   credits: {
  //     enabled: false
  //   },
  //   yAxis: {
  //     labels: {
  //       style: {
  //         fontSize: "1.5em"
  //       }
  //     },
  //     title: {
  //       text: 'Đơn vị tính: Hộ',
  //       style: {
  //         fontSize: "1.5em"
  //       },


  //     }
  //   },
  //   title: {
  //     text: 'Dự án 1: Hỗ trợ sản xuất, chuyển đổi nghề',
  //     style: {
  //       fontSize: "2em"
  //     }
  //   },
  //   tooltip: {
  //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
  //       '<td style="padding:0"><b>{point.y:.1f} Hộ</b></td></tr>',
  //     footerFormat: '</table>',
  //     shared: true,
  //     useHTML: true,

  //     style: {
  //       fontSize: "1em"
  //     }
  //   },
  //   legend: {
  //     itemStyle: {
  //       fontSize: '1.5em'
  //     },
  //     title: {
  //       style: {
  //         fontSize: "1.5em"
  //       }
  //     }
  //   },
  //   chart: {
  //     type: 'column'
  //   },

  //   xAxis: {
  //     categories: ['Số hộ nghèo dân tộc thiểu số', 'Số hộ nghèo dân tộc Kinh'],
  //     labels: {
  //       style: {
  //         fontSize: "1.5em"
  //       }
  //     }
  //   },

  //   series: [{
  //     type: 'column',
  //     name: 'Số liệu thực hiện trong kỳ',
  //     data: [600, 310]
  //   }, {
  //     type: 'column',
  //     name: 'Số liệu lũy kế từ đầu năm đến thời điểm báo cáo',
  //     data: [400, 550]
  //   }, {
  //     type: 'column',
  //     name: 'Lũy kế thực hiện giai đoạn đến thời điểm báo cáo',
  //     data: [200, 120]
  //   }]




  // };
  // chartOptions8: Highcharts.Options = {
  //   credits: {
  //     enabled: false
  //   },
  //   yAxis: {
  //     labels: {
  //       style: {
  //         fontSize: "1.5em"
  //       }
  //     },
  //     title: {
  //       text: 'Đơn vị tính: %',
  //       style: {
  //         fontSize: "1.5em"
  //       },


  //     }
  //   },
  //   title: {
  //     text: 'Dự án 1: Hỗ trợ sản xuất, chuyển đổi nghề',
  //     style: {
  //       fontSize: "2em"
  //     }
  //   },
  //   tooltip: {
  //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
  //       '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
  //     footerFormat: '</table>',
  //     shared: true,
  //     useHTML: true,

  //     style: {
  //       fontSize: "1em"
  //     }
  //   },
  //   legend: {
  //     itemStyle: {
  //       fontSize: '1.5em'
  //     },
  //     title: {
  //       style: {
  //         fontSize: "1.5em"
  //       }
  //     }
  //   },
  //   chart: {
  //     type: 'column'
  //   },

  //   xAxis: {
  //     categories: ['Số hộ nghèo dân tộc thiểu số', 'Số hộ nghèo dân tộc Kinh'],
  //     labels: {
  //       style: {
  //         fontSize: "1.5em"
  //       }
  //     }
  //   },

  //   series: [{
  //     type: 'column',
  //     name: 'Tỷ lệ (%) thực hiện KH năm',
  //     data: [200, 157.5]
  //   }]




  // };

  // chartOptions9: Highcharts.Options = {
  //   credits: {
  //     enabled: false
  //   },
  //   yAxis: {
  //     labels: {
  //       style: {
  //         fontSize: "1.5em"
  //       }
  //     },
  //     title: {
  //       text: 'Đơn vị tính: %',
  //       style: {
  //         fontSize: "1.5em"
  //       },


  //     }
  //   },
  //   title: {
  //     text: 'Dự án 1: Hỗ trợ sản xuất, chuyển đổi nghề',
  //     style: {
  //       fontSize: "2em"
  //     }
  //   },
  //   tooltip: {
  //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
  //       '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
  //     footerFormat: '</table>',
  //     shared: true,
  //     useHTML: true,

  //     style: {
  //       fontSize: "1em"
  //     }
  //   },
  //   legend: {
  //     itemStyle: {
  //       fontSize: '1.5em'
  //     },
  //     title: {
  //       style: {
  //         fontSize: "1.5em"
  //       }
  //     }
  //   },
  //   chart: {
  //     type: 'column'
  //   },

  //   xAxis: {
  //     categories: ['Số hộ nghèo dân tộc thiểu số', 'Số hộ nghèo dân tộc Kinh'],
  //     labels: {
  //       style: {
  //         fontSize: "1.5em"
  //       }
  //     }
  //   },

  //   series: [{
  //     type: 'column',
  //     name: 'Tỷ lệ (%) thực hiện KH cả giai đoạn',
  //     data: [1.8, 1.42]
  //   }]




  // };






  // mapOptions: google.maps.MapOptions = {
  //   center: { lat: 48.8588548, lng: 12.347035 },
  //   zoomControl: false,
  //   mapTypeControl: false,
  //   streetViewControl: false,
  //   fullscreenControl: false,
  // };

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
