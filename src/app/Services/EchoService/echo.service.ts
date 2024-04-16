import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import Echo from 'laravel-echo';
import {isPlatformBrowser} from "@angular/common";
declare global {
  interface Window {
    Echo: Echo | undefined;
    Pusher: any;
  }
}

@Injectable({
  providedIn: 'root',
})
export class EchoService {
  private echo?: Echo;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
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


  listen(channel: string, event: string, callback: (data: any) => void) {
    this.echo?.channel(channel).listen(event, (data: any) => {
      callback(data);
    });
  }

}

