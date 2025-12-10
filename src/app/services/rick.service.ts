import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RickService {
  private base = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.base);
  }

  getById(id: string) {
    return this.http.get(`${this.base}/${id}`);
  }
}
