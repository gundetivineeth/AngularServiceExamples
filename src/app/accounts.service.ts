import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accountList =[{
    accountName:"Test",
    status:"Active"
  },
  {
    accountName: "Test another status",
    status:"InActive"
  }
  ,
  {
    accountName: "Test another status",
    status:"Unknown"
  }
]

statusAlert = new EventEmitter<string>();

constructor() { 

  }
  onAccountAdd(accounts){
    this.accountList.push(accounts);
    }
}
