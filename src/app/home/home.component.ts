import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data/data.service';
import { IDataService } from '../types/data.interface';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  template: `
    <h3>Bar Chart</h3>
    <app-barchart *ngIf="chartData" [data]="chartData"></app-barchart>
  `
})
export class HomeComponent implements OnInit {
  chartData: Array<any>;

  constructor(private ds: IDataService) {}

  ngOnInit() {
    this.ds.getTickerCap().subscribe(result => {
      this.chartData = result;
      console.log(result);
    });
  }
}
