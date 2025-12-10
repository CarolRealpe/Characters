import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SimpsonsService, SimpsonsCharacter } from '../../services/simpsons.service';
@Component({
  selector: 'app-simpsons-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simpsons-detail.component.html',
  styleUrls: ['./simpsons-detail.component.scss']
})
export class SimpsonsDetailComponent implements OnInit {

  character = signal<SimpsonsCharacter | null>(null);
  loading = signal<boolean>(true);
  errorMsg = signal<string | null>(null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: SimpsonsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.errorMsg.set('Invalid ID');
      this.loading.set(false);
      return;
    }

    this.api.getCharacter(id).subscribe({
      next: (res: SimpsonsCharacter) => {
        this.character.set(res);
        this.loading.set(false);
      },
      error: (err: unknown) => {
        console.error('Error in detail:', err);
        this.errorMsg.set('Character not found');
        this.loading.set(false);
      }
    });
  }

  backToList() {
    this.router.navigate(['/simpsons']);
  }
}