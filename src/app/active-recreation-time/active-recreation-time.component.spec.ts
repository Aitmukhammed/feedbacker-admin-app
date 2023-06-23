import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRecreationTimeComponent } from './active-recreation-time.component';

describe('ActiveRecreationTimeComponent', () => {
  let component: ActiveRecreationTimeComponent;
  let fixture: ComponentFixture<ActiveRecreationTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveRecreationTimeComponent]
    });
    fixture = TestBed.createComponent(ActiveRecreationTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
