import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoredetailsPage } from '../storedetails/storedetails';

/**
 * Generated class for the StorescomponentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storescomponents',
  templateUrl: 'storescomponents.html',
})
export class StorescomponentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorescomponentsPage');
  }
  
  goToStore(){
     this.navCtrl.push(StoredetailsPage);
  }
}
