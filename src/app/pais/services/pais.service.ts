import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.eu/rest/v2';

  get params(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(query:string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${query}`;

    return this.http.get<Country[]>(url, {params: this.params});
  }

  buscarCapital(query:string): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${query}`;

    return this.http.get<Country[]>(url, {params: this.params});
  }

  getPaisPorCodigo(id:string): Observable<Country>{

    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }

  getPaisesPorRegion(region:string): Observable<Country[]>{



    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, {params: this.params});

  }

}
