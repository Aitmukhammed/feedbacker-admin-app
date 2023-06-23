import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthySnackComponent } from './healthy-snack.component';

describe('HealthySnackComponent', () => {
  let component: HealthySnackComponent;
  let fixture: ComponentFixture<HealthySnackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthySnackComponent]
    });
    fixture = TestBed.createComponent(HealthySnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
