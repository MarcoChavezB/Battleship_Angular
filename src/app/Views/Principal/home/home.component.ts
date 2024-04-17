import { Component, HostListener } from '@angular/core';
import {EchoService} from "@services/EchoService/echo.service";
import {LoaderTypeOneComponent} from "@components/Loaders/loader-type-one/loader-type-one.component";
import {NgIf} from "@angular/common";
import {GameInstanceService} from "@services/GameInstance/game-instance.service";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LoaderTypeOneComponent,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  test: Boolean = false;
  test2: Boolean = false;

  constructor(
    private gameInstanceService: GameInstanceService,
    private echoService: EchoService) {}

  ngOnInit() {
    this.echoService.listentest( (data) => {
      console.log("AAAAAAAAAAAA", data);
    });
    console.log('Listening to test-channel');

    this.echoService.testEndpoint().subscribe((data) => {
      console.log('Data from testEndpoint:', data);
    });

  }

  startQueue() {
    this.test = true;
    this.gameInstanceService.startQueue().subscribe(
      data => {
        localStorage.setItem('gameId', data.gameId);
    },
      err =>{

      });
  }

  joinRandomGame() {
    this.test2 = true;
    this.gameInstanceService.joinRandomGame().subscribe(
      data => {
        console.log('Joined game:', data);
        localStorage.setItem('gameId', data.gameId);
      },
      err =>{

      }
    );
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.test) {
      this.test = false;
      this.gameInstanceService.dequeueGame().subscribe(data => {
        console.log('Dequeued game:', data);
        localStorage.removeItem('gameId');
      });
    }else if (event.key === 'Escape' && this.test2) {
      this.test2 = false;
    }
  }
}
