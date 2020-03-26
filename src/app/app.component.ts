import { Component, OnInit } from '@angular/core';
import { JokesService } from './services/jokes.service';
import { jokesInterface } from './joke.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  jokes: jokesInterface;

  constructor(private jokesService: JokesService){
  }

  ngOnInit(){
    this.jokesService
        .getJokes()
        .subscribe((response:jokesInterface) => this.jokes = response);
  }
}
