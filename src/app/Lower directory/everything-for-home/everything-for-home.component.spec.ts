import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingForHomeComponent } from './everything-for-home.component';

describe('EverythingForHomeComponent', () => {
  let component: EverythingForHomeComponent;
  let fixture: ComponentFixture<EverythingForHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EverythingForHomeComponent]
    });
    fixture = TestBed.createComponent(EverythingForHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
