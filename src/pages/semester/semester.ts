import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Service} from '../../app/service';
import {Profile} from '../profile/profile';
import {Http, Headers} from '@angular/http';
import {Courses} from '../courses/courses';
@Component({
  selector: 'semester',
  templateUrl: 'semester.html'
})
export class Semester {
  major: Object = {};
  semesters: any[] = [];
  constructor(public navCtrl: NavController, public service: Service, public http: Http, private navParams: NavParams) {
    this.major = this.navParams.get('major');
    this.semesters = this.service.getSemesters();
    console.log(this.major);
  }

  semesterSelected(semester) {
    this.navCtrl.push(Courses, {
      semester: semester,
      major: this.major
    })
    console.log(semester);
  }

}
