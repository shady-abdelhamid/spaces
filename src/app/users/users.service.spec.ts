import { UsersService } from './users.service';
import { HttpClientMock } from '../mocks/http-client.mock';
import { User } from './user.model';

describe('UsersService', () => {
  let service: UsersService;
  let http: HttpClientMock;

  beforeEach(() => {
    http = new HttpClientMock();
    service = new UsersService(http as any);
    http.response = {
      data: [{
        first_name: 'first_name',
        last_name: 'last_name',
        email: 'email',
        avatar: 'avatar',
        job: 'job',
      }]
    };
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  describe('getUsers', () => {

    it('should hit correct route', async () => {
      const correctUrl = `https://reqres.in/api/users`;
      http.lastUrl = null;

      await service.getUsers().toPromise();

      expect(http.lastUrl).toBe(correctUrl);
    });

    it('should fire request via GET method', async () => {
      http.lastHttpMethod = null;

      await service.getUsers().toPromise();

      expect(http.lastHttpMethod).toBe('GET');
    });

    it('should return users', async () => {
      const [userData] = http.response.data;

      const result = await service.getUsers().toPromise();

      expect(result).toBeInstanceOf(Array);
      expect(result).toContain(new User(userData));
    });
  });

  describe('getUserById', () => {
    let id;
    let correctUrl;
    beforeEach(() => {
      id = 1;
      correctUrl = `https://reqres.in/api/users/${id}`;
    });

    it('should hit correct route', async () => {
      http.lastUrl = null;

      await service.getUserById(id).toPromise();

      expect(http.lastUrl).toBe(correctUrl);
    });

    it('should fire request via GET method', async () => {
      http.lastHttpMethod = null;

      await service.getUserById(id).toPromise();

      expect(http.lastHttpMethod).toBe('GET');
    });

    it('should return user', async () => {
      http.response = {
        data: {
          id: 1,
          email: 'george.bluth@reqres.in',
          first_name: 'George',
          last_name: 'Bluth',
          avatar: 'https://reqres.in/img/faces/1-image.jpg'
        }
      };

      const result = await service.getUserById(id).toPromise();

      expect(result).toBeInstanceOf(User);

    });
  });

  describe('createUser', () => {
    let id;
    let correctUrl;
    beforeEach(() => {
      id = 1;
      correctUrl = `https://reqres.in/api/users`;
    });

    it('should hit correct route', async () => {
      http.lastUrl = null;

      await service.createUser('', '').toPromise();

      expect(http.lastUrl).toBe(correctUrl);
    });

    it('should fire request via POST method', async () => {
      http.lastHttpMethod = null;

      await service.createUser('', '').toPromise();

      expect(http.lastHttpMethod).toBe('POST');
    });

    it('should return user', async () => {
      http.response = {
        data: {
          id: 1,
          name: 'George Bluth',
          job: 'job'
        }
      };

      const result = await service.createUser('', '').toPromise();

      expect(result).toBeInstanceOf(User);

    });
  });

  describe('updateUser', () => {
    let id;
    let correctUrl;
    beforeEach(() => {
      id = 1;
      correctUrl = `https://reqres.in/api/users/${id}`;
    });

    it('should hit correct route', async () => {
      http.lastUrl = null;

      await service.updateUser(id, '', '').toPromise();

      expect(http.lastUrl).toBe(correctUrl);
    });

    it('should fire request via PUT method', async () => {
      http.lastHttpMethod = null;

      await service.updateUser(id, '', '').toPromise();

      expect(http.lastHttpMethod).toBe('PUT');
    });

    it('should return user', async () => {
      http.response = {
        data: {
          id: 1,
          name: 'George Bluth',
          job: 'job'
        }
      };

      const result = await service.updateUser(id, '', '').toPromise();

      expect(result).toBeInstanceOf(User);

    });
  });

});
