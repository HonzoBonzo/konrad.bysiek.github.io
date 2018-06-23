import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguaguesComponent } from './languagues.component';

describe('LanguaguesComponent', () => {
  let component: LanguaguesComponent;
  let fixture: ComponentFixture<LanguaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
