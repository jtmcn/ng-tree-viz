import { Component, OnInit } from '@angular/core';
import { IDataService } from '../data/data.interface';

import * as Chart from '../types/chart';
import * as Company from '../types/company';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  template: `
    <div class="container"
      fxLayout="row"
      fxLayoutAlign="center"
      fxLayoutGap="20px">
      <h3 fxFlex="20%">{{appTitle}}</h3>
    </div>

    <div class="container"
    fxLayout="column"
    fxLayoutAlign="center">
      
    <app-tree-chart fxFlex *ngIf="chartData" [data]="chartData" (selectedNode)="onSelection($event)">
      </app-tree-chart>
    </div>

    <div class="container"
      fxLayout="row"
      fxLayoutAlign="center"
      fxLayoutGap="20px">
      <app-selection fxFlex [selctedCompany]="selectedCompany">
      </app-selection>
    </div>
  `
})
export class HomeComponent implements OnInit {
  appTitle = 'S&P 100 by Sector';
  chartData: Array<Chart.TreeData>;
  selectedCompany: Company.Details;

  constructor(private ds: IDataService) {}

  ngOnInit(): void {
    this.ds.getChartData().subscribe(result => (this.chartData = result));
  }

  onSelection(node: Chart.TreeData): void {
    this.selectedCompany = this.ds.companyByTicker(node.label);
  }
}
