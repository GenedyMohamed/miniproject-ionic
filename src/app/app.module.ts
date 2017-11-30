// Native modules goes here
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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
import { StatusBar } from '@ionic-native/status-bar';
import { QuestionPage } from '../pages/question/question'
import { PostAnswerPage } from '../pages/post-answer/post-answer'

// Services goes here
import { Service } from './service';
import { QuestionsService } from './services/questionsService';

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
    PostAnswerPage
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
    SubscribePage,
    QuestionPage,
    PostAnswerPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Service,QuestionsService,JwtHelper,StatusBar]
})
export class AppModule {}
