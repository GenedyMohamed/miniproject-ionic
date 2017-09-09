import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {Service} from '../../app/service';
import { PostAnswerPage } from '../post-answer/post-answer';
import * as config from '../../app/config.json';
/*
  Generated class for the Question page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  question: any;
  answers: any;
  pp: string = "assets/img/default.png";
  isAuth: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public service: Service, public popoverCtrl: PopoverController) {
    this.question = navParams.get('question');
    this.isAuth = service.isAuthenticated();
    this.getAnswers(this.question);

    console.log(this.question);
  }

  ionViewDidLoad() {
    this.getAnswers(this.question);
    console.log('ionViewDidLoad QuestionPage');
  }
  getAnswers(question) {
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');

    var url = config.server + 'api/v1/answers/' + this.question.id + '/latest';

    this.http.get(url).map(res => res.json()).subscribe(data => {
      this.answers = data.data;
      console.log(this.answers);
    },
      err => {
        console.log(err);
      });
  }
  up(answer) {
    console.log("UP");
  }
  down(answer) {
    console.log("DOWN");
  }
  post(){
    console.log("IN POST")
    let popover = this.popoverCtrl.create(PostAnswerPage,{
      question: this.question
    });
      popover.present();
  }

}
