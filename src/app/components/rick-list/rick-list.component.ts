import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RickService } from '../../services/rick.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs'; // <-- Importa Observable
import { map } from 'rxjs/operators'; // <-- Importa map

@Component({
  selector: 'app-rick-list',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './rick-list.component.html',
  styleUrls: ['./rick-list.component.scss']
})
export class RickListComponent implements OnInit {
  // Ahora es un Observable, no un array
  characters$!: Observable<any[]>; 

  constructor(private api: RickService, private router: Router) {}

  ngOnInit() {
    // Asignamos el Observable directamente.
    // El "pipe" garantiza que obtengamos solo el array de resultados.
    this.characters$ = this.api.getAll().pipe(
      map((res: any) => res.results)
    );
  }
}