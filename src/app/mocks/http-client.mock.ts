import { Observable, of } from 'rxjs';

export class HttpClientMock {
  public lastUrl = '';
  public lastOptions = null;
  public response: { [key: string]: any };
  public lastHttpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  public lastBody: any;
  public get(url: string, options?: { [key: string]: any }): Observable<any> {
    this.lastUrl = url;
    this.lastOptions = options;
    this.lastHttpMethod = 'GET';

    return of(this.response);
  }

  public post(url: string, body: any, options?: { [key: string]: any }): Observable<any> {
    this.lastUrl = url;
    this.lastOptions = options;
    this.lastHttpMethod = 'POST';
    this.lastBody = body;

    return of(this.response);
  }

  public put(url: string, body: any, options?: { [key: string]: any }): Observable<any> {
    this.lastUrl = url;
    this.lastOptions = options;
    this.lastHttpMethod = 'PUT';
    this.lastBody = body;

    return of(this.response);
  }

  public delete(url: string, options?: { [key: string]: any }): Observable<any> {
    this.lastUrl = url;
    this.lastOptions = options;
    this.lastHttpMethod = 'DELETE';

    return of(this.response);
  }
}
