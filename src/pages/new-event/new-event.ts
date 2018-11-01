import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { EventsService } from '../../app/services/eventsService';
import {Service} from '../../app/service';

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

  newEvent = { title: "", description: "", place: "", date: "", time: "" };
  params: any;
  course: any = {};

  constructor(public navCtrl: NavController, public service: Service, public viewCtrl : ViewController, public eventsService: EventsService ,public navParams: NavParams) {
    this.params = navParams;
    this.course = this.params.get('course');
    console.log(this.course);
  }

  closeModal(){
	  this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEventPage');
  }

  createEvent() {
    this.eventsService.createEvent(this.service.getToken(),this.course.id, this.newEvent)
      .then((data) => {
        console.log(data);
        this.viewCtrl.dismiss();
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
