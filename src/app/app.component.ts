import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularServiceExamples';
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
    status:"Unknow"
  }
]
onAccountAdd(accounts){
this.accountList.push(accounts);
}
}
