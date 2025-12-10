import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface SimpsonsCharacter {
  id: number;
  name: string;
  age?: number;
  birthdate?: string;
  gender?: string;
  occupation?: string;
  status?: string;
  portrait_path?: string;
  phrases?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SimpsonsService {

  private baseUrl = 'https://thesimpsonsapi.com/api/characters';

  constructor(private http: HttpClient) {}

  // LISTA COMPLETA
  getCharacters(): Observable<SimpsonsCharacter[]> {
    return this.http.get<any>(this.baseUrl).pipe(
      map(res => res?.results ?? [])
    );
  }

  // DETALLE
  getCharacter(id: number): Observable<SimpsonsCharacter> {
    return this.http.get<SimpsonsCharacter>(`${this.baseUrl}/${id}`);
  }
}