import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Login } from '../login/login';
import {Service} from '../../app/service';
import { UserService } from '../../app/services/userService'
import { QuestionsService } from '../../app/services/questionsService'
import {Profile} from '../profile/profile';
import {Http, Headers} from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { QuestionPage } from '../question/question'
import * as config from '../../app/config.json';


@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home {
  isAuth: boolean = false;
  questions: any[] = [];
  next: string;
  noMore: boolean;
  constructor(public navCtrl: NavController, public service: Service, public questionsService: QuestionsService, public userService: UserService, private http: Http, private alertCtrl: AlertController, public statusBar: StatusBar) {
    this.statusBar.backgroundColorByHexString('#FF7043');
    this.reload();
  }
  reload() {
    this.isAuth = this.service.isAuthenticated();
    if (this.isAuth) {
      this.getContent();
    }
  }
  goToLogin() {
    if (this.service.isAuthenticated()) {
      console.log(this.service.getToken());
      this.navCtrl.push(Profile);
    } else {
      this.navCtrl.push(Login);
    }
    //this.navCtrl.pop();
    //console.log('test');
  }
  ionViewDidEnter() {
    this.reload();
  }
  getContent() {
    this.userService.getHomeConetent(this.service.getToken())
      .then((data) => {
        this.next = data['next_page_url']
        console.log(this.next)
        if (this.next == null) {
          this.noMore = true;
        }
        this.questions = data['data'];
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  up(question) {
    this.questionsService.up(question.id, this.service.getToken())
      .then((data) => {
        if (!data['error']) {
          question.votes++;
        } else {
          this.showAlert(data['state']);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  down(question) {
    this.questionsService.down(question.id, this.service.getToken())
      .then((data) => {
        if (!data['error']) {
          question.votes--;
        } else {
          this.showAlert(data['state']);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  goToQuestion(question) {
    this.navCtrl.push(QuestionPage, {
      question: question
    })
  }

  doRefresh(refresher) {
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Oooops',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
  more() {
    this.userService.moreHomeConetent(this.next, this.service.getToken())
      .then((data) => {
        this.next = data['next_page_url'];
        if (this.next == null) {
          this.noMore = true;
        }
        this.questions = this.questions.concat(data['data']);

      })
      .catch((err) => {
        console.log(err);
      });

  }



}
