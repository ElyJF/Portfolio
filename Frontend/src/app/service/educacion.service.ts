import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from 'src/environments/environment';
import { Educacion } from "../model/educacion";

@Injectable({
    providedIn: 'root'
  })
  export class EducacionService {
 
    

    expURL = 'https://portfolio-qf4e.onrender.com/educacion/';
  
  
    constructor(private httpClient : HttpClient) { }
  
    public lista(): Observable<Educacion[]>{
      return this.httpClient.get<Educacion[]>(this.expURL + 'lista');
    }
  
    public detail(id: number): Observable<Educacion>{
      return this.httpClient.get<Educacion>(this.expURL + `detail/${id}`);
    }
  
    public save(educacion: Educacion): Observable<any>{
      return this.httpClient.post<any>(this.expURL + 'create', educacion);
    }
  
    public update(id: number, educacion: Educacion): Observable<any>{
      return this.httpClient.put<any>(this.expURL + `update/${id}`, educacion);
    }
  
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
    }
  }