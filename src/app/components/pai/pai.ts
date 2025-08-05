import { Component, signal, WritableSignal } from '@angular/core';
import { Filho } from "../filho/filho";

@Component({
  selector: 'app-pai',
  imports: [Filho],
  templateUrl: './pai.html',
  styleUrl: './pai.css'
})
export class Pai {
 nomeFilho = signal("Vinicios")
}
