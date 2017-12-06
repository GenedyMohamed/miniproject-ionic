import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Subscribe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html'
})
export class SubscribePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribePage');
  }

}
