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
  private margin: Readonly<any> = { top: 2, bottom: 2, left: 2, right: 2 };
  private duration: Readonly<number> = 750;

  private svg: d3.Selection<SVGElement, any, any, any>;
  private tree: d3.TreeLayout<{}>;
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
    const treeNodes = this.tree(source);
    const nodes = treeNodes.descendants();
    const links = treeNodes.descendants().slice(1);

    const click = d => {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      this.updateChart(source);
    };

    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      // d.y = d.depth * 180;
    });

    const node = this.svg
      .selectAll('g.node')
      .data(nodes, (d: any) => d.id || (d.id = ++this.i));

    const nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', function(d) {
        return 'translate(' + source.y0 + ',' + source.x0 + ')';
      })
      .on('click', click);

    // Add Circle for the nodes
    nodeEnter
      .append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style('fill', function(d: Chart.TreeNodes) {
        // console.log(d);
        return d._children ? 'lightsteelblue' : '#fff';
      });

    // Add labels for the nodes
    nodeEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('x', function(d: Chart.TreeNodes) {
        return d.children || d._children ? -13 : 13;
      })
      .attr('text-anchor', function(d: Chart.TreeNodes) {
        return d.children || d._children ? 'end' : 'start';
      })
      .text(function(d: Chart.TreeNodes) {
        console.log(d);
        return d.data.data.name;
      });

    // UPDATE
    const nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate
      .transition()
      .duration(this.duration)
      .attr('transform', function(d) {
        return 'translate(' + d.y + ',' + d.x + ')';
      });

    // Update the node attributes and style
    nodeUpdate
      .select('circle.node')
      .attr('r', 10)
      .style('fill', function(d: Chart.TreeNodes) {
        return d._children ? 'lightsteelblue' : '#fff';
      })
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
    // ): d3.Selection<SVGElement, {}, HTMLElement, any> {
    return d3
      .select(element)
      .append<SVGElement>('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
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

  /////////////////////////////////////////

  /////////////////////////////////////////
  /////////////////////////////////////////

  /////////////////////////////////////////

  // private appendNodes(node): void {
  //   node.append('circle').attr('r', 10);
  //   // adds the text to the node
  //   node
  //     .append('text')
  //     .attr('dy', '.35em')
  //     .attr('x', function(d) {
  //       return d.children || d._children ? -13 : 13;
  //     })
  //     .style('text-anchor', function(d) {
  //       return d.children || d._children ? 'end' : 'start';
  //     })
  //     .text(function(d) {
  //       return d.data.label;
  //     });
  // }

  // private makeNodes(nodes, chartGroup) {
  //   return chartGroup
  //     .selectAll('.node')
  //     .data(nodes.descendants())
  //     .enter()
  //     .append('g')
  //     .attr('class', function(d) {
  //       return 'node' + (d.children ? ' node--internal' : ' node--leaf');
  //     })
  //     .attr('transform', function(d) {
  //       return 'translate(' + d.y + ',' + d.x + ')';
  //     });
  // }

  // private makeLinks(nodes: d3.HierarchyNode<any>, chartGroup) {
  //   return chartGroup
  //     .selectAll('.link')
  //     .data(nodes.descendants().slice(1))
  //     .enter()
  //     .append('path')
  //     .attr('class', 'link')
  //     .attr('d', function(d) {
  //       return (
  //         'M' +
  //         d.y +
  //         ',' +
  //         d.x +
  //         'C' +
  //         (d.y + d.parent.y) / 2 +
  //         ',' +
  //         d.x +
  //         ' ' +
  //         (d.y + d.parent.y) / 2 +
  //         ',' +
  //         d.parent.x +
  //         ' ' +
  //         d.parent.y +
  //         ',' +
  //         d.parent.x
  //       );
  //     });
  // }

  // private createChartGroup(
  //   svg
  // ): d3.Selection<SVGElement, {}, HTMLElement, any> {
  //   return svg
  //     .append('g')
  //     .classed('chartLayer', true)
  //     .attr(
  //       'transform',
  //       'translate(' + [this.margin.left, this.margin.top] + ')'
  //     );
  // }
}
