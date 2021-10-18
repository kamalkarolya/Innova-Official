import { Component, OnInit } from '@angular/core';
import { MoreInfoService } from '../shared/more-info/more-info.service'
import workshopData from './workshops.component.data';
@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss'],
})
export class WorkshopsComponent implements OnInit {
  constructor( private moreinfo: MoreInfoService ) {  }

  workshops = workshopData;
  findOne(data){
    this.moreinfo.setMoreInfo(this.workshops.find(x => x.id === data))
  }
  ngOnInit(): void {}
}
