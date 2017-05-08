import { ChannelService } from './channel.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelComponent } from './channel/channel.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChannelListComponent,
    ChannelComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
