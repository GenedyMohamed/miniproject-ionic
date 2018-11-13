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
  filter: any;
  word:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service:ServiceProvider) {
         this.selectedCategory= this.navParams.get('category');
         this.relatedMovies();
  }



  relatedMovies()

  {
      console.log('selected is', this.selectedCategory);
    this.data=this.service.getMovies().then((data)=> {
      //obtaining the movies array
      
      for(let element1 in data['data']){

        if(element1== 'movies')
         this.movies=data['data']['movies'];
        
         }//end for
        let element=0;
        for(let i=0; i<this.movies.length;i++)
        {
          console.log("movie ", i, " category: ", this.movies[i]['genres']);
          console.log(this.movies[i]['genres'].length)
          while(element<this.movies[i]['genres'].length){
               this.filter= this.movies[i]['genres'][element];
               
               //obtaining the chosen category
              
                this.word=this.selectedCategory.split(',');
                ;console.log("word= ", this.word);
               
               if(this.filter !== this.word[element]){
                    console.log(this.movies[i]['genres'][element]);
                    console.log(this.word[element]);
                    this.belongs=false;
                     console.log(this.belongs);
               }
                     element++;
            
          }
           
            if(this.belongs == true )
            {      
              console.log(this.movies[i]['genres']);
              console.log(this.movies[i]['title']);              
              this.filtered.push(this.movies[i]);
                
            }

          element=0;
          this.belongs=true; 
          this.word=[];
         
        }//end for

        for(let i=0; i<this.filtered.length;i++)
        {
          console.log(this.filtered[i]);
        }
     });//end callback function
 
  }//end method


}//end class
