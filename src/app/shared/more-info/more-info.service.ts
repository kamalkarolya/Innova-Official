import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoreInfoService {

  constructor() { }
  setMoreInfo(data){
    sessionStorage.setItem('data', JSON.stringify(data));
  }
  getMoreInfo(key:string){
    let obj:any = JSON.parse(sessionStorage.getItem(key));
    return obj;
  }

}
