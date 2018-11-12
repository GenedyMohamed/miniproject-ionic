import { Component } from '@angular/core';
import {ServiceProvider} from '../../providers/service/service'
import { NavController } from 'ionic-angular';
import { MovieDetailsPage } from '../movie-details/movie-details';
import { CategoryPage } from '../category/category';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [ServiceProvider]

})
export class HelloIonicPage {

  movies: any= ['id', 'url', 'title', 'title_english','small_cover_image','genres','summary'];
  movieSuggestion: any=['id', 'url', 'title', 'title_english','small_cover_image','genres','summary'];
  data: any=[];
  data2: any=[];
  categories: any=[];
  num : any;
  page: any; 
  limit: any;
  img: any;
  genre:any;
  constructor(public service:ServiceProvider, public nav: NavController) {

    console.log('entered constructor');
    this.moviesDisplay()
  }//end constructor



  moviesDisplay()
  {    
      this.data=this.service.getMovies().then((data)=> {
        console.log(data);
        //this.num=data['status'];
        for(let element in data['data']){
          if(element == 'movie_count')
          this.num=data['data']['movie_count'];
          if(element== 'movies')
          this.movies=data['data']['movies'];
          if(element =='page_number')
          this.page=data['data']['page_number'];
          if(element== 'limit')
          this.limit=data['data']['limit'];
          
        //  console.log(element);
        }
        //  console.log(this.num);
         // console.log(this.movies);
         // console.log(this.page);
         // console.log(this.limit);
        for(var i=0; i<this.movies.length;i++)
        {     
              this.genre=this.movies[i]['genres'];
              if(!(this.categories.indexOf(this.genre) > -1))
              {
                  this.categories.push(this.movies[i]['genres']);
                  console.log('genre is', this.movies[i]['genres'])
              }
        }

        });
    
        
    console.log("done transferring");
  //    console.log(this.movies);

  }//end movies display

  suggestions(event, category)
  {
    console.log('entered suggestions')
    this.nav.push( CategoryPage, {category: category});
  }//end method
  movieDetails(event, movie)
  {
  this.nav.push(MovieDetailsPage,{movie:movie});
  }//end movie details


}
