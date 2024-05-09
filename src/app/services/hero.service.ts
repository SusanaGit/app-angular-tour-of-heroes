import { Injectable } from '@angular/core';
import { HEROES} from "./heroes.service";
import { Hero} from "../model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
