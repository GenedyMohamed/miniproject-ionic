import { Component } from '@angular/core';
import { NavController, NavParams, Events, AlertController } from 'ionic-angular';
import {Service} from '../../app/service';
import {Http, Headers} from '@angular/http';
import * as config from '../../app/config.json';
/*
  Generated class for the PostAnswer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-answer',
  templateUrl: 'post-answer.html'
})
export class PostAnswerPage {
answer: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public service: Service, public events: Events, public alert: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostAnswerPage');
  }
   post(){
     console.log(this.answer);
     let headers1 = new Headers();
     headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
     headers1.append('x-access-token', this.service.getToken());
     console.log(this.service.getToken());
     var question = this.navParams.get('question');
     var url = config.server+'api/v1/answers/' + question.id;
     console.log(url);
     console.log(headers1)
     let data = { answer: this.answer };
     this.http.post(url, data, { headers: headers1 }).map(res => res.json()).subscribe(data => {
       if (data.error == false) {
        // this.events.publish('reloadPage2', data.data);
         this.navCtrl.pop();
       } else {
         this.showAlert("somethisng went wrong, please try again ");
       }
     },
       err => {
         console.log(err);
       });
   }
   showAlert(msg) {
     let alert = this.alert.create({
       title: 'Oooops',
       subTitle: msg,
       buttons: ['OK']
     });
     alert.present();
   }
}
