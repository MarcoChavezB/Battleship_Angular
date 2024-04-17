import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { desauthGuard } from './desauth.guard';

describe('desauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => desauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
