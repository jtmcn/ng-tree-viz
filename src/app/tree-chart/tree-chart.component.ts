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
  @Input() data: Array<Chart.TreeNode>;
  @Output() selectedNode: EventEmitter<any> = new EventEmitter();

  private SVGElement: d3.Selection<SVGElement, any, any, any>;
  private margin: Readonly<any> = { top: 2, bottom: 2, left: 2, right: 2 };

  constructor() {}

  ngOnChanges() {
    if (this.data) {
      this.plotChart();
    }
  }

  private plotChart(): void {
    const element = this.chartContainer.nativeElement;
    const svgWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const svgHeight =
      element.offsetHeight - this.margin.top - this.margin.bottom;
    const chartWidth = svgWidth - (this.margin.left + this.margin.right);
    const chartHeight = svgHeight - (this.margin.top + this.margin.bottom);

    const svg = this.drawCanvas(element, svgWidth, svgHeight);
    const chartGroup = this.createChartGroup(svg);

    const tree = this.createTree(chartWidth, chartHeight);

    const treeData = this.transformData(this.data);

    const treeNodes = tree(treeData);

    const treeLinks = this.makeLinks(treeNodes, chartGroup);

    const node = this.makeNodes(treeNodes, chartGroup);

    this.appendNodes(node);
  }

  private appendNodes(node): void {
    node.append('circle').attr('r', 10);
    // adds the text to the node
    node
      .append('text')
      .attr('dy', '.35em')
      .attr('x', function(d) {
        return d.children ? -13 : 13;
      })
      .style('text-anchor', function(d) {
        return d.children ? 'end' : 'start';
      })
      .text(function(d) {
        return d.data.name;
      });
  }

  private makeNodes(nodes, chartGroup) {
    return chartGroup
      .selectAll('.node')
      .data(nodes.descendants())
      .enter()
      .append('g')
      .attr('class', function(d) {
        return 'node' + (d.children ? ' node--internal' : ' node--leaf');
      })
      .attr('transform', function(d) {
        return 'translate(' + d.y + ',' + d.x + ')';
      });
  }

  private makeLinks(nodes: d3.HierarchyNode<any>, chartGroup) {
    return chartGroup
      .selectAll('.link')
      .data(nodes.descendants().slice(1))
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', function(d) {
        return (
          'M' +
          d.y +
          ',' +
          d.x +
          'C' +
          (d.y + d.parent.y) / 2 +
          ',' +
          d.x +
          ' ' +
          (d.y + d.parent.y) / 2 +
          ',' +
          d.parent.x +
          ' ' +
          d.parent.y +
          ',' +
          d.parent.x
        );
      });
  }

  private transformData(data): d3.HierarchyNode<any> {
    const flatData = d3
      .stratify()
      .id((d: Chart.TreeNode) => d.label)
      .parentId((d: Chart.TreeNode) => d.parent)(data);
    return d3.hierarchy(flatData, d => d.children);
  }

  private drawCanvas(
    element,
    svgWidth: number,
    svgHeight: number
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

  private createTree(w: number, h: number): d3.TreeLayout<{}> {
    return d3.tree().size([w, h]);
  }
}
