import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

declare var google: any;
@Component({
  selector: 'app-tra-cuu-pakn',
  templateUrl: './tra-cuu-pakn.component.html',
  styleUrls: ['./tra-cuu-pakn.component.css']
})
export class TraCuuPAKNComponent implements OnInit {
 
//   map: any;
//   autocomplete: any;
//   selectedProvince!: string;
//   selectedDistrict!: string;
//   selectedWard!: string;
//   selectedAddress!: string;
//   provinces: string[] = ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng'];
//   districts: string[] = ['Quận 1', 'Quận 2', 'Quận 3', 'Quận 4'];
//   wards: string[] = ['Phường 1', 'Phường 2', 'Phường 3'];

//   ngOnInit() {
//     this.map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: 21.027763, lng: 105.834160},
//       zoom: 13
//     });

//     this.autocomplete = new google.maps.places.Autocomplete(
//       document.getElementById('autocomplete'),
//       {
//         types: ['geocode']
//       });
//   }

//   search() {
//     let address = '';
//     if (this.selectedAddress) {
//       address += this.selectedAddress + ', ';
//     }
//     address += `${this.selectedWard}, ${this.selectedDistrict}, ${this.selectedProvince}, Việt Nam`;
//     console.log(address)
//     this.geocodeAddress(address);
//   }
//   marker?: any[] = []; // Thêm biến để lưu trữ đối tượng Marker
//   marker2?: any
//   geocodeAddress(address: string) {
//     const geocoder = new google.maps.Geocoder();
//     geocoder.geocode({ address }, (results: any, status: string) => {
//       if (status === 'OK') {
//         this.map.setCenter(results[0].geometry.location);
//         this.marker?.push(new google.maps.Marker({
//           map: this.map,
//           position: results[0].geometry.location
//         }));
//         this.marker2 = new google.maps.Marker({
//           map: this.map,
//           position: results[0].geometry.location
//         });
//         // Lấy kinh độ và vĩ độ của đối tượng Marker
// const lat = this.marker2.getPosition().lat();
// const lng = this.marker2.getPosition().lng();
// console.log(`Kinh độ: ${lng}, Vĩ độ: ${lat}`);
//       } else {
//         alert('Geocode was not successful forthe following reason: ' + status);
//       }
//     });
//   }

//   clearMarker() {
//     // Xóa đối tượng Marker bằng cách đặt map của nó là null
//     console.log(this.marker)
//     this.marker2.setMap(null);
//     this.marker!.forEach((marker) => {
//       marker.setMap(null);
//     }
//     );
//   }


// autocomplete: any;

//   ngOnInit() {
//     this.autocomplete = new google.maps.places.Autocomplete(
//       document.getElementById('autocomplete'),
//       {
//         types: ['geocode']
//       });

//     // Đăng ký sự kiện khi người dùng chọn một địa điểm từ danh sách gợi ý
//     this.autocomplete.addListener('place_changed', this.onPlaceChanged);
//   }

//   onPlaceChanged() {
//     const place = this.autocomplete.getPlace();
//     if (place.geometry) {
//       const lat = place.geometry.location.lat();
//       const lng = place.geometry.location.lng();
//       console.log(`Kinh độ: ${lng}, Vĩ độ: ${lat}`);
//     }
//   }


private citis?: HTMLSelectElement  
  private districts?: HTMLSelectElement 
  private wards?: HTMLSelectElement 

   // lay api ra
   
 

  private renderCity(data: any) {

    for (const x of data) {
      this.citis!.options[this.citis!.options.length] = new Option(x.Name, x.Id);
    }
    this.citis!.onchange = () => {
      this.districts!.length = 1;
      this.wards!.length = 1;
      if (this.citis!.value !== "") {
        const result = data.filter((n: any) => n.Id === this.citis!.value);

        for (const k of result[0].Districts) {
          this.districts!.options[this.districts!.options.length] = new Option(k.Name, k.Id);
        }
      }
    };
    this.districts!.onchange = () => {
      this.wards!.length = 1;
      const dataCity = data.filter((n: any) => n.Id === this.citis!.value);
      if (this.districts!.value !== "") {
        const dataWards = dataCity[0].Districts.filter((n: any) => n.Id === this.districts!.value)[0].Wards;

        for (const w of dataWards) {
          this.wards!.options[this.wards!.options.length] = new Option(w.Name, w.Id);
        }
      }
    };
  }
  
    // lay api ra

  nodes = [
    {
      title: '11 - Tổ chức Grap',
      key: '00',
      expanded: true,
      children: [
        {
          title: '02 Tổ chức 2',
          key: '000',
          expanded: true,
          children: [
            { title: '04 - Tổ chức 04', key: '0000', isLeaf: true },
           
          ]
        },
        
        
      ]
    },
    {
      title: '03 - Tổ chức 03',
      key: '01',
      isLeaf: true,
    },
    {
      title: '01-Tổ chức 04',
      key: '02',
      
      expanded: true,
      children: [
        {
          title: '011-Xã ĐT',
          key: '010',
          children: [
            { title: '012-Thôn TK3', key: '0100', expanded: true, children: [ 
              { title: '013-Tổ vệ sinh', key: '01000', isLeaf: true },
              
            ] },
           
          ]
        },
      ]
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  isVisible = false;

  constructor() {}
  async ngOnInit(): Promise<void> {
    const children: string[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(`${i.toString(36)}${i}`);
    }
    this.listOfOption = children;
    this.citis = document.getElementById("city") as HTMLSelectElement;
    this.districts = document.getElementById("district") as HTMLSelectElement;
    this.wards = document.getElementById("ward") as HTMLSelectElement;
    await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
   .then(result => {
    
     this.renderCity(result.data);
   });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  async loadData() {
    this.citis = document.getElementById("city") as HTMLSelectElement;
    this.districts = document.getElementById("district") as HTMLSelectElement;
    this.wards = document.getElementById("ward") as HTMLSelectElement;
    await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
   .then(result => {
    
     this.renderCity(result.data);
   });
    
  }

  listOfOption: string[] = [];
  listOfSelectedValue = ['a10', 'c12'];


}
