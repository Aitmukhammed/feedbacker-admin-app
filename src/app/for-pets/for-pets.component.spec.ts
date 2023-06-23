import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPetsComponent } from './for-pets.component';

describe('ForPetsComponent', () => {
  let component: ForPetsComponent;
  let fixture: ComponentFixture<ForPetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForPetsComponent]
    });
    fixture = TestBed.createComponent(ForPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
