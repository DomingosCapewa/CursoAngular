import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OlaMundo } from "./components/ola-mundo/ola-mundo";
import { Perfil } from './components/perfil/perfil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OlaMundo, Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula01');
}
