import { Component } from '@angular/core';
import {NavController, NavParams,AlertController} from 'ionic-angular';
import {Http,Headers} from '@angular/http';
import {Service} from '../../app/service';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';
@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class Register {
  user = {email: "",password: "",fname:"",lname:"",passwordConfirm:""};
  params: any;
  constructor(public navCtrl: NavController,public navParams: NavParams,private http:Http,private alertCtrl: AlertController,public service: Service) {
    this.params= navParams;
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Register Failed',
      subTitle: 'Your credentials is wrong, Try again',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  success(message) {
    let alert = this.alertCtrl.create({
      title: 'Register Almost done',
      subTitle: message,
      buttons: [{
        text: 'back to home screen',
        handler: data =>{
          this.navCtrl.push(HomePage);
         console.log("clicked");
       }
      }
       ]
    });
    alert.present();
  }

 login(){
   let headers1 = new Headers();
   headers1.append('Access-Control-Allow-Origin','http://localhost:8100');
   var url = 'http://localhost:8000/api/v1/login';
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
          this.presentAlert();
      });
  }
  register(){
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin','http://localhost:8100');
    var url = 'http://localhost:8000/api/v1/register';
    let data = {
      'first_name': this.user.fname,
      'last_name': this.user.lname,
      'password_confirmation':this.user.passwordConfirm,
      'email': this.user.email,
      'password': this.user.password
    }
    console.log(data);
   let body = JSON.stringify(data);
    this.http.post(url,data).map(res => res.json()).subscribe(data => {
      this.success(data.message)
       console.log(data.message);
    },
    err => {
      //console.log(err);
           this.presentAlert();
      });
  }

}
