import { HeroService } from './hero.service';
import { Component, OnInit } from "@angular/core";
import { Hero } from './hero-detail/hero';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Tour of heroes";
  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };

  constructor(private heroService: HeroService) { }

  selectedHero: Hero;

  heros: Hero[]

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heros => this.heros = heros);
  }
}


