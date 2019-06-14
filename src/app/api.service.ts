import {Injectable} from '@angular/core'
import { Http } from '@angular/http';
import'rxjs/add/operator/map';
@Injectable()
export class ApiService{
     palabra="";
     peticion_en_curso=false;
     constructor(private http: Http){
        
     }
     public getAllApi(palabra, pagina){
         this.palabra=palabra;
         return this.http.get("https://www.omdbapi.com/?apikey=6040d029&s="+palabra+"&page="+pagina).map(
             (respuesta)=>{return respuesta.json().Search}
         )
     }
     public getAllApiMovies(palabra, pagina){
        this.palabra=palabra;
        return this.http.get("https://www.omdbapi.com/?apikey=6040d029&s="+palabra+"&page="+pagina+"&type=movie").map(
            (respuesta)=>{return respuesta.json().Search}
        )
    }
    public getAllApiSeries(palabra, pagina){
        this.palabra=palabra;
        return this.http.get("https://www.omdbapi.com/?apikey=6040d029&s="+palabra+"&page="+pagina+"&type=series").map(
            (respuesta)=>{return respuesta.json().Search}
        )
    }
    public getMovie(imdbID){
        return this.http.get("https://www.omdbapi.com/?apikey=6040d029&i="+imdbID).map(
            (respuesta)=>{return respuesta.json()}
        )
    }
    
}
