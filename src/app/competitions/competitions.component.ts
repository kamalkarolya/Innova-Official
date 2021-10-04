import { Component, OnInit } from '@angular/core';
import { MoreInfoService } from '../shared/more-info/more-info.service'
import competitionData from './competitions.component.data';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  constructor( private moreinfo: MoreInfoService ) {  }

  more: String

  competitions = competitionData;
  findOne(data){
    this.moreinfo.setMoreInfo(this.competitions.find(x => x.id === data).more)
  }
  ngOnInit(): void {
  }

}
