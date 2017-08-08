import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  styleUrls: ["./home.component.scss"],
  template: `
    <h3>Bar Chart</h3>
    <app-barchart *ngIf="chartData" [data]="chartData"></app-barchart>
  `
})
export class HomeComponent implements OnInit {
  private chartData: Array<any>;

  constructor() {}

  ngOnInit() {}
}
