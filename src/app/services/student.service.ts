import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  students:any=null;
  constructor(private http:HttpClient) { }
  getStudent():void{
     this.http.get("https://localhost:7288/Home/Students").subscribe(data=>this.students=data.toString);
  }
}
