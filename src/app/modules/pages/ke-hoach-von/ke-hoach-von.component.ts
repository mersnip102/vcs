import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as L from 'leaflet';

@Component({
  selector: 'app-ke-hoach-von',
  templateUrl: './ke-hoach-von.component.html',
  styleUrls: ['./ke-hoach-von.component.css']
})
export class KeHoachVonComponent implements OnInit {
  constructor(private http: HttpClient) { }
  latitude!: any;
  longitude!: any;
  mapOptions!: google.maps.MapOptions;
  markerPosition!: any;
  address!: any;
  private geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

  getAddress(latitude: number, longitude: number): any {
    const url = `${this.geocodeUrl}?latlng=${latitude},${longitude}&key=AIzaSyAkzMp9vyXtwqh4o6pAMzGal7IXUmuRgGU`;

    this.http.get(url).subscribe((res: any) => {
      console.log(res);
      this.address = res.results[0].formatted_address;
      console.log(this.address);
    }
    );

      
  }
  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(this.latitude, this.longitude);

        this.mapOptions = {
          center: { lat: this.latitude, lng: this.longitude },
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        };
        this.markerPosition = { lat: this.latitude, lng: this.longitude };
        console.log(this.mapOptions);
        this.getAddress(this.latitude, this.longitude);
        
      });
      
    
        
        
        
      
    } else {
      alert('Geolocation is not supported by this browser.');

    }
  }



  // constructor() {}
  // ngOnInit(): void {}
  // @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  // center: google.maps.LatLngLiteral = {
  //     lat: 24,
  //     lng: 12
  // };
  // markerPositions: google.maps.LatLngLiteral[] = [];
  // zoom = 4;
  // addMarker(event: google.maps.MapMouseEvent) {
  //     if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  // }
  // openInfoWindow(marker: MapMarker) {
  //     if (this.infoWindow != undefined) this.infoWindow.open(marker);
  // }

  highcharts = Highcharts;
  Highcharts = Highcharts; // add this
  chartOptions: any = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Kế hoạch vốn đầu tư'
    },
    xAxis: {
      categories: ['Thanh Hóa', 'An Giang', 'Bắc Kạn']
    },
    yAxis: {
      title: {
        text: 'Số tiền (VNĐ)'
      }
    },
    series: [
      {
        name: 'Series 1',
        data: [50000000, 75000000, 100000000]
      },
      {
        name: 'Series 1',
        data: [25000000, 50000000, 75000000]
      }
    ]
  };


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
