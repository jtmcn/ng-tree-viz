import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-barchart',
  styleUrls: ['./barchart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="d3-chart" #chart></div>
    <h5>hello barchart</h5>
  `
})
export class BarchartComponent implements OnInit {
  @Input() private data: Array<any>;
  constructor(private ds: DataService) {}

  ngOnInit() {
    this.ds.sayHello();
  }
}
