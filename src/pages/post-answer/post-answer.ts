import { Component } from '@angular/core';
import { NavController, NavParams, Events, AlertController } from 'ionic-angular';
import {Service} from '../../app/service';
import { QuestionsService } from '../../app/services/questionsService'

import {Http, Headers} from '@angular/http';
import * as config from '../../app/config.json';
/*
  Generated class for the PostAnswer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-answer',
  templateUrl: 'post-answer.html'
})
export class PostAnswerPage {
  answer: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public service: Service, public events: Events, public alert: AlertController, private questionsService: QuestionsService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostAnswerPage');
  }
  post() {
    const question = this.navParams.get('question');
    this.questionsService.postAnswer(this.service.getToken(), question.id, this.answer)
      .then((data) => {
        console.log(data['error']);
        if (data['error'] == false) {
          this.navCtrl.pop();
        } else {
          this.showAlert("Make sure that the answer is at least 5 characters");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  showAlert(msg) {
    let alert = this.alert.create({
      title: 'Oooops',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
}
