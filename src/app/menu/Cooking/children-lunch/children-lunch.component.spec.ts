import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenLunchComponent } from './children-lunch.component';

describe('ChildrenLunchComponent', () => {
  let component: ChildrenLunchComponent;
  let fixture: ComponentFixture<ChildrenLunchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrenLunchComponent]
    });
    fixture = TestBed.createComponent(ChildrenLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
