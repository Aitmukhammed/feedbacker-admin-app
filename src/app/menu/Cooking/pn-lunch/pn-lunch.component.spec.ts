import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnLunchComponent } from './pn-lunch.component';

describe('PnLunchComponent', () => {
  let component: PnLunchComponent;
  let fixture: ComponentFixture<PnLunchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PnLunchComponent]
    });
    fixture = TestBed.createComponent(PnLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
