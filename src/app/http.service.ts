import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; //for detail-page


@Injectable({
  providedIn: 'root'
})
export class HttpService {


	baseUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?';
	apiKey = '&cnt=10&appid=9fd7a449d055dba26a982a3220f32aa2';

  weathers //for detail-page: put this variable here is to save the data in local in order to appear this data in another page

  constructor(private httpClient: HttpClient) { }

  getWeatherByGeo (long,lat){
    return this.httpClient.get(
      `${this.baseUrl}lat=${lat}&lon=${long}${this.apiKey}`)
  }

  searchData(title:string): Observable<any>{
  	return this.httpClient.get(`${this.baseUrl}q=${encodeURI(title)}${this.apiKey}`).pipe(
      tap(resp=>{
        
        console.log(resp)
        this.weathers = resp["list"]
      }
        ))

  }

  /*getWeathers(city){
  	return this.httpClient.get(`${this.baseUrl}${city}${this.apiKey}`)
      }
*/
      getWeatherByTimestamp(timestamp){
        for (let i=0; i<this.weathers.length; i++){
          if (this.weathers[i]["dt"]==timestamp){
            return this.weathers[i]
          }
        }
  }
}

