import { SkiResortNames } from './../../skiresorts/models/skiResortNames';
import { Component, OnInit } from '@angular/core';
import { SkiResortsService } from 'src/app/service/ski-resorts.service';

@Component({
  selector: 'ski-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  skiResortNames : SkiResortNames;
  constructor(private service: SkiResortsService) { }

  ngOnInit(): void {
    this.service.getNames().subscribe( data => {
      this.skiResortNames = data;
    })
  }

}
