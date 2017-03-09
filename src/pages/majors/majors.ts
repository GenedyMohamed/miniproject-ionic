import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import {Service} from '../../app/service';
import {Profile} from '../profile/profile';
import {Http,Headers} from '@angular/http';
import { Semester } from '../semester/semester';

@Component({
  selector: 'majors',
  templateUrl: 'majors.html'
})
export class Majors {
  majors: Object[] =[];
  constructor(public navCtrl: NavController, public service: Service,public http: Http,private navParams: NavParams ) {
     this.getMajors();
  }
  getMajors(){
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin','http://localhost:8100');
    var url = 'http://localhost:8000/api/v1/browse/';

    this.http.get(url).map(res => res.json()).subscribe(data => {
      this.majors=data.majors;

      this.service.setSemesters(data.semesters);
       //console.log(this.answres);
    },
    err => {
           console.log(err);
       });
  }
  majorSelected(major){
    console.log(major);
    this.navCtrl.push(Semester,{
      major: major
    })
  }

}
