import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { QuillModules } from 'ngx-quill';
declare var google: any;
@Component({
  selector: 'app-lap-bao-cao',
  templateUrl: './lap-bao-cao.component.html',
  styleUrls: ['./lap-bao-cao.component.css']
})
export class LapBaoCaoComponent implements OnInit {

  private citis?: HTMLSelectElement
  private districts?: HTMLSelectElement
  private wards?: HTMLSelectElement

  latitude!: any;
  longitude!: any;
  mapOptions!: google.maps.MapOptions;
  markerPosition!: any;
  address!: any;
  private geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

  // lay api ra
  slecetData: any;
  value?: string;
  onChange() {
    // const selectedOptionName = event.target.selectedOptions[0].innerText;
    // this.slecetData = selectedOptionName;
    // console.log(this.citis?.selectedOptions[0].innerText);
    this.value = this.changeLocationOnMap(this.citis?.selectedOptions[0].innerText!,
      this.districts?.selectedOptions[0].innerText!,
      this.wards?.selectedOptions[0].innerText!)

      console.log(this.value)

      let geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        address: this.value
      },
      (results: any, status: any) => {
        if (status === 'OK') {
          const latlng = results[0].geometry.location;
          this.center = { lat: latlng.lat(), lng: latlng.lng() };
        } else {
          alert(`Geocode was not successful for the following reason: ${status}`);
        }
      }
    );
  

  }
  
changeLocationOnMap(city?: string, district?: string, ward?: string) {
    

    // this.value = 'Việt Nam'
    // if (city != null &&
    //   city != undefined &&
    //   city != '') {
    //   this.value = `${city}, ` + this.value
    //   if (district != null &&
    //     district != undefined &&
    //     district != '') {
    //     this.value = `${district}, ` + this.value
        
    // if (ward != null &&
    //   ward != undefined &&
    //   ward != '') {
    //   this.value = `${ward}, ` + this.value
    // }
    //   }
    // }
  
    // console.log(this.value)
    let result = 'Việt Nam';
  if (city) {
    result = `${city}, ${result}`;
  }
  if (district) {
    result = `${district}, ${result}`;
  }
  if (ward) {
    result = `${ward}, ${result}`;
  }
  return result;
  }

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
            {
              title: '012-Thôn TK3', key: '0100', expanded: true, children: [
                { title: '013-Tổ vệ sinh', key: '01000', isLeaf: true },

              ]
            },

          ]
        },
      ]
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  isVisible = false;
  autocomplete: any;
  constructor(private http: HttpClient) { }

  getAddress(latitude: number, longitude: number): any {
    const url = `${this.geocodeUrl}?latlng=${latitude},${longitude}&key=AIzaSyBI0DTl9QdF8NjI1g7P3TDvG0wwbjBPfwU`;

    this.http.get(url).subscribe((res: any) => {
      console.log(res);
      this.address = res.results[0].formatted_address;
      console.log(this.address);
    }
    );


  }
  async ngOnInit(): Promise<void> {
    this.citis = document.getElementById("city") as HTMLSelectElement;
    this.districts = document.getElementById("district") as HTMLSelectElement;
    this.wards = document.getElementById("ward") as HTMLSelectElement;
    // lay api ra
    await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
      .then(result => {

        this.renderCity(result.data);

      });
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      {
        types: ['geocode']
      });



    // Đăng ký sự kiện khi người dùng chọn một địa điểm từ danh sách gợi ý
    this.autocomplete.addListener('place_changed', this.onPlaceChanged);

    this.autocomplete.addListener("place_changed", () => {


      const place = this.autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      // If the place has a geometry, then present it on a map.
      console.log(place.geometry.location.lat());
      // console.log(place);
    });



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

  onPlaceChanged() {
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      {
        types: ['geocode']
      });
    console.log(this.autocomplete);
    // const place = this.autocomplete.getPlace();
    // if (place.geometry) {
    //   const lat = place.geometry.location.lat();
    //   const lng = place.geometry.location.lng();
    //   console.log(`Kinh độ: ${lng}, Vĩ độ: ${lat}`);
    // }
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


  defaultFileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error'
    }
  ];

  fileList1 = [...this.defaultFileList];
  fileList2 = [...this.defaultFileList];

  center: any = { lat: 21.027763, lng: 105.834160 };
  zoom = 13;
  selectedProvince!: string;

  onSelectChange() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        address: `${this.citis}, Vietnam`
      },
      (results: any, status: any) => {
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
