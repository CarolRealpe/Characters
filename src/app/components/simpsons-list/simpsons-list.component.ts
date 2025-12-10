import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SimpsonsService, SimpsonsCharacter } from '../../services/simpsons.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-simpsons-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './simpsons-list.component.html',
  styleUrl: './simpsons-list.component.scss'
})
export class SimpsonsListComponent implements OnInit {

  characters = signal<SimpsonsCharacter[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(
    private api: SimpsonsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading.set(true);
    this.error.set(null);

    this.api.getCharacters().subscribe({
      next: (res) => {
        if (Array.isArray(res)) {
          this.characters.set(res);
        } else {
          const arr = (res as any).results ?? [];
          this.characters.set(Array.isArray(arr) ? arr : []);
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error cargando Simpsons:', err);
        this.error.set('No se pudieron cargar los personajes.');
        this.characters.set([]);
        this.loading.set(false);
      }
    });
  }

  goDetail(id: number) {
    this.router.navigate(['/simpsons', id]);
  }
}