import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data/data.service';
import { IDataService } from '../data/data.interface';

import * as Chart from '../types/chart';
import * as Company from '../types/company';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  template: `
  <nav class="navbar">
  <div class="navbar-brand">
  <h3 class="navbar-item">S&P 500 Market Cap. Distribution</h3>
  </div>
  </nav>

  <div class="container"
  fxLayout="column"
  fxLayoutAlign="center">
    
  <app-force fxFlex *ngIf="chartData" [data]="chartData" (selectedNode)="onSelection($event)">
    </app-force>
  </div>

  <div class="container"
    fxLayout="column"
    fxLayoutAlign="center"
    fxLayoutGap="20px">

    <app-selection fxFlex *ngIf="selectedCompany" [selctedCompany]="selectedCompany">
    </app-selection>
  </div>




    `
})
export class HomeComponent implements OnInit {
  chartData: Array<any>;
  selectedCompany: Company.Details;

  constructor(private ds: IDataService) {}

  ngOnInit(): void {
    this.ds.getChartData().subscribe(result => (this.chartData = result));
  }

  onSelection(node: Chart.Node): void {
    this.selectedCompany = this.ds.companyByTicker(node.label);
  }
}
