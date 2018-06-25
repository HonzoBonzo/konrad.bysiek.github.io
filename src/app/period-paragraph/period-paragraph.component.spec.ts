import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodParagraphComponent } from './period-paragraph.component';

describe('PeriodParagraphComponent', () => {
  let component: PeriodParagraphComponent;
  let fixture: ComponentFixture<PeriodParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
