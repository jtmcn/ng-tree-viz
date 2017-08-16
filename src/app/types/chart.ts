export type Chart = {
  nodes: Node[];
  links: Link[];
};

export type Node = {
  label: string;
  r: number;
  index?: number;
  x?: number;
  y?: number;
};

export type Link = {
  source;
  target;
  index?: number;
};

export type Point = {
  index: number;
  label: string;
  r: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};
