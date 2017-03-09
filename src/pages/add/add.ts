import { Component } from '@angular/core';

import { NavController, NavParams,AlertController,Events } from 'ionic-angular';
import {Service} from '../../app/service';
import {Http,Headers} from '@angular/http';

@Component({
  selector: 'add',
  templateUrl: 'add.html'
})
export class Add {
fname: string = "";
lname: string ="";
pp: string ="";
question: any = {};
course: any = {};
  constructor(public navCtrl: NavController, public service: Service,private http: Http, public navParams: NavParams,public alertCtrl: AlertController,public events: Events  ) {
    this.course = this.navParams.get("course");
    this.initData();
  }
  initData(){
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin','http://localhost:8100');
    var url = 'http://localhost:8000/api/v1/user/'+this.service.getId();

    this.http.get(url).map(res => res.json()).subscribe(data => {

      this.fname=data.results.first_name;
      this.lname=data.results.last_name;
      if(data.results.profile_picture!=""){
      this.pp= data.results.profile_picture
    }else{
      this.pp="assets/img/default.png";
    }
    },
    err => {
           console.log(err);
       });
  }

  ask(){
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin','http://localhost:8100');
    headers1.append('x-access-token',this.service.getToken());
    console.log(this.service.getToken());
    var url = 'http://localhost:8000/api/v1/browse/'+this.course.id;
    let data = {question: this.question.body};
    this.http.post(url,data,{headers:headers1}).map(res => res.json()).subscribe(data => {
      if(data.error == false){
        this.events.publish('reloadPage1',this.course);
        this.navCtrl.pop();
        } else{
        this.showAlert("somethisng went wrong, please try again ");
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
