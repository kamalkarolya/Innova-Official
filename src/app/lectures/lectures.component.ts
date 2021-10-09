import { Component, OnInit } from '@angular/core';
import lectureData from './lectures.component.data';
@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss']
})
export class LecturesComponent implements OnInit {

  constructor( ) { }
  upcoming = [
  ]
  lectures = lectureData;
  ngOnInit(): void {

  }

}
