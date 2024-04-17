import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [
    CommonModule
],
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.css'
})
export class TableroComponent {
    tablero: number[][] = [];
    myTurn = true;

    constructor() { }

    ngOnInit() {
        this.inicializarTablero();
        this.initGame()
    }

    inicializarTablero() {
        this.tablero = Array.from({ length: 8 }, () => Array(15).fill(0));
    }

    // la casilla seleccionada cambia el valor de la casilla a 1
    casilla_selected(fila: number, columna: number) {
        if(!this.myTurn) return;
        this.tablero[fila][columna] = 2;
        this.myTurn = false;
        
    }

    initGame(){
        for (let i = 0; i < 15; i++) {
            let fila = Math.floor(Math.random() * 8);
            let columna = Math.floor(Math.random() * 15);
            this.tablero[fila][columna] = 1;
        }
    }

    checkBoats(){
        let boats = 0;
        this.tablero.forEach(fila => {
            fila.forEach(casilla => {
                if (casilla === 1) boats++;
            });
        });
        return boats;
    }
}
