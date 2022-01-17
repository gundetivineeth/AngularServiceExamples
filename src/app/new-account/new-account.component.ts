import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent implements OnInit {

  @ViewChild('accountNameRef') accountNameRef:ElementRef;
  @ViewChild('statusRef') statusRef:ElementRef;

  constructor(private loggingService:LoggingService,private accountsService:AccountsService) { 
    this.accountsService.statusAlert.subscribe(
      (status:string) => alert('New status : '+ status)
    )
  }

  ngOnInit(): void {
  }

  onAddAccount(){
    this.accountsService.onAccountAdd({
      accountName:this.accountNameRef.nativeElement.value,
      status:this.statusRef.nativeElement.value
    });
    this.loggingService.logToConsole(this.statusRef.nativeElement.value);
  }

}
