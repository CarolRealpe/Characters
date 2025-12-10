import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SimpsonsService {
  private base = 'https://api.sampleapis.com/simpsons/characters';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.base);
  }

  getById(id: string) {
    return this.http.get<any>(`${this.base}/${id}`);
  }
}
