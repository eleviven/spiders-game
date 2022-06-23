import { action, computed, makeObservable, observable } from "mobx";
import { ICoordinates, ILevel, ILine, ISpider } from "../types";

export default class GameStore {
  // State
  @observable level = 0;
  @observable spiders: Record<number, ISpider> = {};
  @observable lines: Record<number, ILine> = {};
  @observable timeActual: number = 0;
  @observable timeRecord: number = 0;
  @observable intersectedLines: Record<number, boolean> = {};
  @observable loading: boolean = true;
  @observable ended: boolean = false;

  // Actions
  @action setGame(payload: ILevel) {
    this.level = payload.id;
    this.spiders = payload.spiders;
    this.lines = payload.lines;
    this.timeActual = 0;
    this.intersectedLines = {};
    this.loading = false;
    this.ended = false;
  }
  @action fetchLevel(id: number) {
    this.loading = true;
    setTimeout(() => {
      try {
        const data = require(`../levels/level-${id}.json`);
        if (!data) return;
        this.setGame(data);
      } catch (error) {
        this.loading = false;
        this.ended = true;
      }
    }, 0);
  }
  @action nextLevel() {
    if (this.timeRecord === 0 || this.timeRecord > this.timeActual) {
      this.timeRecord = this.timeActual;
    }
    this.fetchLevel(this.level + 1);
  }
  @action updateSpiderCoords(id: number, payload: ICoordinates) {
    const spider = this.spiders[id];
    spider.x = payload.x;
    spider.y = payload.y;
  }
  @action setTimeRecord(value: number) {
    this.timeRecord = value;
  }
  @action setTimeActual(value: number) {
    this.timeActual = value;
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
    if (list.length === 0) {
      return true;
    }
    return list.filter((i) => i).length !== 0;
  }

  constructor() {
    makeObservable(this);
  }
}
