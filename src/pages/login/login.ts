import { Component } from '@angular/core';
import {NavController, NavParams,AlertController} from 'ionic-angular';
import {Http,Headers} from '@angular/http';
import {Service} from '../../app/service';
import { UserService } from '../../app/services/userService'
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
  constructor(public navCtrl: NavController,public navParams: NavParams,private http:Http,private alertCtrl: AlertController,public service: Service, public userService: UserService) {
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
   let data = {
     'email': this.user.email,
     'password': this.user.password
   }
   this.userService.login(data)
   .then((data)=>{
     if(data['token']){
        this.service.setToken(data['token']);
        this.navCtrl.pop();
     }
   })
   .catch((err)=>{
     this.user.password="";
     this.presentAlert();
   })

  }
  register(){
    this.navCtrl.push(Register);
  }

}
