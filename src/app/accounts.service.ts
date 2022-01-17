import { Injectable } from '@angular/core';

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

  constructor() { 

  }
  onAccountAdd(accounts){
    this.accountList.push(accounts);
    }
}
