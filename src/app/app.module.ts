import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { Home } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Profile } from '../pages/profile/profile';
import { Majors } from '../pages/majors/majors';
import { Semester } from '../pages/semester/semester';
import {Courses} from '../pages/courses/courses';
import { Service } from './service';
import { JwtHelper } from 'angular2-jwt';
import { Questions } from '../pages/questions/questions';
import { Add } from '../pages/add/add';
import { SubscribePage} from '../pages/subscribe/subscribe'
import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    Home,
    TabsPage,
    Login,
    Register,
    Profile,
    Majors,
    Semester,
    Courses,
    Questions,
    Add,
    SubscribePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    Home,
    TabsPage,
    Login,
    Register,
    Profile,
    Majors,
    Semester,
    Courses,
    Questions,
    Add,
    SubscribePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Service,JwtHelper,StatusBar]
})
export class AppModule {}
