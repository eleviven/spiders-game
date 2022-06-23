import { action, computed, makeObservable, observable } from "mobx";
import { ICoordinates, ILevel, ILine, ISpider } from "../types";

export default class GameStore {
  // State
  @observable level = 1;
  @observable spiders: Record<number, ISpider> = {};
  @observable lines: Record<number, ILine> = {};
  @observable timeRecord: number | null = null;
  @observable loading: boolean = false;

  // Actions
  @action setGame(payload: ILevel) {
    this.level = payload.id;
    this.spiders = payload.spiders;
    this.lines = payload.lines;
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

  //Getters
  @computed get getSpiders() {
    return Object.values(this.spiders);
  }
  @computed get getLines() {
    return Object.values(this.lines);
  }

  constructor() {
    makeObservable(this);
  }
}
