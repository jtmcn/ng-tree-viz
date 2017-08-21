import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Company from '../types/company';

@Injectable()
export abstract class IDataService {
  getChartData: () => Observable<Company.Details[]>;
  companyByTicker: (ticker: string) => Company.Details;
  nodeColor: (ticker: string) => string;
}
