import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  url = 'https://official-joke-api.appspot.com/jokes/ten';

  constructor(private http: HttpClient) { }

  getJokes(){
    return this.http.get(this.url);
  }
}
