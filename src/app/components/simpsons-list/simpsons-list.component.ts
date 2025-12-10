import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // <-- AGREGAR RouterLink
import { CommonModule } from '@angular/common'; // <-- AGREGAR CommonModule y async pipe
import { Observable } from 'rxjs'; // <-- Necesario para el Observable
import { SimpsonsService } from '../../services/simpsons.service';
import { SimpsonsCharacter } from '../../models/simpsons.model';

@Component({
  selector: 'app-simpsons-list',
  standalone: true,

  host: { 'ngSkipHydration': '' }, 
  imports: [CommonModule, RouterLink], 
  templateUrl: './simpsons-list.component.html',
  styleUrl: './simpsons-list.component.scss',
})
export class SimpsonsListComponent implements OnInit {
  characters$!: Observable<SimpsonsCharacter[]>; 
  
  constructor(private api: SimpsonsService, private router: Router) {}

  ngOnInit() {
    this.characters$ = this.api.getAll();
  }
}