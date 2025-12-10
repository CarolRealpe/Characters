// DragonListComponent.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { DragonBallService } from '../../services/dragonball.service';
import { DragonCharacter } from '../../models/dragon.model';

@Component({
  selector: 'app-dragon-list',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './dragon-list.component.html',
  styleUrl: './dragon-list.component.scss'
})
export class DragonListComponent implements OnInit {

  characters$!: Observable<DragonCharacter[]>; 

  constructor(private api: DragonBallService, private router: Router) {}

  ngOnInit() {

    this.characters$ = this.api.getAll().pipe(
       map((res: any) => res.items ?? [])
    );
 }
}