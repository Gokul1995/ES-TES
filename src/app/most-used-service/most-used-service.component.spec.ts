import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostUsedServiceComponent } from './most-used-service.component';

describe('MostUsedServiceComponent', () => {
  let component: MostUsedServiceComponent;
  let fixture: ComponentFixture<MostUsedServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostUsedServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostUsedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
