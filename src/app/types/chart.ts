export type Force = {
  nodes: Node[];
  links: Link[];
};

export type Node = {
  label: string;
  r: number;
  color?: string;
  index?: number;
  x?: number;
  y?: number;
};

export type Link = {
  source;
  target;
  index?: number;
};
