import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableroComponent } from '../../../Components/game/tablero/tablero.component';




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

}
