import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './Components/Primary/home/home.component';
import { AboutComponent } from './Components/Primary/about/about.component';
import { SkillsComponent } from './Components/Primary/skills/skills.component';
import { MyWorkComponent } from './Components/Primary/my-work/my-work.component';
import { ContactComponent } from './Components/Primary/contact/contact.component';
import { TagComponent } from './Components/Secondary/tag/tag.component';
import { FieldComponent } from './Components/Secondary/field/field.component';
import { ProjectComponent } from './Components/Secondary/project/project.component';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AnimateDirective } from './Directives/animate.directive';
import { WorkComponent } from './Components/Secondary/work/work.component';

const routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'myWork', component: MyWorkComponent},
  { path: 'contact', component: ContactComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    MyWorkComponent,
    ContactComponent,
    TagComponent,
    FieldComponent,
    ProjectComponent,
    AnimateDirective,
    WorkComponent
  ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
    ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
