import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bao-cao-ket-qua',
  templateUrl: './bao-cao-ket-qua.component.html',
  styleUrls: ['./bao-cao-ket-qua.component.css']
})
export class BaoCaoKetQuaComponent implements OnInit {
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

  ngOnInit() {
    // assuming you have an array of data called 'data'
    for (let i = 0; i < 3; i++) {
      this.colors.push(this.getRandomColor());
    }
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




  // add this
  chartOptions: Highcharts.Options = {
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
      categories: ['Số liệu thực hiện trong kỳ báo cáo', 'Số liệu lũy kế từ đầu năm đến thời điểm báo cáo','Lũy kế thực hiện giai đoạn đến thời điểm báo cáo'],
      labels: {
        style: {
          fontSize: "1.5em"
        }
      }
    },
    // colors: ['red'],
    series: [{
      type: 'column',
      name: 'Số hộ nghèo dân tộc thiểu số',
      data: [400, 600, 800]
    },]




  };
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
      categories: ['Số liệu thực hiện trong kỳ báo cáo', 'Số liệu lũy kế từ đầu năm đến thời điểm báo cáo','Lũy kế thực hiện giai đoạn đến thời điểm báo cáo'],
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


  // chartOptions: any = {
  //   chart: {
  //     type: 'column'
  //   },
  //   title: {
  //     text: 'Monthly Sales'
  //   },
  //   xAxis: {
  //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  //   },
  //   yAxis: {
  //     title: {
  //       text: 'Sales'
  //     }
  //   },
  //   plotOptions: {
  //     label: {
  //       style: {
  //         fontSize: '16px',
  //         color: 'red',
  //         fontWeight: 'bold'
  //       }
  //     },
  //     column: {
  //       // increase font size of name
  //       style: {
  //         fontSize: '16px',
  //         color: 'red',
  //         fontWeight: 'bold'
  //       },


  //       dataLabels: {
  //         enabled: true,
  //         style: {
  //           fontSize: '16px',
  //           // color: 'red',
  //           // fontWeight: 'bold'
  //         }
  //       }
  //     }
  //   },
  //   series: [{
  //     name: 'Sales',

  //     // increase font size of Sales



  //     // dataLabels: {
  //     //   style: {
  //     //     fontSize: '16px',
  //     //     color: 'red',
  //     //     fontWeight: 'bold'
  //     //   }
  //     // },


  //     data: [100, 200, 300, 400, 500, 600, 700],
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
