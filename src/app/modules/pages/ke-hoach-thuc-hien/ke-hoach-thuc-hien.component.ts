import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { NzImageService } from 'ng-zorro-antd/image';
import { interval, map } from 'rxjs';
import { TT01DataDTO } from 'src/app/models/tt01DTO/tt01DataDto.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProxiesService } from 'src/app/services/proxies/proxies.service';
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
export class KeHoachThucHienComponent implements OnInit, AfterViewInit {
  customizeTooltip(info: any) {
    return {
      text: `${info.seriesName} - ${info.argumentText}: ${info.valueText}`
    };
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
    private apiReport: ProxiesService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notifyService: NotifyService) {
    this.authService.roleUser.subscribe(res => {
      this.roleUserCurrent = res;


    });




  }
  ngAfterViewInit(): void {
    // const panelBodyElements = document.getElementsByClassName('panel-body');
    // for (let i = 0; i < panelBodyElements.length; i++) {
    //   panelBodyElements[i].addEventListener('click', (event) => {
    //     this.router.navigate(['pages/ke-hoach-thuc-hien/01_DA1']);
    //   });
    // }
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
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  isSpinning = false;

  animation = {
    enabled: true,
    duration: 5000,
    easing: 'easeOutCubic',
    from: { translateY: '100%' },
  };
  



  intervalMs = 0.1 * 60 * 1000; // 5 minutes in milliseconds
  count = 1;
  startIndex = 0;

  dataChart: any[] = [];

  chart!: Highcharts.Chart;

  getDA1_01Data(): any {
    // interval().subscribe(() => {
    //   // this.dataService.getData().subscribe(data => {
    //   //   this.data = data;
    //   // });
    // });
    this.isSpinning = true;
    // interval(this.intervalMs).subscribe(() => {
    // const data = { status: this.status, idBaoCao: this.selectedReportId };
    this.apiReport.DA1_01('01_DA1').pipe(
      map((response: any) => response.result),
      map(data => data.map((d: any) => getTT01DataImport(d))),

    )
      .subscribe(
        (data: TT01DataDTO[]) => {
          this.isSpinning = false;
          const temp = data;

          const nsTTArray = temp.map((item: any) => {
            return item.nsTT;
          })

          this.isSpinning = false;


          this.dataChart = getTT01DataExport(nsTTArray, temp);

          // for (const [key, value] of Object.entries(detail)) {

          //   detail[key].map((item: any) => {

          //     temp.map((item2: any) => {

          //       if (item.name === item2._nsTT) {
          //         item2._nsTTDuAn = item2._nsTT.split('.')[0]
          //         temp.filter((item3: any) => {
          //           if (item3.nsTT === item2._nsTTDuAn) {

          //             item2._nsChiSoDuAn = item3.nsChiSo

          //           }
          //         })

          //         if (item2.mnSoLieuTH !== null) {
          //           this.dataChart.push(item2)
          //         }

          //       }
          //     }
          //     )

          //   })

          
          // }

          console.log(this.dataChart);

          this.getChartOptions(this.dataChart[0]);
          interval(this.intervalMs).subscribe(() => {
            

            

            if (this.startIndex > this.dataChart.length) {
              // We have reached the end of the data, start over
              this.startIndex = 0;
            } else {
              this.startIndex += this.count;
            }
            this.getChartOptions(this.dataChart[this.startIndex]);
            

          });






          // this.chart = Highcharts.chart('chart', options);
          // this.chartOptions = this.getChartOptions(this.dataChart[0]);

          // if (this.dataChart.length < this.count) {
          //   // We have reached the end of the data, start over
          //   this.startIndex = 0;
          // } else {
          //   this.startIndex += this.count;
          // }


          // const newMap = new Map<any, any>()

          // for (const [key, value] of Object.entries(detail)) {
          //   newMap.set(key, value);
          // }
          // //loop through map
          // for (const [key, value] of newMap) {
          //   console.log(key, value);
          // }





          // this.notifyService.successMessage("Lấy báo cáo oke").then(
          //   () => {

          //     // this.ngOnInit();

          //   }
          // );

          // TODO: Update the list of users
        },
        error => {
          console.error(error);
          this.isSpinning = false;
        }
      );

    // }
    // )






  }

  ngOnInit(): void {
    // assuming you have an array of data called 'data'
    this.getDA1_01Data();


    // for (let i = 0; i < 3; i++) {
    //   this.colors.push(this.getRandomColor());
    // }
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
