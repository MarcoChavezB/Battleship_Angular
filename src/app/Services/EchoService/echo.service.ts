import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import Echo from 'laravel-echo';
import { isPlatformBrowser } from '@angular/common';
import {environment} from "@environments/environments";
import {HttpClient} from "@angular/common/http";
declare global {
  interface Window {
    Echo: Echo | undefined;
    Pusher: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class EchoService {

  private testURL ="http://127.0.0.1:8000/api/sendevent"

  private echo?: Echo;


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeEcho();
    }
  }

  private initializeEcho(): void {
    import('pusher-js').then((Pusher) => {
      window.Pusher = Pusher.default;
      this.setupEcho();
    });
  }

  private setupEcho(): void {
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: environment.pusher.key,
      cluster: environment.pusher.cluster,
      encrypted: true,
      disableStats: true,
      logToConsole: true,
    });
  }

  public listen(channel: string, event: string, callback: Function): void {
    this.echo?.channel(channel).listen(event, (data: any) => {
      callback(data);
    });
  }

  public leaveChannel(channel: string): void {
    this.echo?.leave(channel);
  }

  public listentest(callback: (e: any) => void) {
    this.echo?.channel('.*').listen('.*', (e: any) => {
      callback(e);
    });
  }

testEndpoint(){
    return this.http.post(this.testURL, {})
}


}
