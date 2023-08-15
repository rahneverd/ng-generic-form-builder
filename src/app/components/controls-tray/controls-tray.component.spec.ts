import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsTrayComponent } from './controls-tray.component';

describe('ControlsTrayComponent', () => {
  let component: ControlsTrayComponent;
  let fixture: ComponentFixture<ControlsTrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlsTrayComponent]
    });
    fixture = TestBed.createComponent(ControlsTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
