import { Component, OnInit, Input } from '@angular/core';
import {MoreInfoService} from '../shared/more-info/more-info.service'
@Component({
  selector: 'app-lectures',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {


  info : any;

  constructor(private moreinfo: MoreInfoService) { }

  ngOnInit(){
     this.info = this.moreinfo.getMoreInfo('data');
  }

}
