import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWeaponComponent } from './main-weapon.component';

describe('MainWeaponComponent', () => {
  let component: MainWeaponComponent;
  let fixture: ComponentFixture<MainWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWeaponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
