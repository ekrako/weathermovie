import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './componenets/home/home.component'
import {WeatherComponent} from './componenets/weather/weather.component'
import {MoviesComponent} from './componenets/movies/movies.component'
const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'weather', component: WeatherComponent }, 
  { path: 'movies', component: MoviesComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
