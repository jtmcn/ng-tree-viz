import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-barchart',
  styleUrls: ['./barchart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="d3-chart" #chart></div>

    <ul *ngFor="let const of data">
      <li>{{ const.Name }}</li>
    </ul>
  `
})
export class BarchartComponent implements OnInit {
  @Input() data: Array<any> = [];
  constructor() {}

  ngOnInit() {}
}
