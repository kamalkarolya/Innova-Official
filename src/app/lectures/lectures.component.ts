import { Component, OnInit } from '@angular/core';
import { MoreInfoService } from '../shared/more-info/more-info.service'
import lectureData from './lectures.component.data';
@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss']
})
export class LecturesComponent implements OnInit {

  constructor( private moreinfo: MoreInfoService) { }
  upcoming = [
  ]
  lectures = lectureData;
  findOne(data){
    this.moreinfo.setMoreInfo(this.lectures.find(x => x.id === data).more)
  }
  ngOnInit(): void {

  }

}
