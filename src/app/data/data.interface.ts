import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Company from '../types/company';

@Injectable()
export abstract class IDataService {
  getAll: () => Observable<any>;
  getTickerCap: () => Observable<any>;
  getChartData: () => Observable<any>;
  companyByTicker: (ticker: string) => Company.Details;
  nodeColor: (ticker: string) => string;
}
