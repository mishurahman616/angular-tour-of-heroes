import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];
  constructor(private heroService:HeroService, private messageService:MessageService){
  }
  ngOnInit():void{
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=> this.heroes = heroes);
  }
  selectedHero?: Hero;

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    this.messageService.add(`HeroComponent: Selected Hero id=${hero.id}`)
    
  }

}
