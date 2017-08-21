import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Company from '../types/company';
import * as Chart from '../types/chart';

@Injectable()
export abstract class IDataService {
  getChartData: () => Observable<Chart.TreeData[]>;
  companyByTicker: (ticker: string) => Company.Details;
  nodeColor: (ticker: string) => string;
}
