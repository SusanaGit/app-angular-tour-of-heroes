import { Component } from '@angular/core';
import { Hero } from '../model/interfaces';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  hero = 'Windstorm';

}
