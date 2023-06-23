import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbonateComponent } from './corbonate.component';

describe('CorbonateComponent', () => {
  let component: CorbonateComponent;
  let fixture: ComponentFixture<CorbonateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorbonateComponent]
    });
    fixture = TestBed.createComponent(CorbonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
