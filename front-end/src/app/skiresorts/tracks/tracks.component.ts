import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Track } from '../models/track';

@Component({
  selector: 'ski-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
@Input() tracks: Array<Track>;
@Output() changeSort = new EventEmitter();
sortCriteria: string;
  constructor() { }

  ngOnInit(): void {
  }

  updateCriteria(){
    this.changeSort.emit({"sort": this.sortCriteria});
  }

}
