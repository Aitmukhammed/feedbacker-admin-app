import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaCoffeeCacoaComponent } from './tea-coffee-cacoa.component';

describe('TeaCoffeeCacoaComponent', () => {
  let component: TeaCoffeeCacoaComponent;
  let fixture: ComponentFixture<TeaCoffeeCacoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeaCoffeeCacoaComponent]
    });
    fixture = TestBed.createComponent(TeaCoffeeCacoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
