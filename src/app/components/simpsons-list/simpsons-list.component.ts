import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // <-- AGREGAR RouterLink
import { CommonModule } from '@angular/common'; // <-- AGREGAR CommonModule y async pipe
import { Observable } from 'rxjs'; // <-- Necesario para el Observable
import { SimpsonsService } from '../../services/simpsons.service';
import { SimpsonsCharacter } from '../../models/simpsons.model';

@Component({
  selector: 'app-simpsons-list',
  standalone: true,
  // 1. SOLUCIÓN LIMPIA para el triple clic: Saltamos la hidratación en este componente
  host: { 'ngSkipHydration': '' }, 
  imports: [CommonModule, RouterLink], 
  templateUrl: './simpsons-list.component.html',
  styleUrl: './simpsons-list.component.scss',
})
export class SimpsonsListComponent implements OnInit {
  // 2. Usamos el patrón Observable ($) para la carga asíncrona
  characters$!: Observable<SimpsonsCharacter[]>; 
  
  // Nota: Ya no necesitamos inyectar Router, pero lo dejamos si lo usas en otro lado
  constructor(private api: SimpsonsService, private router: Router) {}

  ngOnInit() {
    // 3. Asignamos el Observable directamente. El async pipe se encargará de suscribirse.
    this.characters$ = this.api.getAll();
  }

  // 4. ELIMINAMOS la función open(id) porque usaremos [routerLink] en el HTML.
}