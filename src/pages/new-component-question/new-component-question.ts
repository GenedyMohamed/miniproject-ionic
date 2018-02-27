import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the NewComponentQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-component-question',
  templateUrl: 'new-component-question.html',
})
export class NewComponentQuestionPage {

  newQuestion = { data: "" };
  params: any;

  constructor(public navCtrl: NavController, public viewCtrl : ViewController ,public navParams: NavParams) {
    this.params = navParams;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewComponentQuestionPage');
  }

  closeModal(){
	  this.viewCtrl.dismiss();
  }

  postQuestion() {

  }

}
