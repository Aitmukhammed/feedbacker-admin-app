import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumplingsComponent } from './dumplings.component';

describe('DumplingsComponent', () => {
  let component: DumplingsComponent;
  let fixture: ComponentFixture<DumplingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DumplingsComponent]
    });
    fixture = TestBed.createComponent(DumplingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
