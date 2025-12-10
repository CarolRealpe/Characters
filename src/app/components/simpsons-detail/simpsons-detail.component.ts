import { Component, OnInit, signal } from '@angular/core'; // <-- Incluir OnInit y signal
import { ActivatedRoute, RouterLink } from '@angular/router'; // <-- Incluir RouterLink
import { SimpsonsService } from '../../services/simpsons.service';
import { SimpsonsCharacter } from '../../models/simpsons.model';
import { CommonModule, JsonPipe } from '@angular/common'; // <-- Incluir CommonModule y JsonPipe
import { switchMap } from 'rxjs/operators'; // Para la reactividad de la ruta

@Component({
  selector: 'app-simpsons-detail',
  standalone: true,
  // Para que el editor no muestre errores en el HTML:
  imports: [CommonModule, RouterLink, JsonPipe], 
  templateUrl: './simpsons-detail.component.html',
  styleUrls: ['./simpsons-detail.component.scss']
})
export class SimpsonsDetailComponent implements OnInit {
  
  character = signal<SimpsonsCharacter | null>(null);

  constructor(private route: ActivatedRoute, private api: SimpsonsService) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id')!; 
        return this.api.getById(id); 
      })
    ).subscribe(res => {
      this.character.set(res);
    });
  }
}