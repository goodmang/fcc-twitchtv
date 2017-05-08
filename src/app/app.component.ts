import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ChannelComponent } from './channel/channel.component';
import { Channel } from './channel/channel.model';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChannelService } from './channel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private channelList: Channel[] = [];
  private subscription: Subscription;
  private filter: string = "All";

  constructor(private channelService: ChannelService) {}

  ngOnInit() {
    this.subscription = this.channelService.channelsChanged
      .subscribe(
        (channels: Channel[]) => {
          this.channelList = channels;
        }
      );
    this.channelService.initChannels();
    // this.channelList = this.channelService.getChannels();
  }

  updateFilter(filter: string) {
    this.filter = filter;
  }
}
