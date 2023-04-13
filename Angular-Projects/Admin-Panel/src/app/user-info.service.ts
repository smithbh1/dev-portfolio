import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  info1: string[]=["First Last", 'E123', 'username1']
  info2: string[]=["First Last2", 'E456', 'username2']
  info3: string[]=["First Last3", 'E789', 'username3']

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }
  constructor() { }
}
