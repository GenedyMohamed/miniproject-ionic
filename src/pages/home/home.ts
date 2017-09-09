import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Login } from '../login/login';
import {Service} from '../../app/service';
import {Profile} from '../profile/profile';
import {Http, Headers} from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
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
  constructor(public navCtrl: NavController, public service: Service, private http: Http, private alertCtrl: AlertController,public statusBar: StatusBar) {
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
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
    headers1.append('x-access-token', this.service.getToken());
    var url = config.server+'api/v1/home';

    this.http.get(url, { headers: headers1 }).map(res => res.json()).subscribe(data => {
      this.next = data.next_page_url
      if (this.next == null) {
        this.noMore = true;
      }
      this.questions = data.data;
      console.log(data);
    },
      err => {
        console.log(err);
      });
  }
  up(question) {
    let headers1 = new Headers();

    headers1.append('x-access-token', this.service.getToken());
    var url = config.server+"api/v1/vote/question/" + question.id + "/0";

    this.http.get(url, { headers: headers1 }).map(res => res.json()).subscribe(data => {

      if (!data.error) {
        question.votes++;
      } else {
        this.showAlert(data.state);
      }
    },
      err => {
        console.log(err);
      });
  }

  down(question) {
    let headers1 = new Headers();

    headers1.append('x-access-token', this.service.getToken());
    var url = config.server+"api/v1/vote/question/" + question.id + "/1";

    this.http.get(url, { headers: headers1 }).map(res => res.json()).subscribe(data => {
      if (!data.error) {
        question.votes--;
      } else {
        this.showAlert(data.state);
      }
    },
      err => {
        console.log(err);
      });
  }

  goToQuestion() {
    this.showAlert("hiiiiii");
    console.log("Question");
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

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
  more(){
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
      headers1.append('x-access-token', this.service.getToken());
    var url = config.server + this.next;
    console.log(headers1);
    console.log(url)
    this.http.get(url,{headers: headers1}).map(res => res.json()).subscribe(data => {
      console.log(data);
      this.next = data.next_page_url;
      if (this.next == null) {
        this.noMore = true;
      }
      this.questions = this.questions.concat(data.data);
      console.log(this.questions);
    },
      err => {
        console.log(err);
      });
  }



}
