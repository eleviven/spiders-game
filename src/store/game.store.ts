import { action, computed, makeObservable, observable } from "mobx";
import { ICoordinates, ILevel, ILine, ISpider } from "../types";

export default class GameStore {
  // State
  @observable level = 1;
  @observable spiders: Record<number, ISpider> = {};
  @observable lines: Record<number, ILine> = {};
  @observable timeRecord: number | null = null;
  @observable intersectedLines: Record<number, boolean> = {};
  @observable loading: boolean = true;

  // Actions
  @action setGame(payload: ILevel) {
    this.level = payload.id;
    this.spiders = payload.spiders;
    this.lines = payload.lines;
    this.intersectedLines = {};
    this.loading = false;
  }
  @action fetchLevel(id: number) {
    this.loading = true;
    setTimeout(() => {
      const data = require(`../levels/level-${id}.json`);
      this.setGame(data);
    }, 0);
  }
  @action updateSpiderCoords(id: number, payload: ICoordinates) {
    const spider = this.spiders[id];
    spider.x = payload.x;
    spider.y = payload.y;
  }
  @action setTimeRecord(value: number) {
    this.timeRecord = value;
  }
  @action setIntersectedLine(id: number, payload: boolean) {
    const current = this.intersectedLines[id];
    if (current && payload) return;
    if (!current && !payload) return;
    this.intersectedLines[id] = payload;
  }

  //Getters
  @computed get getSpiders(): ISpider[] {
    return Object.values(this.spiders);
  }
  @computed get getLines(): ILine[] {
    return Object.values(this.lines);
  }
  @computed get getIsIntersectedLines(): boolean {
    const list = Object.values(this.intersectedLines);
    if (this.loading || list.length === 0) {
      return true;
    }
    return list.filter((i) => i).length !== 0;
  }

  constructor() {
    makeObservable(this);
  }
}
