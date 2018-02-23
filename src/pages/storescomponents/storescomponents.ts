import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoredetailsPage } from '../storedetails/storedetails';
import { ComponentDetailsPage } from '../component-details/component-details';


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

  StoresAndComponents: string;
  stores: Object[] = [];
  components: Object[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.StoresAndComponents = "Stores";
    this.getStores();
    this.getComponents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorescomponentsPage');
  }
  
  goToStore(store){
     this.navCtrl.push(StoredetailsPage, {
      store: store
    });
  }

  goToComponent(component){
     this.navCtrl.push(ComponentDetailsPage, {
      component: component
     });
  }

  getStores(){
      this.stores = [{"name" : "Alwan", "category": "Library"}, {"name":"Future", "category": "Electronics"}];
  }

  getComponents(){
      this.components = [{"name" : "IR sensor", "category":"Sensors", "Price": "100 EGP"}, 
      {"name":"ultrasonic sensor", "category":"Sensors", "Price": "100 EGP"}];
  }

}
