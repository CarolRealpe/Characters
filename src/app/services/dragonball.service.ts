import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DragonBallService {
  private base = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(`${this.base}?limit=100`);
  }

  getById(id: string) {
    return this.http.get<any>(`${this.base}/${id}`);
  }
}
