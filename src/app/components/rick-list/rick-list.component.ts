import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RickService } from '../../services/rick.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Component({
  selector: 'app-rick-list',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './rick-list.component.html',
  styleUrls: ['./rick-list.component.scss']
})
export class RickListComponent implements OnInit {

  characters$!: Observable<any[]>; 

  constructor(private api: RickService, private router: Router) {}

  ngOnInit() {
    this.characters$ = this.api.getAll().pipe(
      map((res: any) => res.results)
    );
  }
}