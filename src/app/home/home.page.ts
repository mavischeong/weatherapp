import { HttpService } from '../http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';

  constructor(private httpService:HttpService,
    private geolocation:Geolocation) {}

  weathers
  city
  place

  ngOnInit(){

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude)
      console.log(resp.coords.longitude)
      this.httpService.getWeatherByGeo(resp.coords.longitude,
        resp.coords.latitude).subscribe(resp=>{
          console.log(resp)
          this.weathers= resp["list"]
          this.place = resp["city"]
        })
      }).catch((error) => {
        console.log('Error getting location', error);
      });

    }

    searchChanged(){
      console.log('change')
      this.httpService.searchData(this.searchTerm).subscribe(resp=>{
        console.log(resp)
        this.weathers = resp['list']
        this.place = resp ['city']
      })
    }



  }
