import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClausuleComponent } from './clausule.component';

describe('ClausuleComponent', () => {
  let component: ClausuleComponent;
  let fixture: ComponentFixture<ClausuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClausuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClausuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
