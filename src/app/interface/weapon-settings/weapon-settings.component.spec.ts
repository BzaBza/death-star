import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponSettingsComponent } from './weapon-settings.component';

describe('WeaponSettingsComponent', () => {
  let component: WeaponSettingsComponent;
  let fixture: ComponentFixture<WeaponSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
