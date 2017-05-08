import { Channel } from './channel/channel.model';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChannelService {
  private channels: Channel[] = [];
  private channelNames: string[] = [
    'ESL_SC2',
    'OgamingSC2',
    'cretetion',
    'freecodecamp',
    'storbeck',
    'habathcx',
    'RobotCaleb',
    'noobs2ninjas',
    'xqcow'];

  channelsChanged = new Subject<Channel[]>();

  constructor(private http: Http) { }

  initChannels() {
    for (let i = 0, n = this.channelNames.length; i < n; i++) {
      this.getChannel(this.channelNames[i])
        .subscribe(
          (channel: Channel) => {
          this.addChannel(channel);
          },
          (error) => console.log(error)
        );
    }
  }

  getChannel(name: string): Observable<Channel> {
    return this.http.get('https://wind-bow.glitch.me/twitch-api/streams/' + name)
      .map(
        (response: Response) => {
          const data = response.json();

          if (data) {
            let channel = new Channel(name, '', 'Offline', '', 'https://www.twitch.tv/' + name);
            if (data.stream) {
              channel.description = data.stream.channel.status;
              channel.imagePath = data.stream.preview.small;
              channel.onlineStatus = 'Online';
            }
            return channel;
          } else {
            return null;
          }
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getChannels(): Channel[] {
    return this.channels.slice();
  }

  addChannel(channel: Channel): number {
    let index = this.channels.push(channel);
    this.channelsChanged.next(this.channels.slice());
    return index;
  }

  checkUser(name: string): Observable<boolean> {
    return this.http.get('https://wind-bow.glitch.me/twitch-api/users/' + name)
      .map(
        (response: Response) => {
          const data = response.json();
          if (data.error) {
            return false;
          } else {
            return true;
          }

        }
      )
      .catch(
        (error: Response) => { return Observable.throw(error); }
      );
  }
}
