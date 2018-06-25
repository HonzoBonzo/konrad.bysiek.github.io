import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilitiesParagraphComponent } from './responsibilities-paragraph.component';

describe('ResponsibilitiesParagraphComponent', () => {
  let component: ResponsibilitiesParagraphComponent;
  let fixture: ComponentFixture<ResponsibilitiesParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsibilitiesParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilitiesParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
