import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisinesOfTheWorldComponent } from './cuisines-of-the-world.component';

describe('CuisinesOfTheWorldComponent', () => {
  let component: CuisinesOfTheWorldComponent;
  let fixture: ComponentFixture<CuisinesOfTheWorldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuisinesOfTheWorldComponent]
    });
    fixture = TestBed.createComponent(CuisinesOfTheWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
