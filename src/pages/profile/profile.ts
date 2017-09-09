import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import {Service} from '../../app/service';
import {Http, Headers} from '@angular/http';
import * as config from '../../app/config.json';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class Profile {
  ProfileQuestionsAnswers: string = "questions";
  questions: Object[] = [];
  answres: Object[] = [];
  fname: string = "";
  lname: string = "";
  email: string = "";
  major: string = "Major Not posted yet";
  pp: string = "";
  constructor(public navCtrl: NavController, public service: Service, private http: Http) {
    this.initData();
  }
  initData() {
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
    var url = config.server+'api/v1/user/' + this.service.getId();

    this.http.get(url).map(res => res.json()).subscribe(data => {
      this.questions = data.results.questions;
      console.log(this.questions);
      this.answres = data.results.answers;
      this.fname = data.results.first_name;
      this.email = data.results.email;
      this.lname = data.results.last_name;
      if (data.results.major != null) {
        this.major = data.results.major;
      }
      if (data.results.profile_picture != "") {
        this.pp = data.results.profile_picture
      } else {
        this.pp = "assets/img/default.png";
      }

      //console.log(this.answres);
    },
      err => {
        console.log(err);
      });
  }
  selectedQuestions() {
    console.log("selectedQuestions");
  }
  selectedAnswers() {
    console.log("selectedAnswers");
  }

}
