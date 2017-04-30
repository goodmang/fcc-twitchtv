import { Component, OnInit } from '@angular/core';
import { ChannelComponent } from "./channel/channel.component";
import { Channel } from "./channel/channel.model";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  channels: Channel[] = [
    new Channel(
      'ESL_SC2 (test)',
      'https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-320x180.jpg', 
      true,
      'RERUN: TY vs. GuMiho [TvT] - Quarterfinal - IEM Katowice 2017',
      'https://www.twitch.tv/esl_sc2'
      ),
    new Channel(
      'Test_channel',
      '',
      false,
      '',
      'https://www.twitch.tv/test_channel')
  ];

  ngOnInit() {

  }


}
