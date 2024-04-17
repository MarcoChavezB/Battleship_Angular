import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableroComponent } from '../../../Components/game/tablero/tablero.component';
import { TestService } from '../../../Services/WS/test.service';




@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [
        TableroComponent,
    ],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {
    constructor(
        private readonly wbService: TestService
    ) { }

    ngOnInit() {
        this.listenWebsocket();
    }

    listenWebsocket(){
        console.log('Escuchando ')
        this.wbService.listenToTest((e: any) => {
            console.log(e);
        });
    }
}
