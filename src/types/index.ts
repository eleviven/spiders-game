export interface ISpider {
  id: number;
  x: number;
  y: number;
  image: string;
}

export interface ILine {
  id: number;
  spiders: [number, number];
}

export interface ILevel {
  id: number;
  spiders: Record<number, ISpider>;
  lines: Record<number, ILine>;
}
