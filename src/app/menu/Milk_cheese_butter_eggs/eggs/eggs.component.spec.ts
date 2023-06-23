import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsComponent } from './eggs.component';

describe('EggsComponent', () => {
  let component: EggsComponent;
  let fixture: ComponentFixture<EggsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EggsComponent]
    });
    fixture = TestBed.createComponent(EggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
