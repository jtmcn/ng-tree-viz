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
  @Input() data: Array<Chart.TreeData>;
  @Output() selectedNode: EventEmitter<any> = new EventEmitter();

  private SVGElement: d3.Selection<SVGElement, any, any, any>;
  private margin: Readonly<any> = { top: 20, bottom: 20, left: 20, right: 20 };
  private duration: Readonly<number> = 750;

  private svg: d3.Selection<SVGElement, any, any, any>;
  private tree: d3.TreeLayout<{}>;
  private element;
  private i = 0;

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

    this.svg = this.drawCanvas(element, svgWidth, svgHeight);

    this.tree = this.createTree(chartWidth, chartHeight);

    const root = this.transformData(this.data);
    //todo: root.sort()
    root.x0 = chartHeight / 2;
    root.y0 = 0;
    root.children.forEach(collapse);
    this.updateChart(root);

    function collapse(d: Chart.TreeNodes): void {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }
  }

  private updateChart(source: Chart.TreeNodes): void {
    const tree = this.tree(source);
    const nodes = tree.descendants();
    const links = tree.descendants().slice(1);

    const click = d => {
      console.log('click', d);
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      this.selectedNode.emit(d.data.data);
      this.updateChart(source);
    };

    nodes.forEach(function(d) {
      d.y = d.depth * 400;
    });

    const node = this.svg
      .selectAll('g.node')
      .data(nodes, (d: any) => d.id || (d.id = ++this.i));

    const nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr(
        'transform',
        (d: Chart.TreeNodes) => 'translate(' + source.y0 + ',' + source.x0 + ')'
      )
      .on('click', click);

    // Add Circle for the nodes
    nodeEnter.append('circle').attr('class', 'node').attr('r', 1e-6);

    // Add labels for the nodes
    nodeEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('x', (d: Chart.TreeNodes) => (d.children || d._children ? -13 : 13))
      .attr(
        'text-anchor',
        (d: Chart.TreeNodes) => (d.children || d._children ? 'end' : 'start')
      )
      .classed(
        'node--internal',
        (d: Chart.TreeNodes) => (d.children || d._children ? true : false)
      )
      .text((d: Chart.TreeNodes) => d.data.data.name);

    // UPDATE
    const nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate
      .transition()
      .duration(this.duration)
      .attr(
        'transform',
        (d: Chart.TreeNodes) => 'translate(' + d.y + ',' + d.x + ')'
      );

    // Update the node attributes and style
    nodeUpdate
      .select('circle.node')
      .attr('r', 10)
      .style('stroke', (d: Chart.TreeNodes) => d.data.data.color)
      .style(
        'fill',
        (d: Chart.TreeNodes) =>
          d._children || d.depth === 2 ? d.data.data.color : '#fff'
      )
      .attr('cursor', 'pointer');

    // Remove any exiting nodes
    const nodeExit = node
      .exit()
      .transition()
      .duration(this.duration)
      .attr('transform', function(d) {
        return 'translate(' + source.y + ',' + source.x + ')';
      })
      .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle').attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text').style('fill-opacity', 1e-6);

    // ****************** links section ***************************

    // Update the links...
    const link = this.svg
      .selectAll('path.link')
      .data(links, function(d: Chart.TreeNodes) {
        return d.id;
      });

    // Enter any new links at the parent's previous position.
    const linkEnter = link
      .enter()
      .insert('path', 'g')
      .attr('class', 'link')
      .attr('d', function(d) {
        const o = { x: source.x0, y: source.y0 };
        return diagonal(o, o);
      });

    // UPDATE
    const linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition().duration(this.duration).attr('d', function(d) {
      return diagonal(d, d.parent);
    });

    // Remove any exiting links
    const linkExit = link
      .exit()
      .transition()
      .duration(this.duration)
      .attr('d', function(d) {
        const o = { x: source.x, y: source.y };
        return diagonal(o, o);
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d: Chart.TreeNodes) {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    // Creates a curved (diagonal) path from parent to the child nodes

    function diagonal(s, d) {
      const path = `M ${s.y} ${s.x}
        C ${(s.y + d.y) / 2} ${s.x},
          ${(s.y + d.y) / 2} ${d.x},
          ${d.y} ${d.x}`;
      return path;
    }
  }

  private transformData(data): Chart.TreeNodes {
    const flatData = d3
      .stratify()
      .id((d: Chart.TreeData) => d.label)
      .parentId((d: Chart.TreeData) => d.parent)(data);
    return d3.hierarchy(flatData, d => d.children);
  }

  private drawCanvas(
    element,
    svgWidth: number,
    svgHeight: number
  ): d3.Selection<any, any, any, any> {
    return d3
      .select(element)
      .append<SVGElement>('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );
  }

  private createTree(w: number, h: number): d3.TreeLayout<{}> {
    return d3.tree().size([h, w]).separation((a: Chart.TreeNodes, b) => {
      return a.parent == b.parent ? 1 : 1.2;
    });
  }
}
