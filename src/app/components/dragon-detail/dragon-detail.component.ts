import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragonBallService } from '../../services/dragonball.service';
import { DragonCharacter } from '../../models/dragon.model';
import { CommonModule} from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-dragon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.scss']
})
export class DragonDetailComponent {

  character = signal<DragonCharacter | null>(null);

  constructor(private route: ActivatedRoute, private api: DragonBallService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.getById(id).subscribe(res => {
      console.log("DRAGON DETAIL:", res);
      this.character.set(res);
    });
  }
}
