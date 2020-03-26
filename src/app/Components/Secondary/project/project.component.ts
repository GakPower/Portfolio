import {AfterContentInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import * as fb from 'firebase/app';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterContentInit {

  @Input() new = false;
  @Input() name;
  @Input() logo;
  @Input() color;

  @Input() angular;
  @Input() firebase;
  @Input() typescript;
  @Input() css;
  @Input() sass;

  @Input() java;
  @Input() javaFX;
  @Input() SQL;

  @Input() liveLink;
  @Input() codeLink;
  @Input() description = '';

  filled = false;
  likes = 0;

  constructor(private element: ElementRef,
              private db: AngularFirestore,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.getCount().then((likes) => this.likes = likes);
    this.filled = this.cookieService.check(this.name);
  }
  ngAfterContentInit(): void {
    this.element.nativeElement.querySelector('#logo').style.backgroundImage = this.logo;
    this.element.nativeElement.querySelector('#logo').style.backgroundColor = this.color;
  }

  openInNewTab(url) {
    window.open(url, '_blank').focus();
  }

  likeIt() {
    if (this.filled) {
      this.likes--;
      this.incrementCounter(-1);

      this.cookieService.delete(this.name);
    } else {
      this.likes++;
      this.incrementCounter(1);

      this.cookieService.set(this.name, '1', new Date(new Date().setMinutes(new Date().getMinutes() + 1)));
    }
    this.filled = !this.filled;
  }

  // createCounter() {
  //   const batch = this.db.firestore.batch();
  //
  //   // Initialize the counter document
  //   batch.set(this.db.firestore.collection('projects').doc('BHive'), { shards: 10 });
  //
  //   // Initialize each shard with count=0
  //   for (let i = 0; i < 10; i++) {
  //     const shardRef = this.db.firestore.collection('projects')
  //       .doc(this.name).collection('likes').doc(i.toString());
  //     batch.set(shardRef, { count: 0 });
  //   }
  //
  //   // Commit the write batch
  //   return batch.commit();
  // }

  incrementCounter(value) {
    const shardId = Math.floor(Math.random() * 10).toString();
    const shardRef = this.db.firestore.collection('projects')
      .doc(this.name)
      .collection('likes')
      .doc(shardId);

    return shardRef.update('count', fb.firestore.FieldValue.increment(value));
  }

  getCount() {
    return this.db.firestore.collection('projects')
      .doc(this.name)
      .collection('likes').get().then(snapshot => {
        let sum = 0;
        snapshot.forEach(doc => {
          sum += doc.data().count;
        });

        return sum;
      });
  }
}
