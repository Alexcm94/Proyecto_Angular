import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

 elementos=[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    
  }
  detailsRoute(elemento){
    if (elemento.Type== 'movie'){
      return "/movie/"+elemento.imdbID
    }
    else if(elemento.Type== 'series'){
      return "/serie/"+elemento.imdbID
    }else{
      return "/episode/"+elemento.imdbID
    }

    
  }
  search(palabra){
    this.api.getAllApi(palabra).subscribe(
      (elementos)=> {this.elementos=elementos},
      (error)=> {console.log(error)}
    )
  }


}
