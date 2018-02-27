import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
})
export class NewEventPage {

  newEvent = { title: "", description: "", location: "", date: "", start: "", end: "" };
  params: any;

  constructor(public navCtrl: NavController, public viewCtrl : ViewController ,public navParams: NavParams) {
    this.params = navParams;
  }

  closeModal(){
	  this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEventPage');
  }

  createEvent() {

  }

}
