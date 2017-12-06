import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Service} from '../../app/service';
import { QuestionsService } from '../../app/services/questionsService'
import {Profile} from '../profile/profile';
import {Http, Headers} from '@angular/http';
import { Semester } from '../semester/semester';
import * as config from '../../app/config.json';

@Component({
  selector: 'majors',
  templateUrl: 'majors.html'
})
export class Majors {
  majors: Object[] = [];
  constructor(public navCtrl: NavController, public service: Service, public http: Http, private navParams: NavParams, private questionsService: QuestionsService) {
    this.getMajors();
  }
  getMajors() {

    this.questionsService.getMajors()
      .then((data) => {
        this.majors = data['majors'];
        this.service.setSemesters(data['semesters']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  majorSelected(major) {
    console.log(major);
    this.navCtrl.push(Semester, {
      major: major
    })
  }

}
