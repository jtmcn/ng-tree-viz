import {
  Component,
  Input,
  Output,
  OnChanges,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  EventEmitter
} from '@angular/core';
import * as d3 from 'd3';

import * as Chart from '../types/chart';

@Component({
  selector: 'app-tree-chart',
  styleUrls: ['./tree-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="box">
    <div class="d3-chart" #chart></div>
  </div>
`
})
export class TreeChartComponent implements OnChanges {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() data: Array<any>;
  @Output() selectedNode: EventEmitter<any> = new EventEmitter();

  private SVGElement: d3.Selection<SVGElement, any, any, any>;
  private margin: Readonly<any> = { top: 2, bottom: 2, left: 2, right: 2 };

  constructor() {}

  ngOnChanges() {
    if (this.data) {
      this.plotChart();
    }
  }

  private plotChart() {
    const element = this.chartContainer.nativeElement;
    const svgWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const svgHeight =
      element.offsetHeight - this.margin.top - this.margin.bottom;
    const chartWidth = svgWidth - (this.margin.left + this.margin.right);
    const chartHeight = svgHeight - (this.margin.top + this.margin.bottom);

    const svg = this.drawCanvas(element, svgWidth, svgHeight);
    const chartGroup = this.createChartGroup(svg);

    const tree = this.createTree(chartWidth, chartHeight);

    const treeData = this.transformData();
  }

  private transformData() {
    return this.data;
  }

  private drawCanvas(
    element,
    svgWidth,
    svgHeight
  ): d3.Selection<SVGElement, {}, HTMLElement, any> {
    return d3
      .select(element)
      .append<SVGElement>('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight);
  }

  private createChartGroup(
    svg
  ): d3.Selection<SVGElement, {}, HTMLElement, any> {
    return svg
      .append('g')
      .classed('chartLayer', true)
      .attr(
        'transform',
        'translate(' + [this.margin.left, this.margin.top] + ')'
      );
  }

  private createTree(w, h): d3.TreeLayout<{}> {
    return d3.tree().size([w, h]);
  }
}
