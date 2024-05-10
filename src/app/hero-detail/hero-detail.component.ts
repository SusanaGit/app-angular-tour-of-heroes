import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf, UpperCasePipe} from "@angular/common";
import { Hero } from '../model/interfaces';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
    imports: [
        FormsModule,
        NgIf,
        UpperCasePipe
    ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})

export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
) {}

}
