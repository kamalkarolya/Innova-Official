import { Component, OnInit, Input } from '@angular/core';
import {MoreInfoService} from '../shared/more-info/more-info.service'
@Component({
  selector: 'app-lectures',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  
  more: String

  constructor(private moreinfo: MoreInfoService) { }
  
  ngOnInit(): void {
    this.more= this.moreinfo.getMoreInfo()
  }

}
