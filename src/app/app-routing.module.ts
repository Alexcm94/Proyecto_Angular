import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { MoviesComponent } from './movies/movies.component';
//import { SeriesComponent } from './series/series.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { SerieDetailComponent } from './series/serie-detail/serie-detail.component';

const routes: Routes = [
  {path: '', redirectTo:'/all', pathMatch:'full'},
  {path:'all', component: AllComponent},
  {path:'movies', component: MoviesComponent},
  {path:'movie/:imdbId', component: MoviesDetailComponent},
  //{path:'series', component: SeriesComponent},
  {path:'serie/:imdbId', component: SerieDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
