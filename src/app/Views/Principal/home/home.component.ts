import { Component } from '@angular/core';
import {EchoService} from "../../../Services/EchoService/echo.service";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private echoService: EchoService) {}

  ngOnInit() {
    console.log('Listening to test-channel');

    this.echoService.listentest( (data) => {
      console.log("AAAAAAAAAAAA", data);
    });

    console.log('EHHH');
  }
}
