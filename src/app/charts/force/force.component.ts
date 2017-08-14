import {
  Component,
  Input,
  OnInit,
  OnChanges,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';
import * as d3 from 'd3';

import * as ChartData from '../../types/chart-data';
// import DataPoint from '../../types/data-point';

@Component({
  selector: 'app-force',
  styleUrls: ['./force.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <h3>Force Chart</h3>
    <div class="d3-chart" #chart></div>
  `
})
export class ForceComponent implements OnInit {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() data: Array<any>;

  private margin: any = { top: 20, bottom: 20, left: 20, right: 20 };
  // private chart: any;
  private svgWidth: number;
  private svgHeight: number;
  private chartWidth: number;
  private chartHeight: number;

  constructor() {}

  ngOnInit() {
    this.createChart();
    if (this.data) {
      // this.updateChart();
    }
  }

  private builtData(): ChartData.Chart {
    const range = 100;
    return {
      nodes: d3.range(0, range).map(function(d) {
        console.log(d);
        return {
          label: 'l' + d,
          r: Math.floor(d3.randomUniform(8, 28)())
        };
      }),
      links: d3.range(0, range).map(function() {
        const outLinks = {
          source: Math.floor(d3.randomUniform(range)()),
          target: Math.floor(d3.randomUniform(range)())
        };
        // console.log(outLinks);
        return outLinks;
      })
    };
  }

  private createChart(): void {
    // const margin: any = { top: 20, bottom: 20, left: 20, right: 20 };
    // let chartWidth, chartHeight, width, height;
    const element = this.chartContainer.nativeElement;
    const data = this.builtData();

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

    // console.log(data);
    this.drawChart(data, svg);
  }

  private drawChart(data, svg) {
    const simulation: any = d3
      .forceSimulation()
      .force(
        'link',
        d3.forceLink().id(function(d: ChartData.Point) {
          // console.log(d);

          return d.index.toString();
        })
      )
      .force(
        'collide',
        d3
          .forceCollide(function(d: ChartData.Point): number {
            return d.r + 8;
          })
          .iterations(16)
      )
      .force('charge', d3.forceManyBody())
      .force(
        'center',
        d3.forceCenter(this.chartWidth / 2, this.chartHeight / 2)
      )
      .force('y', d3.forceY(0))
      .force('x', d3.forceX(0));

    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
      .attr('stroke', 'black');

    const node = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('circle')
      .attr('r', function(d: ChartData.Point) {
        // console.log(d);
        return d.r;
      })
      .call(
        d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      );

    const ticked = function() {
      link
        .attr('x1', function(d: ChartData.Link) {
          return d.source.x;
        })
        .attr('y1', function(d: ChartData.Link) {
          return d.source.y;
        })
        .attr('x2', function(d: ChartData.Link) {
          return d.target.x;
        })
        .attr('y2', function(d: ChartData.Link) {
          return d.target.y;
        });

      node
        .attr('cx', function(d: ChartData.Point) {
          return d.x;
        })
        .attr('cy', function(d: ChartData.Point) {
          return d.y;
        });
    };

    simulation.nodes(data.nodes).on('tick', ticked);

    simulation.force('link').links(data.links);

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

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
}
