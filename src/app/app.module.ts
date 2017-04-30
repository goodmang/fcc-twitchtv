import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelComponent } from './channel/channel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChannelListComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
