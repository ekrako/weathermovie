import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any = {};
  searchTerm:string;
  errorMsg:string;
  showSpinner:Boolean = false;
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(`lat:${position.coords.latitude},lon=${position.coords.longitude}`);
      this.showSpinner=true;
      this.weatherService.getWeatherBycoordinates(position.coords.latitude,position.coords.longitude).subscribe(res => {
        this.showSpinner=false;
        this.setWeather(res['list'][0]);
      })
    })
  }
  setWeather(data):void{
    console.log(data);
    this.errorMsg=null;
    const KelvinToCelsius =273.15
    this.weather.name = data.name;
    this.weather.temp = parseFloat(data.main.temp)-KelvinToCelsius;
    this.weather.data = data;
    this.weather.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    this.weather.description = data.weather[0].description;
    this.weather.humidity=data.main.humidity;
    this.weather.wind= data.wind.speed;
  }
  locationChange(str){
    if (str==''){
      this.ngOnInit()
      return
    }
    this.showSpinner=true;
    this.weatherService.getWeatherByLocation(str).subscribe(res => {
      this.showSpinner=false;
      console.log(res)
      this.setWeather(res);
    },
    err=>{
      console.log(err)
      this.showSpinner=false;
      this.errorMsg = err.statusText;
      if (err.error) this.errorMsg=err.error.message;
      this.weather={}
    })
  }

}
