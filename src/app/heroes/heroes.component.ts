import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heros => this.heros = heros);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heros.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heros = this.heros.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
