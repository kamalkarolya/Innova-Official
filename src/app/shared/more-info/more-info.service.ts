import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoreInfoService {
  moreinfo: string
  constructor() { }
  setMoreInfo(data){
    this.moreinfo=data
  }
  getMoreInfo(){
    return this.moreinfo
  }
  
}
