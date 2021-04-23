import { Component, OnInit } from '@angular/core';
import {MovieService} from './../../services/movie.service'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService:MovieService) { }
  movie: any;
  str:string;
  errorMsg:string;
  showSpinner:Boolean = false;
  ngOnInit(): void {}
  movieSearch(str:string){
    this.movie=null;
    this.errorMsg=null;
    this.showSpinner = true;
    this.movieService.getMovieDetails(str).subscribe(res => {
      // debugger;
      this.showSpinner=false;
      if (res['Response'] == 'True'){
        this.movie = res;
        return
      }
      this.movie = null;
      this.errorMsg=res['Error']
    })
  }

}
