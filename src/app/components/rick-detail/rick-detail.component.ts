import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RickService } from '../../services/rick.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rick-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './rick-detail.component.html',
  styleUrls: ['./rick-detail.component.scss']
})
export class RickDetailComponent implements OnInit {
  character = signal<any | null>(null); // signal con null inicial

  constructor(private route: ActivatedRoute, private api: RickService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.getById(id).subscribe(res => {
      this.character.set(res);
    });
  }
}
