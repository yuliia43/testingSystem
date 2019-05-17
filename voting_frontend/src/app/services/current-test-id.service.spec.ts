import { TestBed } from '@angular/core/testing';

import { CurrentTestIdService } from './current-test-id.service';

describe('CurrentTestIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentTestIdService = TestBed.get(CurrentTestIdService);
    expect(service).toBeTruthy();
  });
});
