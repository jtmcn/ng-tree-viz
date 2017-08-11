import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  public apiHost: string = './assets/data/constituents-financials.json';
  constructor(private http: Http) {}

  public getAll(): Observable<Object> {
    return this.http
      .get(this.apiHost)
      .map(response => {
        return response.json();
      })
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }
}
