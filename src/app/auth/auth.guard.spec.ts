import { TestBed } from '@angular/core/testing';
import { Route, UrlSegment } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe(AuthGuard.name, () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canLoad', () => {
    const path = 'path';
    const fakeRoute: Route = { path };
    const fakeUrlSegment = { path } as UrlSegment;

    it('should return true if token found', () => {
      spyOn(localStorage, 'getItem').and.callFake(() => 'hello world');

      const result = guard.canLoad(fakeRoute, [fakeUrlSegment]);

      expect(result).toBeTruthy();
    });

    it('should redirect to login page if token was not found', () => {
      spyOn(localStorage, 'getItem').and.callFake(() => null);

      const result = guard.canLoad(fakeRoute, [fakeUrlSegment]);

      expect(result).toBeFalse();
    });

  });
});
