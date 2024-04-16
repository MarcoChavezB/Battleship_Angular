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
    this.echoService.listen('test-channel', 'test-event', (data: any) => {
      console.log(data);
    });
  }
}
