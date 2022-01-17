import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  @Input() accounts;

  constructor() { }

  ngOnInit(): void {
  }

  onClickActive(){
    this.accounts.status = "Active";
  }
  onClickInActive(){
    this.accounts.status = "InActive";
  }
  onClickUnknown(){
    this.accounts.status = "Unknown";
  }
}
