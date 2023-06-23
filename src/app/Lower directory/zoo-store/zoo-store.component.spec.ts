import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooStoreComponent } from './zoo-store.component';

describe('ZooStoreComponent', () => {
  let component: ZooStoreComponent;
  let fixture: ComponentFixture<ZooStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZooStoreComponent]
    });
    fixture = TestBed.createComponent(ZooStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
