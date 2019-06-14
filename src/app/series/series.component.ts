/*
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  elementos:Array<any>;
  pagina=1;
  cargando=false;
  cargandoScroll=false;
  error=false;

  constructor() { 

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
    this.elementos=[];
    this.cargando=true;
    this.pagina=1;
    this.api.getAllApiSeries(palabra,this.pagina).subscribe(
      (data)=> {
        console.log(data);
        this.elementos=data;
        this.cargando=false;
        this.error=false
      },
      (error)=> {
        console.log(error); 
        this.error=true;
        this.cargando=false
      }
    )
  }
  onScrollDown(palabra){
    this.cargandoScroll=true;
    this.pagina++;
    this.api.getAllApiSeries(palabra,this.pagina).subscribe(
      (data)=> {
        console.log(data);
        this.elementos=this.elementos.concat(data);
        this.cargandoScroll=false;
      },
      (error)=> {
        console.log(error);
        this.error=true;
        this.cargando=false
      }
    )
  }
  changePoster(index){
    this.elementos[index].Poster = "assets/img/placeholder.png"
  }
}
*/