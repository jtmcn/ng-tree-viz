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
    return Observable.of([
      { color: '#000', label: 'S&P100', parent: null },
      {
        color: '#17becf',
        label: 'Information Technology',
        name: 'Information Technology',
        parent: 'S&P100'
      },
      {
        label: 'AAPL',
        name: 'APPLE INC',
        color: '#17becf',
        parent: 'Information Technology'
      }
    ]);
  }
}
