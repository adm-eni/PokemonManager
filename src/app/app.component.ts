import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GenerationsComponent} from "./src/components/generations/generations.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenerationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PokemonManager';
}
