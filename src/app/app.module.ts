// Native modules goes here
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http'
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Ionic native plugins goes here
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages goes here
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
import { Questions } from '../pages/questions/questions';
import { Add } from '../pages/add/add';
import { SubscribePage} from '../pages/subscribe/subscribe'
import { QuestionPage } from '../pages/question/question'
import { PostAnswerPage } from '../pages/post-answer/post-answer'
import { ComponentDetailsPage } from '../pages/component-details/component-details'

// Services goes here
import { Service } from './service';
import { QuestionsService } from './services/questionsService';
import { UserService } from './services/userService'

// Any helper libraries
import { JwtHelper } from 'angular2-jwt';

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
    SubscribePage,
    QuestionPage,
    PostAnswerPage,
    ComponentDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
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
    SubscribePage,
    QuestionPage,
    PostAnswerPage,
    ComponentDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Service,QuestionsService,UserService,JwtHelper, StatusBar,
  SplashScreen,HttpModule]
})
export class AppModule {}
