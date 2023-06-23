import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbalComponent } from './herbal.component';

describe('HerbalComponent', () => {
  let component: HerbalComponent;
  let fixture: ComponentFixture<HerbalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerbalComponent]
    });
    fixture = TestBed.createComponent(HerbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
