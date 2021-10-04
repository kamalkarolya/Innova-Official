import { Component, OnInit } from '@angular/core';
import workshopData from './workshops.component.data';
@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss'],
})
export class WorkshopsComponent implements OnInit {
  constructor() {}

  workshops = workshopData;
  ngOnInit(): void {}
}
