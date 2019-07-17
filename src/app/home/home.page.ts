import { HttpService } from '../http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	results: Observable<any>;
	searchTerm: string = '';

  constructor(private httpService:HttpService) {}

weathers
city

  ngOnInit(){ }



  searchChanged(){
    console.log('change')
  	 this.httpService.searchData(this.searchTerm).subscribe(resp=>{
      console.log(resp)
      this.weathers = resp['list']
    })
  }



}
