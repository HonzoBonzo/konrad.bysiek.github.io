import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesParagraphComponent } from './technologies-paragraph.component';

describe('TechnologiesParagraphComponent', () => {
  let component: TechnologiesParagraphComponent;
  let fixture: ComponentFixture<TechnologiesParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
