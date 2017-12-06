import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import {Service} from '../../app/service';
import { UserService } from '../../app/services/userService'
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
  constructor(public navCtrl: NavController, public service: Service, private http: Http, private userService: UserService) {
    this.initData();
  }
  initData() {
    this.userService.getUserInfo(this.service.getId())
      .then((data) => {
        this.questions = data['results'].questions;
        this.answres = data['results'].answers;
        this.fname = data['results'].first_name;
        this.email = data['results'].email;
        this.lname = data['results'].last_name;
        if (data['results'].major != null) {
          this.major = data['results'].major;
        }
        if (data['results'].profile_picture != "") {
          this.pp = data['results'].profile_picture
        } else {
          this.pp = "assets/img/default.png";
        }
      })
      .catch((err) => {
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
