import { Component } from '@angular/core';
import {EchoService} from "@services/EchoService/echo.service";
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
    this.echoService.listentest( (data) => {
      console.log("AAAAAAAAAAAA", data);
    });
    console.log('Listening to test-channel');

    this.echoService.testEndpoint().subscribe((data) => {
      console.log('Data from testEndpoint:', data);
    });



    console.log('EHHH');
  }
}
