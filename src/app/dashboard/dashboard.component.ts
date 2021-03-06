import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'app/hero-detail/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[]

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
