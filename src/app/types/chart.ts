export type Force = {
  nodes: Node[];
};

export type Node = {
  label: string;
  r: number;
  color?: string;
  index?: number;
  x?: number;
  y?: number;
};
