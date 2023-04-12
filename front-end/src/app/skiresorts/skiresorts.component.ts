import { Component, OnInit } from '@angular/core';
import { SkiResortsService } from '../service/ski-resorts.service';
import { SkiResort } from './models/ski-resort';
import { ActivatedRoute } from '@angular/router';
import { Weather } from './models/weather';
import { Track } from './models/track';
import { SkiPassPrice } from './models/skipass-price';


@Component({
  selector: 'ski-skiresorts',
  templateUrl: './skiresorts.component.html',
  styleUrls: ['./skiresorts.component.css']
})
export class SkiresortsComponent implements OnInit {

  skiResortItem: SkiResort;
  weather: Weather[];
  tracks: Track[];
  skiPassPrice: SkiPassPrice[];

  constructor(private service: SkiResortsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      let id = parseInt(data['resortId']);
      this.service.getResort(id).subscribe(response => {
        this.skiResortItem = response;
      },
      error => {
        console.log("error: ", error);
      });

      this.service.getWeather(id).subscribe( res =>{
        this.weather = res;
      });

      this.service.getTracks(id).subscribe(response => {
        this.tracks = response;
      });

      this.service.getSkiPassPrice(id).subscribe(res =>{
        this.skiPassPrice = res;
      })


    });
  }

  updateTracks(sort){
    this.service.getTracks(this.skiResortItem._id, sort).subscribe(tracks => this.tracks = tracks);
  }

  newReservation(reservation) {
    reservation.mountain_id = this.skiResortItem._id;
    this.service.saveReservation(reservation).subscribe(res => {
      window.alert("Reservation successful!");
    }, err => {
      window.alert("Error: " + err);
    });
  }

}