import { SkiPassPrice } from './../skiresorts/models/skipass-price';
import { SkiResort } from './../skiresorts/models/ski-resort';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SkiResortNames } from '../skiresorts/models/skiResortNames';
import { Weather } from '../skiresorts/models/weather';
import { Track } from '../skiresorts/models/track';
import { Reservation } from '../skiresorts/models/reservation';



const url = "http://localhost:3000/api/skiresorts";

@Injectable({
  providedIn: 'root'
})
export class SkiResortsService {
 
  constructor(private http: HttpClient) { }
  
  getNames(): Observable<SkiResortNames>{
    return this.http.get(url).pipe(map(response =>{
      return new SkiResortNames(response);
    }))
  }

  getResort(id: number) : Observable <SkiResort>{
    return this.http.get(url + "/" + id).pipe(map(data => {
      return new SkiResort(data);
    }))
  }

  getWeather(id: number): Observable<Weather[]>{
    return this.http.get<Array<Weather>>(url + "/" + id + "/weather").pipe(map(response =>{
      let retVal = new Array<Weather>();
    response.forEach(element => 
      retVal.push(new Weather(element)));
      return retVal;    
  }));
  }

  getTracks(id: number, params?: any): Observable<Track[]>{

    let queryParams={};
    
    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("sort", params.sort && params.sort.toString() || '')
      }
    }

    return this.http.get<Array<Track>>(url + "/" + id + "/tracks", queryParams).pipe(map(data => {
      let retVal = new Array<Track>();
      data.forEach(elem =>
        retVal.push(new Track(elem)));
        return retVal;
    }))
  }

  getSkiPassPrice(id:number): Observable<SkiPassPrice[]>{
    return this.http.get<Array<SkiPassPrice>>(url + "/" + id + "/skipass").pipe(map(response =>{
      let retVal = new Array<SkiPassPrice>();
      response.forEach(element => retVal.push(new SkiPassPrice(element)));
      return retVal;
    }))
  }

  saveReservation(reservation: Reservation) {
    return this.http.post(url + "/" + reservation.mountain_id + "/skipass", reservation);
  }
}
