import {AfterContentInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements AfterContentInit{
  @Input() name;
  @Input() logo;
  @Input() color;

  @Input() angular;
  @Input() firebase;
  @Input() typescript;
  @Input() css;
  @Input() sass;
  @Input() reactNative;
  @Input() redux;

  @Input() java;
  @Input() javaFX;
  @Input() SQL;

  @Input() liveLink;
  @Input() role;
  @Input() period;
  @Input() description = '';

  constructor(private element: ElementRef) {
  }
  ngAfterContentInit(): void {
    this.element.nativeElement.querySelector('#logo').style.backgroundImage = this.logo;
    this.element.nativeElement.querySelector('#logo').style.backgroundColor = this.color;
  }

  openInNewTab(url) {
    window.open(url, '_blank').focus();
  }
}
