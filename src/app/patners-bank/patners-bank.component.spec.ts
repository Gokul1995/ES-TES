import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnersBankComponent } from './patners-bank.component';

describe('PatnersBankComponent', () => {
  let component: PatnersBankComponent;
  let fixture: ComponentFixture<PatnersBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatnersBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatnersBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
