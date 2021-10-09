import { Component, OnInit } from '@angular/core';
import sponsorData from './sponsors.component.data';
@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  sponsors = sponsorData;

  ngOnInit(): void {
  }

}
