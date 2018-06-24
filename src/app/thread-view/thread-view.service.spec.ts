import { TestBed, inject } from '@angular/core/testing';

import { ThreadViewService } from './thread-view.service';

describe('ThreadViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreadViewService]
    });
  });

  it('should be created', inject([ThreadViewService], (service: ThreadViewService) => {
    expect(service).toBeTruthy();
  }));
});
