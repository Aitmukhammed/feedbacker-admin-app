import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerComponent } from './dinner.component';

describe('DinnerComponent', () => {
  let component: DinnerComponent;
  let fixture: ComponentFixture<DinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinnerComponent]
    });
    fixture = TestBed.createComponent(DinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
