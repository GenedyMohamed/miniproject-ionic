import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import {Service} from '../../app/service';
import {Profile} from '../profile/profile';
import {Http,Headers} from '@angular/http';
import { Questions } from '../questions/questions';

@Component({
  selector: 'courses',
  templateUrl: 'courses.html'
})
export class Courses {
  courses: Object[] = [];
  major: any= {};
  semester: any = 0;
  constructor(public navCtrl: NavController, public service: Service,public http: Http,private navParams: NavParams ) {
    this.major= this.navParams.get('major');
    this.semester=this.navParams.get('semester');
    console.log(this.major);
    console.log(this.semester);
    this.getCourses();
  }

  getCourses(){
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin','http://localhost:8100');

    var url = 'http://localhost:8000/api/v1/list_courses/'+this.major.id+'/'+this.semester;

    this.http.get(url).map(res => res.json()).subscribe(data => {
      this.courses=data.courses;


    },
    err => {
           console.log(err);
       });
  }

  courseSelected(course){
    this.navCtrl.push(Questions,{
      course: course
    });
    console.log(course);
  }

}
