import * as d3 from 'd3';

export type TreeData = {
  label?: string;
  value?: number;
  name?: string;
  parent;
  data?;
  color?: string;
};

export interface TreeNodes extends d3.HierarchyNode<any> {
  x0?: number;
  y0?: number;
  x?: number;
  y?: number;
  _children?;
}
