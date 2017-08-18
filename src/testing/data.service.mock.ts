import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

export class DataServiceMock {
  public getAll(): Observable<Object> {
    return Observable.of([]);
  }

  public getTickerCap(): Observable<Object> {
    return Observable.of([]);
  }

  public getChartData(): Observable<Object> {
    return Observable.of([]);
  }
}
