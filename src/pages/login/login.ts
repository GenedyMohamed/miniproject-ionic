import { Component } from '@angular/core';
import {NavController, NavParams,AlertController} from 'ionic-angular';
import {Http,Headers} from '@angular/http';
import {Service} from '../../app/service';
import { Register } from '../register/register';
import * as config from '../../app/config.json';

import 'rxjs/add/operator/map';
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class Login {
  user = {email: "",password: ""};
  params: any;
  constructor(public navCtrl: NavController,public navParams: NavParams,private http:Http,private alertCtrl: AlertController,public service: Service) {
    this.params= navParams;
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login Failed',
      subTitle: 'Your credentials is wrong',
      buttons: ['Dismiss']
    });
    alert.present();
  }

 login(){
   let headers1 = new Headers();
   headers1.append('Access-Control-Allow-Origin','http://localhost:8100');
   var url = config.server+'api/v1/login';
   let data = {
     'email': this.user.email,
     'password': this.user.password
   }
   console.log(data);
  let body = JSON.stringify(data);
   this.http.post(url,data).map(res => res.json()).subscribe(data => {
      if(data.token){
         this.service.setToken(data.token);
         this.navCtrl.pop();
      }
   },
   err => {
     this.user.password="";
          this.presentAlert();
      });
  }
  register(){
    this.navCtrl.push(Register);
  }

}
