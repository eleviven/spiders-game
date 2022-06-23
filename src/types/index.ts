export interface ISpider extends ICoordinates {
  id: number;
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

export interface ICoordinates {
  x: number;
  y: number;
}
