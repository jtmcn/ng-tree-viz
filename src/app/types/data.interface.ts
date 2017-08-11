import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export abstract class IDataService {
  getAll: () => Observable<any>;
  getTickerCap: () => Observable<any>;
}
