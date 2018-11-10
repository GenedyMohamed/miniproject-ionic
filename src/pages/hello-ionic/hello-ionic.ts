import { Component } from '@angular/core';
import {ServiceProvider} from '../../providers/service/service'
import { NavController } from 'ionic-angular';
import { MovieDetailsPageModule } from '../movie-details/movie-details.module';
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
  num : any;
  page: any; 
  limit: any;
  img: any
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
          this.movies.id=this.movies[i]['id'];
          this.movies.url= this.movies[i]['url'];
          this.movies.title=this.movies[i]['title'];
          this.movies.title_english=this.movies['title_english'];

        }

        });
    
        
    console.log("done transferring");
  //    console.log(this.movies);
  

  
  }
  movieDetails()
  {
  this.nav.push(MovieDetailsPageModule);
  }
    movieSuggestions(id: any)
    {
      console.log('entered suggestions method');
      this.data2=this.service.getSuggestions(this.movies[id]).then((data) =>
      { 
        console.log('suggested related movies:')
        
        for(var i=0; i<this.data2.length;i++)
        {
          console.log(this.data2[i]['title']);
        }  
      });
  }//end method
}
