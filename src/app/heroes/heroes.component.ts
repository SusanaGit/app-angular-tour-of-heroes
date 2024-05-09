import { Component } from '@angular/core';
import { Hero } from '../model/interfaces';
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}
