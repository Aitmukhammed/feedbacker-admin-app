import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysFoodComponent } from './babys-food.component';

describe('BabysFoodComponent', () => {
  let component: BabysFoodComponent;
  let fixture: ComponentFixture<BabysFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BabysFoodComponent]
    });
    fixture = TestBed.createComponent(BabysFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
