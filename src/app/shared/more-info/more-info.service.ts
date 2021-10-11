import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoreInfoService {
  moreinfo = {
    desc: String,
    more: String,
    imgSrc: String
  }
  constructor() { }
  setMoreInfo(data){
    this.moreinfo=data
  }
  getMoreInfo(){
    return this.moreinfo
  }
  
}
