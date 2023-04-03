import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent implements OnInit {
  map: any;
  geocoder: any;
  @ViewChild('map') mapElement: any;
  // lat = 43.879078;
  // lng = -103.4615581;
   lat = 28.6139;
   lng = 77.2090;
   
  markers = [
    { lat: 17.2878, lng: 74.1737 },
    { lat: 17.2897, lng: 74.1761 },
    { lat: 17.2926, lng: 74.1768 },
    { lat: 17.2844, lng: 74.1809 },
    { lat: 17.2834, lng: 74.1866 },
    { lat: 17.2937, lng: 74.1811 },
    { lat: 17.2939, lng: 74.1753  },
    { lat: 17.2869, lng: 74.1910 },
    { lat: 17.2902, lng: 74.1688},
    { lat: 17.2827, lng:  74.1901},
    { lat: 17.2986, lng: 74.1827},
    {lat: 17.2948, lng:74.1875},
    {lat:17.2832,lng:74.1942},
    {lat:17.2861,lng:74.1958},
    {lat:17.2894,lng:74.1944},
    {lat:17.2973, lng:74.1668},
    {lat:17.3142,lng:74.1826}
    
  ];

  constructor() { }

  ngOnInit(): void {
    this.geocoder = new google.maps.Geocoder();
  }

  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.markers.forEach(location => {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng),
        map: this.map
      });
      this.geocoder.geocode({'location': marker.getPosition()}, (results: any, status: any) => {
        if (status === 'OK') {
          if (results[0]) {
            var infoWindow = new google.maps.InfoWindow({
              content: results[0].formatted_address
            });
            marker.addListener('click', () => {
              infoWindow.open(this.map, marker);
            });
          } else {
            console.log('No results found');
          }
        } else {
          console.log('Geocoder failed due to: ' + status);
        }
      });
    });
  }
  loadGoogleMaps(callback: () => void) {
    if (!window['google']) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAdTyoEnepIe9goKZnRFHlzCBabD2bAjQY';
      document.body.appendChild(script);
      script.onload = callback;
    } else {
      callback();
    }
  }
  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 28.6139, lng: 77.2090 },
      zoom: 8,
    });
  }
}
