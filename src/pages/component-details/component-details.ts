import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the ComponentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-component-details',
  templateUrl: 'component-details.html',
})
export class ComponentDetailsPage {

  component: any = {};

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {

  	this.component = this.navParams.get('component');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentDetailsPage');
  }

  openModal(){
    var modalPage = this.modalCtrl.create('NewComponentQuestionPage', {});
    modalPage.present();
  }

}
