import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

 elementos:Array<any>;

  constructor(private api: ApiService) {

   }

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
      (data)=> {console.log(data);this.elementos=data},
      (error)=> {console.log(error)}
    )
  }
  onScrollDown(){
    
    this.api.getNextApi().subscribe(
      (data)=> { this.elementos=this.elementos.concat(data); console.log(this.elementos)},
      (error)=> {console.log(error)}
    )
  }

}
