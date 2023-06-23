import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesPastriesComponent } from './cakes-pastries.component';

describe('CakesPastriesComponent', () => {
  let component: CakesPastriesComponent;
  let fixture: ComponentFixture<CakesPastriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakesPastriesComponent]
    });
    fixture = TestBed.createComponent(CakesPastriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
