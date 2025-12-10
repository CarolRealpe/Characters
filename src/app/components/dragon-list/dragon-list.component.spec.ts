import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonListComponent } from './dragon-list.component';

describe('DragonListComponent', () => {
  let component: DragonListComponent;
  let fixture: ComponentFixture<DragonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
