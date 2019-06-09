import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  elementos=[];

  constructor(private api: ApiService) { 
    this.api.getAllApiMovies().subscribe(
      (elementos)=> {this.elementos=elementos},
      (error)=> {console.log(error)}
    )
  }

  ngOnInit() {
  }

}
