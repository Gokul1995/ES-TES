import { TestBed } from '@angular/core/testing';

import { MainSliderService } from './main-slider.service';

describe('MainSliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainSliderService = TestBed.get(MainSliderService);
    expect(service).toBeTruthy();
  });
});
