import { Injectable } from '@angular/core';
import{catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { dataType } from '../d-Fotos/foto/data';

    const httpOptions = {
      //20.000 Requisições por Chave
      headers: new HttpHeaders({
        'Authorization':'563492ad6f917000010000015abe7816e6194bc5beea2f963f45d2c3'
      })
    }

@Injectable({
  providedIn: 'root'
})

export class PexelPhotoService {

      constructor(private http:HttpClient) { }

      getData(Pesquisa,per_Page): Observable<any>{
        
        const url = "https://api.pexels.com/v1/search?query="+ Pesquisa + "&per_page="+per_Page
        
        return this.http.get<dataType[]>(url,httpOptions)
                        .pipe(catchError(this.handleError))
      }
      //pendenciada interface do tipo 'date' para utilização de interface
      handleError(error){
        return throwError(error.message || "Server error" )
      }
      
      }

