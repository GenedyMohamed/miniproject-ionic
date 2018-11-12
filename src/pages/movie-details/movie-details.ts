import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {

  selectedMovie: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedMovie = navParams.get('movie');   //retrieving the selected movie
    this.display();
  }


  display()
  {
       console.log(this.selectedMovie['title']);

  }
 
}
