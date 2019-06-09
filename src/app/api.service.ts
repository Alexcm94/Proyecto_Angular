import {Injectable} from '@angular/core'
import { Http } from '@angular/http';
import'rxjs/add/operator/map';
@Injectable()
export class ApiService{

     
     constructor(private http: Http){

     }
     public getAllApi(palabra){
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
}
