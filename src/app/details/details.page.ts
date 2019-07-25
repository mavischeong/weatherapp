import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

	city
	weather

  constructor(private activatedRoute:ActivatedRoute,
  	private httpService:HttpService) { }

  ngOnInit() { //if i need to bring out the data, then we put out the variable (city) and the no need to write "let" inside the ngOnInit. 
  				//if i do not need to bring out the data; like in this case, we do not need to bring out the date, we write "let" inside.

  	this.city = this.activatedRoute.snapshot.paramMap.get('city');

  	let timestamp = this.activatedRoute.snapshot.paramMap.get('timestamp');

  	this.weather = this.httpService.getWeatherByTimestamp(timestamp);
  }

}
