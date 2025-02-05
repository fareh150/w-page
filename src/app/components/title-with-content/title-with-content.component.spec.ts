import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleWithContentComponent } from './title-with-content.component';

describe('TitleWithContentComponent', () => {
  let component: TitleWithContentComponent;
  let fixture: ComponentFixture<TitleWithContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleWithContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleWithContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
