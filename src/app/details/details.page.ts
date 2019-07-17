import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

	information = null;

  constructor(private activatedRoute:ActivatedRoute,
  	private httpService:HttpService) { }

  ngOnInit() {

  	let date = this.activatedRoute.snapshot.paramMap.get('weather.dt');

  	this.httpService.getWeathers(date).subscribe(result =>{
  		this.information = result;
  	})
  }

}
