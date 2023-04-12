import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SkiPassPrice } from '../models/skipass-price';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'ski-ski-pass',
  templateUrl: './ski-pass.component.html',
  styleUrls: ['./ski-pass.component.css']
})
export class SkiPassComponent implements OnInit {
@Input() skiPassPrice: SkiPassPrice[];
@Output() newReservation = new EventEmitter<Reservation>();

  reservation: Reservation = new Reservation();
  constructor() { }

  ngOnInit(): void {
  }

  calculatePrice() {
    if(this.reservation.from && this.reservation.to) {
      let diffDays = this.reservation.calculateDateDifference();
      if(diffDays < 1 || diffDays > 7) {
        console.log("Out of scope");
        this.reservation.price = null;
      }

      for(let i = 0; i < this.skiPassPrice.length; i++) {
        if(this.skiPassPrice[i].duration == diffDays) {
          this.reservation.price = this.skiPassPrice[i].price;
          break;
        }
      }
    }
  }

  saveReservation() {
    this.newReservation.emit(this.reservation);
    this.reservation = new Reservation();
  }
}
