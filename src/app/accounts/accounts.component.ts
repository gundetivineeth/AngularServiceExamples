import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers:[LoggingService]
})
export class AccountsComponent implements OnInit {

  @Input() accounts;

  constructor(private loggingService:LoggingService) { }

  ngOnInit(): void {
  }

  onClickActive(){
    this.accounts.status = "Active";
    this.loggingService.logToConsole("Active");
  }
  onClickInActive(){
    this.accounts.status = "InActive";
    this.loggingService.logToConsole("InActive");
  }
  onClickUnknown(){
    this.accounts.status = "Unknown";
    this.loggingService.logToConsole("Unknown");
  }
}
