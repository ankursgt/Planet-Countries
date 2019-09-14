import { TestBed, inject } from '@angular/core/testing';

import { RestcountriesService } from './restcountries.service';

describe('RestcountriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestcountriesService]
    });
  });

  it('should be created', inject([RestcountriesService], (service: RestcountriesService) => {
    expect(service).toBeTruthy();
  }));
});
