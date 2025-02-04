import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSeparatorComponent } from './field-separator.component';

describe('FieldSeparatorComponent', () => {
  let component: FieldSeparatorComponent;
  let fixture: ComponentFixture<FieldSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldSeparatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
