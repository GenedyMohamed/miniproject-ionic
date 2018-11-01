import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events} from 'ionic-angular';
import { EventsService } from '../../app/services/eventsService';
import { ModalController } from 'ionic-angular';
import { Service } from '../../app/service';
import { QuestionsService } from '../../app/services/questionsService'
import { NotesService } from '../../app/services/notesService'
import { Profile } from '../profile/profile';
import { Http, Headers } from '@angular/http';
import { Add } from '../add/add';
import { QuestionPage } from '../question/question'
import { EventDetailsPage } from '../event-details/event-details'
import * as config from '../../app/config.json';

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
  course: any = {};
  questions: any[] = [];
  notes: Object[] = [];
  next: string;
  data: any;
  pp: string = "assets/img/default.png";
  question: any;
  isAuth: boolean;
  noMore: boolean;
  EventsQuestionsNotes: string;
  //groups: any = {};


  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public eventsService: EventsService, public service: Service, public http: Http, public alertCtrl: AlertController, public events: Events, public questionsService: QuestionsService) {

    this.course = navParams.get('course');
    console.log(this.course);
    this.isAuth = service.isAuthenticated();
    console.log(this.isAuth);
    this.getQuestions();
    this.getEvents();
    this.EventsQuestionsNotes = "Events";
    this.getNotes();
  }

  openModal(course){
    var modalPage = this.modalCtrl.create('NewEventPage', {course : course});
    modalPage.present();
  }

  ionViewDidLoad() {
    this.getQuestions();
    console.log('ionViewDidLoad EventsPage');
  }

  goToEventDetail(event){
    this.navCtrl.push(EventDetailsPage, {
      event: event
    })
  }

  getEvents(){
    this.eventsService.getEvents(this.course.id)
      .then((data) => {
        //this.groups = data.data;
        //console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getQuestions() {
    this.questionsService.getQuestions(this.course.id)
      .then((data) => {
        this.questions = data.questions.data;
        this.next = data.questions.next_page_url
        if (this.next == null) {
          this.noMore = true;
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
  more() {
    this.questionsService.more(this.next)
      .then((data) => {
        this.next = data['questions'].next_page_url;
        if (this.next == null) {
          this.noMore = true;
        }
        this.questions = this.questions.concat(data['questions'].data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  add() {
    this.navCtrl.push(Add, {
      course: this.course
    });
  }
  up(question) {
    this.questionsService.up(question.id, this.service.getToken())
      .then((data) => {
        if (!data['error']) {
          question.votes++;
        } else {
          this.showAlert(data['state']);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  down(question) {
    this.questionsService.up(question.id, this.service.getToken())
      .then((data) => {
        if (!data['error']) {
          question.votes--;
        } else {
          this.showAlert(data['state']);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  goToQuestion(question) {
    this.navCtrl.push(QuestionPage, {
      question: question
    })
    console.log("IN QUESTIONS PAGE" + question);
  }

  showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Oooops',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  getNotes(){
    this.notes = [{"name": "Notes 1", "owner": "GUC", "postTime": "1 minute ago"}]
  }


}
