import { Component, Input, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers:[LoggingService]
})
export class AccountsComponent implements OnInit {

  @Input() accounts;

  constructor(private loggingService:LoggingService,private accountsService:AccountsService) { }

  ngOnInit(): void {
  }

  onClickStatus(status:string){
    this.accounts.status = status;
    this.loggingService.logToConsole(status);
    this.accountsService.statusAlert.emit(status);
  }
  
}
