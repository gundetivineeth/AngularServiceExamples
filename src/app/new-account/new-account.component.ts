import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @Output() accounts = new EventEmitter<{accountName:string,status:string}>();
  constructor() { }
  @ViewChild('accountNameRef') accountNameRef:ElementRef;
  @ViewChild('statusRef') statusRef:ElementRef;

  ngOnInit(): void {
  }

  onAddAccount(){
    this.accounts.emit({
      accountName:this.accountNameRef.nativeElement.value,
      status:this.statusRef.nativeElement.value
    })
  }

}
