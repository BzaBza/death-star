import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DStarComponent } from './d-star.component';

describe('DStarComponent', () => {
  let component: DStarComponent;
  let fixture: ComponentFixture<DStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
