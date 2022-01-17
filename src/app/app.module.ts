import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountsService } from './accounts.service';

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
