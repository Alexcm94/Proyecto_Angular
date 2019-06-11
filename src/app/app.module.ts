import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { AllComponent } from './all/all.component';
//Aqui importamos la clase que nos va a servir para realizar las peticiones Ajax
import { ApiService } from './api.service';
//Para poder hacer peticiones http..
import {HttpModule} from '@angular/http';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { SerieDetailComponent } from './series/serie-detail/serie-detail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { WebsitePipe } from './website.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    AllComponent,
    MoviesComponent,
    SeriesComponent,
    MoviesDetailComponent,
    SerieDetailComponent,
    WebsitePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
