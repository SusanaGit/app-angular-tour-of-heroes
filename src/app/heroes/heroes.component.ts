import { Component } from '@angular/core';
import { Hero } from '../model/interfaces';
import {NgFor, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HEROES} from "../services/heroes.service";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  heroes = HEROES;

  onSelect(hero: Hero) {
    console.log('test', hero.name);
  }
}
