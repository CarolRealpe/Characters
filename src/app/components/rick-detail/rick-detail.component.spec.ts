import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickDetailComponent } from './rick-detail.component';

describe('RickDetailComponent', () => {
  let component: RickDetailComponent;
  let fixture: ComponentFixture<RickDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
