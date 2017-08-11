import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

export class DataServiceMock {
  public getAll(): Observable<Object> {
    return Observable.of([]);
  }
}
