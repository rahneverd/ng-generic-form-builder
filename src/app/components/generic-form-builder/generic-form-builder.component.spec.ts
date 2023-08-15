import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormBuilderComponent } from './generic-form-builder.component';

describe('GenericFormBuilderComponent', () => {
  let component: GenericFormBuilderComponent;
  let fixture: ComponentFixture<GenericFormBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericFormBuilderComponent]
    });
    fixture = TestBed.createComponent(GenericFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
