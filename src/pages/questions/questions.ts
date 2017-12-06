import { Component } from '@angular/core';

import { NavController, NavParams, AlertController, Events } from 'ionic-angular';
import {Service} from '../../app/service';
import {QuestionsService} from '../../app/services/questionsService'
import {Profile} from '../profile/profile';
import {Http, Headers} from '@angular/http';
import {Add} from '../add/add';
import { QuestionPage } from '../question/question'
import * as config from '../../app/config.json';

@Component({
  selector: 'questions',
  templateUrl: 'questions.html'
})
export class Questions {
  course: any = {};
  questions: any[] = [];
  next: string;
  data: any;
  pp: string = "assets/img/default.png";
  question: any;
  isAuth: boolean;
  noMore: boolean;
  constructor(public navCtrl: NavController, public service: Service, public http: Http, private navParams: NavParams, public alertCtrl: AlertController, public events: Events, public questionsService: QuestionsService) {
    this.course = navParams.get('course');
    console.log(this.course);
    this.isAuth = service.isAuthenticated();
    console.log(this.isAuth);
    this.getQuestions();
  }
  ionViewDidEnter() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionsService.getQuestions(this.course.id)
      .then((data) => {
        this.questions = data.questions.data;
        this.next = data.questions.next_page_url
        if (this.next == null) {
          this.noMore = true;
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
  more() {
    this.questionsService.more(this.next)
    .then((data)=>{
      this.next = data['questions'].next_page_url;
      if (this.next == null) {
        this.noMore = true;
      }
      this.questions = this.questions.concat(data['questions'].data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  add() {
    this.navCtrl.push(Add, {
      course: this.course
    });
  }
  up(question) {
    this.questionsService.up(question.id, this.service.getToken())
    .then((data)=>{
      if (!data['error']) {
        question.votes++;
      } else {
        this.showAlert(data['state']);
      }
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  down(question) {
    this.questionsService.up(question.id, this.service.getToken())
    .then((data)=>{
      if (!data['error']) {
        question.votes--;
      } else {
        this.showAlert(data['state']);
      }
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  goToQuestion(question) {
    this.navCtrl.push(QuestionPage, {
      question: question
    })
    console.log("IN QUESTIONS PAGE" + question);
  }

  showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Oooops',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
