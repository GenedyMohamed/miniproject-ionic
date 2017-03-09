import { Component } from '@angular/core';

import { NavController,NavParams, AlertController,Events } from 'ionic-angular';
import {Service} from '../../app/service';
import {Profile} from '../profile/profile';
import {Http,Headers} from '@angular/http';
import {Add} from '../add/add';

@Component({
  selector: 'questions',
  templateUrl: 'questions.html'
})
export class Questions {
  course: any={};
  questions: any[]=[];
  next: string="";
  data: any={};
  pp: string ="assets/img/default.png";
  question: any ={};
  isAuth: boolean ;
  constructor(public navCtrl: NavController, public service: Service,public http: Http,private navParams: NavParams,public alertCtrl: AlertController,public events: Events ) {
    this.course=navParams.get('course');
    console.log(this.course);
    this.isAuth = service.isAuthenticated();
    console.log(this.isAuth);
    this.getQuestions();
  }
  ionViewDidEnter(){
    this.getQuestions();
  }

  getQuestions(){
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin','http://localhost:8100');

    var url = 'http://localhost:8000/api/v1/browse/'+this.course.id;

    this.http.get(url).map(res => res.json()).subscribe(data => {
      this.questions= data.questions.data;
      this.next= data.next_page_url
      console.log(this.questions);
    },
    err => {
           console.log(err);
       });
  }
  more(){
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin','http://localhost:8100');

    var url = "http://localhost:8000/api/v1/browse/"+this.course.id+"?page=1";

    this.http.get(url).map(res => res.json()).subscribe(data => {
      //console.log(data);
      this.questions= this.questions.concat(data.questions.data);
      console.log(this.questions);
    },
    err => {
           console.log(err);
    });
  }

  add(){
    this.navCtrl.push(Add,{
      course: this.course
    });
  }
  up(question){
    let headers1 = new Headers();

    headers1.append('x-access-token',this.service.getToken());
    var url = "http://localhost:8000/api/v1/vote/question/"+question.id+"/0";

    this.http.get(url,{headers: headers1}).map(res => res.json()).subscribe(data => {
      if(!data.error){
        question.votes++;
      }else{
        this.showAlert(data.state);
      }
    },
    err => {
           console.log(err);
    });
  }
  down(question){
    let headers1 = new Headers();

    headers1.append('x-access-token',this.service.getToken());
    var url = "http://localhost:8000/api/v1/vote/question/"+question.id+"/1";

    this.http.get(url,{headers: headers1}).map(res => res.json()).subscribe(data => {
      if(!data.error){
        question.votes--;
      }else{
        this.showAlert(data.state);
      }
    },
    err => {
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
