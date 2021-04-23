import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getWeatherByLocation(str){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${str}&appid=${environment.weatherApiKey}`)
  }
  getWeatherBycoordinates(lat,lon){
    // return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${environment.weatherApiKey}`)
    return this.http.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=1&appid=${environment.weatherApiKey}`)
  }
}
