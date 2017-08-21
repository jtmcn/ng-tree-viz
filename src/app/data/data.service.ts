import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as Chart from '../types/chart';
import * as Company from '../types/company';

@Injectable()
export class DataService {
  public apiHost: string = './assets/data/constituents-financials.json';
  private allCompanies: Company.Details[];

  constructor(private http: Http) {}

  private getAll(): Observable<Object> {
    return this.http
      .get(this.apiHost)
      .map(response => {
        const resJson = response.json(); //todo: sort by symbol
        this.allCompanies = resJson;
        return resJson;
      })
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }

  public getChartData(): Observable<Chart.TreeData[]> {
    return this.getAll().map((companies: Company.Details[]) => {
      let nodes = [];
      const parentNodeLabel = 'S&P100';

      const uniqueSectors = new Set();

      for (let i in companies) {
        uniqueSectors.add(companies[i].Sector);

        nodes.push({
          label: companies[i].Ticker,
          name: companies[i].Name,
          color: this.sectorColors[companies[i].Sector],
          parent: companies[i].Sector
        });
      }

      const sectorNodes = [];
      uniqueSectors.forEach(sector => {
        sectorNodes.push({
          color: this.sectorColors[sector],
          label: sector,
          name: sector,
          parent: parentNodeLabel
        });
      });

      sectorNodes.push({
        color: '#000',
        label: parentNodeLabel,
        parent: null
      });
      return nodes.concat(sectorNodes);
    });
  }

  public companyByTicker(ticker: string): Company.Details {
    console.log(ticker);
    return this.allCompanies.filter(
      (company: Company.Details) => company.Ticker === ticker
    )[0];
  }

  private sectorColors = {
    Industrials: '#1f77b4',
    'Health Care': '#ff7f0e',
    'Information Technology': '#17becf',
    'Consumer Discretionary': '#d62728',
    Utilities: '#9467bd',
    Financials: '#8c564b',
    Materials: '#e377c2',
    'Consumer Staples': '#7f7f7f',
    'Real Estate': '#bcbd22',
    Energy: '#2ca02c',
    Telecommunications: '#ffff99',
    'Cash and Derivatives': '#0B3B17'
  };
}
