import { Component } from '@angular/core';
import * as Leaflet from 'leaflet'; 
import "leaflet-control-geocoder";
Leaflet.Icon.Default.imagePath = 'assets/';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 10,
    center: { lat: 10.762622, lng: 106.660172 }
  }

  initMarkers() {
    const initialMarkers = [
      {
        position: { lat: 10.762622, lng: 106.660172 },
        draggable: true
      },
      
    ];
    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      marker.addTo(this.map).bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
      this.map.panTo(data.position);
      this.markers.push(marker)
    }
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  async markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);

    console.log($event.latlng.lat, $event.latlng.lng);
    const address = await this.getAddress($event.latlng.lat, $event.latlng.lng);
    console.log(address)
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  } 

  getAddress(lat: number, lng: number) {
    const geocoder = (Leaflet.Control as any).Geocoder.nominatim();
    return new Promise((resolve, reject) => {
        geocoder.reverse(
            { lat, lng },
            this.map.getZoom(),
            (results: any) => results.length ? resolve(results[0].name) : reject(null)
        );
    })
  }

  

}
