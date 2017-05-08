import { Channel } from './../channel/channel.model';
import { ChannelService } from './../channel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private invalidUser: boolean = false;

  constructor(private channelService: ChannelService) { }

  ngOnInit() {
  }

  addUser(usernameInput: HTMLInputElement) {
    this.channelService.checkUser(usernameInput.value)
      .subscribe(
        (result: boolean) => {
          if (result) {
            this.channelService.getChannel(usernameInput.value)
              .subscribe(
                (channel: Channel) => {
                  if (channel) {
                    this.channelService.addChannel(channel);
                    this.invalidUser = false;
                    usernameInput.value = '';
                  }
                }
              );
          } else {
            this.invalidUser = true;
            usernameInput.value = '';
          }
        },
        (result: any) => {
          console.log('something bad happened.')
        }
      );
  }
}
