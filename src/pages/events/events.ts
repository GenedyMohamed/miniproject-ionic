import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsService } from '../../app/services/eventsService';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  groups: any = [{
    "date": "1/2/2018",
    "events": [
      {
        "name": "first quiz",
        "timeStart": "12.15 PM",
        "timeEnd": "12.30 PM",
        "location": "H14"
      },
      {
        "name": "second quiz",
        "timeStart": "2.15 PM",
        "timeEnd": "2.30 PM",
        "location": "H14"
      },
      {
        "name": "third quiz",
        "timeStart": "4.15 PM",
        "timeEnd": "4.30 PM",
        "location": "H14"
      }
    ]
  },

  {
    "date": "3/2/2018",
    "events": [
      {
        "name": "second quiz",
        "timeStart": "12.15 PM",
        "timeEnd": "12.30 PM",
        "location": "H12"
      }
    ]
  }
    ,
  {
    "date": "6/2/2018",
    "events": [
      {
        "name": "third quiz",
        "timeStart": "12.15 PM",
        "timeEnd": "12.30 PM",
        "location": "C7.01"
      }
    ]
  }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, public eventsService: EventsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }


}
