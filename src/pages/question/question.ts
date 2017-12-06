import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {Service} from '../../app/service';
import {QuestionsService} from '../../app/services/questionsService'
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public service: Service, public popoverCtrl: PopoverController, public questionsService: QuestionsService) {
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
    this.questionsService.getAnswers(question.id)
    .then(data=>{
      this.answers = data;
    })
    .catch(err=>{
      console.log(err);
    })
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
