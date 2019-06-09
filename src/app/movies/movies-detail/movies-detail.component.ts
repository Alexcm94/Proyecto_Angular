import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  movie = {};
// ActivatedRoute sirve para acceder a los parámetros de la url
  constructor(private api : ApiService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
        const imdbID = params['imdbId'];
        this.api.getMovie(imdbID).subscribe(
          (movie)=> {this.movie=movie},
          (error)=> {console.log(error)}
        )
      },
      (error) => {
        console.log(error);
      }

    )
    
  }

}
