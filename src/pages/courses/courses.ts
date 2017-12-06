import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Service} from '../../app/service';
import { QuestionsService } from '../../app/services/questionsService'
import {Profile} from '../profile/profile';
import {Http, Headers} from '@angular/http';
import { Questions } from '../questions/questions';
import * as config from '../../app/config.json';

@Component({
  selector: 'courses',
  templateUrl: 'courses.html'
})
export class Courses {
  courses: Object[] = [];
  major: any = {};
  semester: any = 0;
  constructor(public navCtrl: NavController, public service: Service, public http: Http, private navParams: NavParams, private questionsService: QuestionsService) {
    this.major = this.navParams.get('major');
    this.semester = this.navParams.get('semester');
    this.getCourses();
  }

  getCourses() {
    this.questionsService.getCourses(this.major.id, this.semester)
      .then((data) => {
        this.courses = data['courses'];
      })
      .catch((err) => {
        console.log(err);
      });
  }

  courseSelected(course) {
    this.navCtrl.push(Questions, {
      course: course
    });
    console.log(course);
  }

}
