import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the StoredetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storedetails',
  templateUrl: 'storedetails.html',
})
export class StoredetailsPage {

   constructor(public alertCtrl: AlertController , public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams: NavParams) {}
  

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoredetailsPage');
  }
  
 

 show(id){ 
       id.style.display = 'block';  
        
}   
hide(id){
	
	id.style.display = 'none';
}
   
   orange(id){
     id.style.color ='#ff3300';
   }

   black(id){

    id.style.color ='#000000';

   }

   check(id,id1,id2,id3){
         
       if(id.style.display == 'none'){
           
         if(id1.style.display == 'none'){this.showAlert() ;  }
         else {this.hide(id2); this.show(id3); this.loading();}
         } 
       else{ this.hide(id2); this.show(id3); this.loading();  }   
   }


  showAlert() {
    let alert = this.alertCtrl.create({
      subTitle: 'You did not rate the store , please rate then try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  loading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  removeItem(item1,list1){

     list1.splice(item1, 1);
  }

}
