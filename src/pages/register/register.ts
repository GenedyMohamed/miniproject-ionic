import { Component } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {Service} from '../../app/service';
import { UserService } from '../../app/services/userService'
import { Home } from '../home/home';
import * as config from '../../app/config.json';

import 'rxjs/add/operator/map';
@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class Register {
  user = { email: "", password: "", fname: "", lname: "", passwordConfirm: "" };
  params: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private alertCtrl: AlertController, public service: Service, private userService: UserService) {
    this.params = navParams;
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
        handler: data => {
          this.navCtrl.push(Home);
          console.log("clicked");
        }
      }
      ]
    });
    alert.present();
  }
  register() {
    let data = {
      'first_name': this.user.fname,
      'last_name': this.user.lname,
      'password_confirmation': this.user.passwordConfirm,
      'email': this.user.email,
      'password': this.user.password
    }
    this.userService.register(data)
      .then((data) => {
        this.success(data['message'])
      })
      .catch((err) => {
        this.presentAlert();
      });
  }

}
