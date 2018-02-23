import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

  data: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.data = {
  		rating : 1,
    	max: 20
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }

}
