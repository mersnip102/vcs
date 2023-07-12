import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
    tooltip: {
      style: {
        fontSize: "1.5em"
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
    title: {
      text: 'Dự án 1',
      style: {
        fontSize: "2em"
      }
    },
    xAxis: {
      categories: ['Dự án 1.1', 'Dự án 1.2', 'Dự án 1.3', 'Dự án 1.4', 'Dự án 1.5'],
      labels: {
        style: {
          fontSize: "1.5em"
        }
      }
    },
    yAxis: {
      labels: {
        style: {
          fontSize: "1.5em"
        }
      },
      title: {
        text: 'Số lượng dự án',
        style: {
          fontSize: "1.5em"
        },


      }
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "1.5em",
            
            fontWeight: 'bold',
            maxFontSize: "1.5em"
          }
        },
        label: {
          style: {
            fontSize: "1.5em",
            maxFontSize: "1.5em"
          }
        },


      }
    },
    // colors: ['#ff0000', '#00ff00', '#0000ff'], // Đặt màu sắc cho từng cột dữ liệu
    series: [{
      name: 'Dự án',
      
      label: {
        style: {
          fontSize: "1em"
        }
      },
      dataLabels: {
        style: {
          fontSize: "1em"
        }
      },
     
      data: [1000, 700, 1200, 550, 850],
      type: 'column',
      color: this.getRandomColor()
      // color: {
      //   //setups the color for each column
      //   linearGradient: {
      //     x1: 0,
      //     x2: 0,
      //     y1: 0,
      //     y2: 1
      //   },
      //   stops: [
      //     [0, '#003399'],
      //     [1, '#3366AA']
      //   ]
      // }
      

    }]
    
  
  };
  chartOptions2: Highcharts.Options = {
    credits: {
      enabled: false
    },
    tooltip: {
      style: {
        fontSize: "1.5em"
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
    title: {
      text: 'Dự án 2',
      style: {
        fontSize: "2em"
      }
    },
    xAxis: {
      categories: ['Dự án 2.1', 'Dự án 2.2', 'Dự án 2.3', 'Dự án 2.4', 'Dự án 2.5'],
      labels: {
        style: {
          fontSize: "1.5em"
        }
      }
    },
    yAxis: {
      labels: {
        style: {
          fontSize: "1.5em"
        }
      },
      title: {
        text: 'Số lượng dự án',
        style: {
          fontSize: "1.5em"
        },


      }
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "1.5em",
            
            fontWeight: 'bold',
            maxFontSize: "1.5em"
          }
        },
        label: {
          style: {
            fontSize: "1.5em",
            maxFontSize: "1.5em"
          }
        },


      }
    },
    // colors: ['#ff0000', '#00ff00', '#0000ff'], // Đặt màu sắc cho từng cột dữ liệu
    series: [{
      name: 'Dự án',
      
      label: {
        style: {
          fontSize: "1em"
        }
      },
      dataLabels: {
        style: {
          fontSize: "1em"
        }
      },
     
      data: [1000, 700, 1200, 550, 850],
      type: 'column',
      color: this.getRandomColor()
      // color: {
      //   //setups the color for each column
      //   linearGradient: {
      //     x1: 0,
      //     x2: 0,
      //     y1: 0,
      //     y2: 1
      //   },
      //   stops: [
      //     [0, '#003399'],
      //     [1, '#3366AA']
      //   ]
      // }
      

    }]
    
  
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
