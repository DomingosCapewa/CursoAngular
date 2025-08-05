import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OlaMundo } from "./components/ola-mundo/ola-mundo";
import { Perfil } from './components/perfil/perfil';
import { Pai } from './components/pai/pai';
import { Filho } from "./components/filho/filho";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OlaMundo, Perfil, Pai, Filho],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Exemplo de propety binding';
  urlImagem = "https://tse4.mm.bing.net/th/id/OIP.aoxaG6k5TyiMs6kDYSP6WQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
  private mensagem = "minha mensagem";

  getMensagem() {
    return this.mensagem;
  }
}