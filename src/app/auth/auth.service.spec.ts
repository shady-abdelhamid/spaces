
import { HttpClientMock } from '../mocks/http-client.mock';

import { AuthService } from './auth.service';

describe(AuthService.name, () => {
  let service: AuthService;
  let http: HttpClientMock;

  beforeEach(() => {
    http = new HttpClientMock();
    service = new AuthService(http as any);
    http.response = { token: 'token' };

  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  describe('login', () => {

    it('should hit correct route', async () => {
      // arrange
      const correctUrl = `https://reqres.in/api/login`;
      http.lastUrl = null;

      // act
      await service.login('', '').toPromise();

      // assert
      expect(http.lastUrl).toBe(correctUrl);
    });

    it('should fire request via POST method', async () => {
      // arrange
      http.lastHttpMethod = null;

      // act
      await service.login('', '').toPromise();

      // assert
      expect(http.lastHttpMethod).toBe('POST');
    });

    it('should return a token', async () => {
      // arrange
      const correctResonse = { token: 'token' };
      http.response = correctResonse;

      // act
      const result = await service.login('', '').toPromise();

      // assert
      expect(result).toEqual(correctResonse);
    });
  });

  describe('setSession', () => {
    it('should save token into localstorage', () => {
      // arrange
      const setItem = spyOn(localStorage, 'setItem').and.callThrough();

      // act
      // @ts-ignore
      service.setSession({ token: 'token' });

      // assert
      expect(setItem).toHaveBeenCalled();
    });
  });

  describe('isLoggedIn', () => {
    it('should return true if token was found', () => {
      // arrange
      const getItem = spyOn(localStorage, 'getItem').and.callFake(() => 'token');

      // act
      const result = service.isLoggedIn();

      // assert
      expect(result).toBeTrue();
    });

    it('should return false if token was NOT found', () => {
      // arrange
      const getItem = spyOn(localStorage, 'getItem').and.callFake(() => null);

      // act
      const result = service.isLoggedIn();

      // assert
      expect(result).toBeFalse();
    });
  });

});
