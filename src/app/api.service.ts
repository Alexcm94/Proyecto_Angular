import {Injectable} from '@angular/core'
import { Http } from '@angular/http';
import'rxjs/add/operator/map';
@Injectable()
export class ApiService{
     palabra="";
     contador=2;
     peticion_en_curso=false;
     constructor(private http: Http){
        
     }
     public getAllApi(palabra){
         this.palabra=palabra;
         return this.http.get("http://www.omdbapi.com/?apikey=6040d029&s="+palabra).map(
             (respuesta)=>{return respuesta.json().Search}
         )
     }
     public getAllApiMovies(){
        return this.http.get("http://www.omdbapi.com/?type=movie&s=day&apikey=6040d029").map(
            (respuesta)=>{return respuesta.json().Search}
        )
    }
    public getMovie(imdbID){
        return this.http.get("http://www.omdbapi.com/?apikey=6040d029&i="+imdbID).map(
            (respuesta)=>{return respuesta.json()}
        )
    }
    public getNextApi(){
        if(!this.peticion_en_curso){
            this.peticion_en_curso=true;
            return this.http.get("http://www.omdbapi.com/?apikey=6040d029&s="+this.palabra+"&page="+this.contador).map(
            (respuesta)=>{this.contador++; this.peticion_en_curso=false; return respuesta.json().Search}
            
        )
        }
        
        
    }
}
