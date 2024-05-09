import { Injectable } from '@angular/core';
import { HEROES} from "./heroes.service";
import { Hero} from "../model/interfaces";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

}
