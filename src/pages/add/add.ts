import { Component } from '@angular/core';

import { NavController, NavParams, AlertController, Events } from 'ionic-angular';
import {Service} from '../../app/service';
import { UserService } from '../../app/services/userService';
import { QuestionsService } from '../../app/services/questionsService'
import {Http, Headers} from '@angular/http';
import * as config from '../../app/config.json';

@Component({
  selector: 'add',
  templateUrl: 'add.html'
})
export class Add {
  fname: string = "";
  lname: string = "";
  pp: string = "";
  question: any = {};
  course: any = {};
  constructor(public navCtrl: NavController, public service: Service, private http: Http, public navParams: NavParams, public alertCtrl: AlertController, public events: Events, private userService: UserService, private questionService: QuestionsService) {
    this.course = this.navParams.get("course");
    this.initData();
  }
  initData() {
    this.userService.getUserInfo(this.service.getId())
      .then((data) => {
        this.fname = data['results'].first_name;
        this.lname = data['results'].last_name;
        if (data['results'].profile_picture != "") {
          this.pp = data['results'].profile_picture
        } else {
          this.pp = "assets/img/default.png";
        }
      })
      .catch((err) => {
        console.log(err);
      })

  }

  ask() {
    this.questionService.askQuestion(this.service.getToken(), this.course.id, this.question.body)
      .then((data) => {
        if (data['error'] == false) {
          this.events.publish('reloadPage1', this.course);
          this.navCtrl.pop();
        } else {
          this.showAlert("somethisng went wrong, please try again ");
        }
      })
      .catch((err) => {
        console.log(err);

      });
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
