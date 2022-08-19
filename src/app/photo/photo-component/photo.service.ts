import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(userName: string){
    return this.http.get<Photo[]>('https://api.football-data.org/v4/matches');
  }
}
