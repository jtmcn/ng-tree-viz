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
  selector: 'app-force',
  styleUrls: ['./force-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="box">
      <div class="d3-chart" #chart></div>
    </div>
  `
})
export class ForceChartComponent implements OnChanges {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() data: Array<any>;
  @Output() selectedNode: EventEmitter<any> = new EventEmitter();

  private margin: any = { top: 2, bottom: 2, left: 2, right: 2 };
  private svgWidth: number;
  private svgHeight: number;
  private chartWidth: number;
  private chartHeight: number;
  private padding = 1.5; // separation between same-color circles
  private clusterPadding = 6; // separation between different-color circles

  constructor() {}

  ngOnChanges() {
    if (this.data) {
      this.plotChart();
    }
  }

  private clicked = (d): void => {
    this.selectedNode.emit(d);
  };

  private plotChart(): void {
    const data = this.builtData();
    const svg = this.drawCanvas();

    const totalClusters = 11; //todo: derive total

    const clusters = new Array(totalClusters);

    const simulation: any = d3
      .forceSimulation()
      .force(
        'collide',
        d3.forceCollide((d: Chart.Node): number => d.r).iterations(10)
      )
      .force('charge', d3.forceManyBody())
      .force(
        'center',
        d3.forceCenter(this.chartWidth / 2, this.chartHeight / 2)
      )
      .force('y', d3.forceY(0))
      .force('x', d3.forceX(0));

    const dragstarted = d => {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
      this.clicked(d);
    };

    const node = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('circle')
      .attr('r', function(d: Chart.Node) {
        return d.r;
      })
      .style('fill', (d: Chart.Node) => d.color)
      .on('click', this.clicked)
      .call(
        d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      );

    const ticked = function() {
      node
        .attr('cx', function(n: Chart.Node) {
          return n.x;
        })
        .attr('cy', function(d: Chart.Node) {
          return d.y;
        });
    };

    simulation.nodes(data.nodes).on('tick', ticked);

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }

  private builtData(): Chart.Force {
    const max = Math.floor(this.data.length * 0.75);
    return {
      nodes: this.data
    };
  }

  private drawCanvas(): any {
    //d3.Selection<d3.BaseType, {}, null, undefined>

    const element = this.chartContainer.nativeElement;
    this.svgWidth = element.offsetWidth - this.margin.left - this.margin.right;
    this.svgHeight =
      element.offsetHeight - this.margin.top - this.margin.bottom;
    this.chartWidth = this.svgWidth - (this.margin.left + this.margin.right);
    this.chartHeight = this.svgHeight - (this.margin.top + this.margin.bottom);

    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight)
      .append('g')
      .classed('chartLayer', true)
      .attr('width', this.chartWidth)
      .attr('height', this.chartHeight)
      .attr(
        'transform',
        'translate(' + [this.margin.left, this.margin.top] + ')'
      );

    return svg;
  }
}
