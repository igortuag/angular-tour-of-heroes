import { HeroService } from './hero.service';
import { Component } from "@angular/core";
import { Hero } from './hero-detail/hero';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Tour of heroes";
  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };

  constructor(private heroService: HeroService) { }

  selectedHero: Hero;

  heros: Hero[] = this.heroService.getHeroes();

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}


