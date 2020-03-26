import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {} from 'googlemaps';
import 'src/assets/smtp.js';
declare let Email: any;
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  @ViewChild('map', {static: false}) mapElement: any;
  map: google.maps.Map;

  form = {
    name: {
      value: '',
      animate: false,
      state: ''
    },
    email: {
      value: '',
      animate: false,
      state: ''
    },
    subject: {
      value: '',
      animate: false,
      state: ''
    },
    message: {
      value: '',
      animate: false
    },
  };

  sent = false;
  disabled = false;

  constructor() { }

  submit() {
    this.disabled = true;
    if (!this.form.name.value) {
      this.form.name.animate = true;
      setTimeout(() => {
        this.form.name.animate = false;
        this.disabled = false;
      }, 300);
    }
    if (!this.form.email.value) {
      this.form.email.animate = true;
      setTimeout(() => {
        this.form.email.animate = false;
        this.disabled = false;
      }, 300);
    }
    if (!this.form.subject.value) {
      this.form.subject.animate = true;
      setTimeout(() => {
        this.form.subject.animate = false;
        this.disabled = false;
      }, 300);
    }
    if (!this.form.message.value) {
      this.form.message.animate = true;
      setTimeout(() => {
        this.form.message.animate = false;
        this.disabled = false;
      }, 300);
    } else if (this.form.name.value
      && (this.form.email.value && this.isEmail(this.form.email.value))
      && this.form.subject.value
      && this.form.message.value) {
      this.sendEmail();
      this.resetField();
    } else {
      this.disabled = false;
    }
  }

  resetField() {
    this.form = {
      name: {
        value: '',
        animate: false,
        state: ''
      },
      email: {
        value: '',
        animate: false,
        state: ''
      },
      subject: {
        value: '',
        animate: false,
        state: ''
      },
      message: {
        value: '',
        animate: false
      },
    };
  }

  isEmail(emailToTest): boolean {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailToTest);
  }

  sendEmail() {
    Email.send({
      SecureToken: environment.mailJS,
      From : 'bhiveprojectmail@gmail.com',
      To : 'bhiveprojectmail@gmail.com',
      Subject : 'Contact from Portfolio',
      Body : 'Name: ' + this.form.name.value +
        '<br>Email: ' + this.form.email.value +
        '<br>Message: ' + this.form.message.value
    }).then(
      () => {
        this.sent = true;
        this.disabled = false;
        setTimeout(() => {
          this.sent = false;
        }, 2000);
      }
    );
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const styledMapType = new google.maps.StyledMapType(
      [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#181818'
            }
          ]
        },
        {
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#212121'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          featureType: 'administrative.country',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#A50000',
            }
          ]
        },
        {
          featureType: 'administrative.land_parcel',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#bdbdbd'
            }
          ]
        },
        {
          featureType: 'administrative.neighborhood',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi.business',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#181818'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#1b1b1b'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#2c2c2c'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#8a8a8a'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#373737'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#3c3c3c'
            }
          ]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [
            {
              color: '#4e4e4e'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161'
            }
          ]
        },
        {
          featureType: 'transit',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#1D1D1D'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels.text',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#3d3d3d'
            }
          ]
        }
      ],
      {name: 'Map'});

    const latLng = {lat: 59.402611, lng: 17.869814};
    const mapProperties = {
      center: new google.maps.LatLng(latLng),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControlOptions: {
        mapTypeIds: ['styled_map']
      },
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map');

    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      icon: {
        anchor: new google.maps.Point(16, 16),
        url: 'https://img.icons8.com/material-outlined/32/a50000/marker.png'
      }
    });

    const contentString = '<div id="content" >' +
      '<div id="siteNotice"></div>' +
      '<div id="bodyContent" style="font-family: var(--secondaryFont); font-size: 1.2rem">' +
      '<p><b>Georgios Kotsiopoulos</b> <span style="font-size: .9rem">c/o Konstantina Kotsiopoulou</span></p>' +
      '<p><b>Attackvägen 6 Järfälla 17563</b></p>' +
      '</div>' +
      '</div>';

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener('click', () => {
      infowindow.open(this.map, marker);
    });
  }
}
