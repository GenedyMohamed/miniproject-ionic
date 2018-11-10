import { Http } from '@angular/http';
import { Injectable} from '@angular/core';
import 'rxjs/Rx';
//import { Observable } from 'rxjs/Observable';
import {LoadingController} from 'ionic-angular';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  movies: any []; 
  loading: any;
  constructor(public http: Http, public loadingCtrl: LoadingController) {
    console.log('Hello ServiceProvider Provider');
  }

  getMovies(){
    console.log('entered getMovies method');
//return this.http.get<{movies:any[]}>('https://yts.am/api/v2/movie_details.json').map(res => res.movies);
    return new Promise((resolve, reject) => {
      var url='https://yts.am/api/v2/list_movies.json';
    
    this.http.get(url).map(res => res.json()).subscribe(data => {
      resolve(data);
    } ,
    err => {
      reject(err);
    });
});
  }

getNumber()
{
  return  this.http.get('https://yts.am/api/v2/list_movies.json/movie_count');
}

}
