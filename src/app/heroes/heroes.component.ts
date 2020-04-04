import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HEROES } from '../mock-heroes';
import { JOmnisWrapper } from 'src/OmnisWrapper';

// NO, Giacomo! you can't do that here, this is executed before Omnis starts
// const jOmnisWrapper = window['jOmnisWrapper'] as JOmnisWrapper;
// console.warn('jOmnisWrapper', jOmnisWrapper);
let jOmnisWrapper;

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {
    jOmnisWrapper = window['jOmnisWrapper'] as JOmnisWrapper;
    console.warn('jOmnisWrapper', jOmnisWrapper);
  }

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    jOmnisWrapper.sendEvent('ev_HeroSelected', hero);
  }
}
