import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonsDetailComponent } from './simpsons-detail.component';

describe('SimpsonsDetailComponent', () => {
  let component: SimpsonsDetailComponent;
  let fixture: ComponentFixture<SimpsonsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpsonsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpsonsDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
