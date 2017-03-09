import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Login } from '../login/login';
import {Service} from '../../app/service';
import {Profile} from '../profile/profile';
import {Http,Headers} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isAuth: boolean= false;
  questions: any[] = [];
  constructor(public navCtrl: NavController, public service: Service,private http: Http,private alertCtrl: AlertController ) {
    this.reload();
  }
  reload(){
    this.isAuth = this.service.isAuthenticated();
    if(this.isAuth){
      this.getContent();
    }
  }
  goToLogin(){
    if(this.service.isAuthenticated()){
      console.log(this.service.getToken());
      this.navCtrl.push(Profile);
    }else{
      this.navCtrl.push(Login);
    }
    //this.navCtrl.pop();
    //console.log('test');
  }
  ionViewDidEnter(){
    this.reload();
  }
  getContent(){
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin','http://localhost:8100');
     headers1.append('x-access-token',this.service.getToken());
    var url = 'http://localhost:8000/api/v1/home';

    this.http.get(url,{headers: headers1}).map(res => res.json()).subscribe(data => {
      this.questions= data.data;
      console.log(data);
    },
    err => {
           console.log(err);
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
