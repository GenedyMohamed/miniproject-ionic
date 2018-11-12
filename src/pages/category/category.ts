import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service'

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  selectedCategory: any;
  movies: any=[];
  data: any=[];
  belongs: boolean=true;
  filtered: any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service:ServiceProvider) {
         this.selectedCategory= this.navParams.get('category');
         this.relatedMovies();
  }



  relatedMovies()

  {
      console.log('selected is', this.selectedCategory);
    this.data=this.service.getMovies().then((data)=> {
      this.movies=data['data']['movies'];
        let element=0;
        for(let i=0; i<this.movies.length;i++)
        {
          console.log(this.movies[i]['genres']);
          while(element<this.selectedCategory.length){
               if(this.movies[i]['genres'][element] !== this.selectedCategory[element]){
                     this.belongs=false;
                     console.log(this.belongs);
                     element++;
               }//end if
          }
           
            if(this.belongs == true )
            {                    
                  this.filtered.push(this.movies[i]);
                  console.log(this.movies[i]['genres']);
                  console.log(this.movies[i]['title']);
            }

          element=0;
          this.belongs=true; 
         
        }//end for

        for(let i=0; i<this.filtered.length;i++)
        {
          console.log(this.filtered[i]);
        }
     });//end callback function
 
  }//end method


}//end class
