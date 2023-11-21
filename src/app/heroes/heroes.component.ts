import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule, HeroDetailComponent, RouterLink],
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

}
