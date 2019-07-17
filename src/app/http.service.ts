import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


	baseUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?';
	apiKey = '&cnt=10&appid=9fd7a449d055dba26a982a3220f32aa2';

  constructor(private httpClient: HttpClient) { }

  searchData(title:string): Observable<any>{
  	return this.httpClient.get(`${this.baseUrl}q=${encodeURI(title)}${this.apiKey}`);
  }

  getWeathers(city){
  	return this.httpClient.get(`${this.baseUrl}${city}${this.apiKey}`);
  }
}
