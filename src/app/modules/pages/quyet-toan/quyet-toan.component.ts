import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-quyet-toan',
  templateUrl: './quyet-toan.component.html',
  styleUrls: ['./quyet-toan.component.css']
})
export class QuyetToanComponent implements OnInit {
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
    chart: {
      type: 'column'
    },
    title: {
      text: 'Dự án 1',
    style: {
      fontSize: "2em",
      textAlign: 'center'
    }
    },
    xAxis: {
      labels: {
        style: {
          fontSize: "1.5em"
        }
      },
      categories: ['Vốn đầu tư', 'Vốn sự nghiệp'],
      crosshair: true,
      plotLines: [{
           
            value: 0.5,
            width: 3,
            label: {
                text: '',
                rotation: 90
            }
        }],
    },
    yAxis: {
      labels: {
        style: {
          fontSize: "1.5em"
        }
      },
      title: {
        text: 'ĐVT: Tỷ đồng',
        style: {
          fontSize: "1.5em"
        },
  
  
      },
      min: 0,
     
     
      // crosshair: {
      //   width: 2,
      //   color: 'blue',
  
      // },


      // crosshair: true,
      //   plotLines: [{
             
      //         value: 1.5,
      //         width: 3,
      //         label: {
      //             text: '',
      //             // rotation: 90
      //         }
      //     }],
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
      
    style: {
      fontSize: "1em"
    }
    },
    plotOptions: {
     
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
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
    series: [{
      type: 'column',
      name: 'Vốn được giao',
      data: [1000,550],
      
      color: 'rgba(222, 224, 92)'
    }, {
      type: 'column',
      name: 'Vốn đã quyết toán',
      data: [580,400],
      color: 'rgba(107, 199, 142)'
    }],

    credits: {
    enabled: false
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


 
  
  
  


  // credits: {
  //   enabled: false
  // },
  
  // legend: {
  //   itemStyle: {
  //     fontSize: '1.5em'
  //   },
  //   title: {
  //     style: {
  //       fontSize: "1.5em"
  //     }
  //   }
  // },

  // chart: {
  //   type: 'column'
  // },
  // title: {
  //   text: 'Dự án 1',
  //   style: {
  //     fontSize: "2em"
  //   }
  // },
  // xAxis: {
   
  //   labels: {
  //     style: {
  //       fontSize: "1.5em"
  //     }
  //   },
  //   // crosshair: {
  //   //   width: 2,
  //   //   color: 'blue',

  //   // },
  //   crosshair: true,
  //     plotLines: [{
           
  //           value: 1.5,
  //           width: 3,
  //           label: {
  //               text: '',
  //               // rotation: 90
  //           }
  //       }],
  // },
  // yAxis: {
  //   labels: {
  //     style: {
  //       fontSize: "1.5em"
  //     }
  //   },
  //   title: {
  //     text: 'Số lượng dự án',
  //     style: {
  //       fontSize: "1.5em"
  //     },


  //   }
  // },
  // plotOptions: {
    
  //   column: {
  //     pointPadding: 0.2,
  //     borderWidth: 0,
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
     
  //     borderRadius: 5,
  //     colorByPoint: true,
     
      
      


  //   }
  // },
  // tooltip: {
  //   headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  //   pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
  //     '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
  //   footerFormat: '</table>',
  //   shared: true,
  //   useHTML: true,
  //   style: {
  //     fontSize: "1.5em"
  //   }
  // },
  // // colors: ['#ff0000', '#00ff00', '#0000ff'], // Đặt màu sắc cho từng cột dữ liệu
  // // series: [{
  // //   name: 'Dự án',

  // //   label: {
  // //     style: {
  // //       fontSize: "1em"
  // //     }
  // //   },
  // //   dataLabels: {
  // //     style: {
  // //       fontSize: "1em"
  // //     }
  // //   },


  // //   data: [1000, 700, 1200, 550],
  // //   type: 'column',

  // //   // color: this.getRandomColor()


  // //   // color: {
  // //   //   //setups the color for each column
  // //   //   linearGradient: {
  // //   //     x1: 0,
  // //   //     x2: 0,
  // //   //     y1: 0,
  // //   //     y2: 1
  // //   //   },
  // //   //   stops: [
  // //   //     [0, '#003399'],
  // //   //     [1, '#3366AA']
  // //   //   ]
  // //   // }


  // // }]

  // series: [{
  //   type: 'column',
  //   name: 'Dữ liệu 1',
  //   data: [49.9, 71.5],
  //   color: 'rgba(165,170,217,1)'
  // }, {
  //   type: 'column',
  //   name: 'Dữ liệu 2',
  //   data: [83.6, 78.8],
  //   color: 'rgba(126,86,134,.9)'
  // }]



  };
  chartOptions2: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Dự án 2',
    style: {
      fontSize: "2em",
      textAlign: 'center'
    }
    },
    xAxis: {
      labels: {
        style: {
          fontSize: "1.5em"
        }
      },
      categories: ['Vốn đầu tư', 'Vốn sự nghiệp'],
      crosshair: true,
      plotLines: [{
           
            value: 0.5,
            width: 3,
            label: {
                text: '',
                rotation: 90
            }
        }],
    },
    yAxis: {
      labels: {
        style: {
          fontSize: "1.5em"
        }
      },
      title: {
        text: 'ĐVT: Tỷ đồng',
        style: {
          fontSize: "1.5em"
        },
  
  
      },
      min: 0,
     
     
      // crosshair: {
      //   width: 2,
      //   color: 'blue',
  
      // },


      // crosshair: true,
      //   plotLines: [{
             
      //         value: 1.5,
      //         width: 3,
      //         label: {
      //             text: '',
      //             // rotation: 90
      //         }
      //     }],
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
      
    style: {
      fontSize: "1em"
    }
    },
    plotOptions: {
     
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
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
    series: [{
      type: 'column',
      name: 'Vốn được giao',
      data: [1000,550],
      
      color: 'rgba(222, 224, 92)'
    }, {
      type: 'column',
      name: 'Vốn đã quyết toán',
      data: [620,415],
      color: 'rgba(107, 199, 142)'
    }],

    credits: {
    enabled: false
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
