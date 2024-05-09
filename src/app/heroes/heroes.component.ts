import { Component } from '@angular/core';
import { Hero } from '../model/interfaces';
import {UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HEROES} from "../services/heroes.service";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  heroes = HEROES;

}
