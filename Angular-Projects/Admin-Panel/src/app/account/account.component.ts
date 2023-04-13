import { Component } from '@angular/core';
import { UserInfoService } from "../user-info.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [UserInfoService]
})
export class AccountComponent {
  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];

  getInfoFromService1(){
    this.infoReceived1 = this.uinfo.getInfo1();
  }
  getInfoFromService2(){
    this.infoReceived2 = this.uinfo.getInfo2();
  }
  getInfoFromService3(){
    this.infoReceived3 = this.uinfo.getInfo3();
  }

  constructor(private uinfo: UserInfoService){ }
}
