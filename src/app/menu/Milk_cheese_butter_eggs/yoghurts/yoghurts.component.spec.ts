import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoghurtsComponent } from './yoghurts.component';

describe('YoghurtsComponent', () => {
  let component: YoghurtsComponent;
  let fixture: ComponentFixture<YoghurtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoghurtsComponent]
    });
    fixture = TestBed.createComponent(YoghurtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
