import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../models/weather';

@Component({
  selector: 'ski-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
@Input() weather : Weather;
  constructor() { }

  ngOnInit(): void {
  }

}
