import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-barchart",
  styleUrls: ["./barchart.component.scss"],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="d3-chart" #chart></div>
  `
})
export class BarchartComponent implements OnInit {
  @Input() private data: Array<any>;
  constructor() {}

  ngOnInit() {}
}
