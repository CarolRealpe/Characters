import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SimpsonsService } from '../../services/simpsons.service';
import { SimpsonsCharacter } from '../../models/simpsons.model';
import { CommonModule, JsonPipe } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-simpsons-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, JsonPipe],
  templateUrl: './simpsons-detail.component.html',
  styleUrls: ['./simpsons-detail.component.scss'] // <-- corregido
})
export class SimpsonsDetailComponent {
  character = signal<SimpsonsCharacter | null>(null);

  constructor(private route: ActivatedRoute, private api: SimpsonsService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.getById(id).subscribe(res => {
      console.log("SIM DETAIL:", res);
      this.character.set(res);
    });
  }
}
