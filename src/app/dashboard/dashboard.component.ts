import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { RouterLink } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  students: any=null;

  constructor(private heroService: HeroService, private http:HttpClient) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
      this.http.get("https://localhost:7288/home/students").subscribe(data=>console.log(data));
   //   this.getStudent();
     
  }
   getStudent() {
     fetch('https://localhost:7288/home/students').then(data=>{
      console.log(data);
     
    });
    
  }
}
