import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getMovieDetails(str){
    return this.http.get(`https://www.omdbapi.com/?apikey=${environment.omdbkey}&t=${str}`)
  }
}
