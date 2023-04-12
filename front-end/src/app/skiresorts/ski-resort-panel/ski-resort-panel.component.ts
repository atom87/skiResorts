import { Component, OnInit, Input } from '@angular/core';
import { SkiResort } from '../models/ski-resort';

@Component({
  selector: 'ski-ski-resort-panel',
  templateUrl: './ski-resort-panel.component.html',
  styleUrls: ['./ski-resort-panel.component.css']
})
export class SkiResortPanelComponent implements OnInit {
@Input() skiResort : SkiResort;
  constructor() { }

  ngOnInit(): void {
  }

}