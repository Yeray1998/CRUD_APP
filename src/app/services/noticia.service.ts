import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL = 'http://api.mediastack.com/v1/news?access_key=64ef49e198be1b60ad89cf6835d6b05d&categories='+parametros.categoria+'&countries='+parametros.pais+''
    return this.http.get(URL);
  }
}
