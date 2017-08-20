import * as d3 from 'd3';

export type TreeData = {
  label?: string;
  value?: number;
  parent;
  color?: string;
};

export interface TreeNodes extends d3.HierarchyNode<any> {
  x0?: number;
  y0?: number;
  x?: number;
  y?: number;
  _children?;
}

// export type TreeNode = {
//   children?;
//   parent;
//   ancestors;
//   descendants;
//   leaves;
//   path;
//   links;
//   sum;
//   data: TreeData;
//   depth: number;
//   height: number;
//   id?: string;
//   x?: number;
//   y?: number;
//   x0?: number;
//   y0?: number;
// };

// export type Tree = {
//   name: string;
//   children: Child[];
// };

// type Child = {
//   name: string;
//   children: string[];
// };
