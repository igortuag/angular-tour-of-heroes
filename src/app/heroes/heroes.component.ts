import { Component, OnInit } from '@angular/core';
import { Hero } from 'app/hero-detail/hero';
import { HeroService } from 'app/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heros: Hero[]

  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };

  constructor(private heroService: HeroService) { }

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heros => this.heros = heros);
  }

}
