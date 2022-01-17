import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent implements OnInit {

  @Output() accounts = new EventEmitter<{accountName:string,status:string}>();
  @ViewChild('accountNameRef') accountNameRef:ElementRef;
  @ViewChild('statusRef') statusRef:ElementRef;

  constructor(private loggingService:LoggingService) { }

  ngOnInit(): void {
  }

  onAddAccount(){
    this.accounts.emit({
      accountName:this.accountNameRef.nativeElement.value,
      status:this.statusRef.nativeElement.value
    });
    this.loggingService.logToConsole(this.statusRef.nativeElement.value);
  }

}
