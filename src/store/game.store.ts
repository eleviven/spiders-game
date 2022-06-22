import { action, computed, makeObservable, observable } from "mobx";
import { ILevel, ILine, ISpider } from "../types";

export default class GameStore {
  // State
  @observable level = 1;
  @observable spiders: Record<number, ISpider> = {};
  @observable lines: Record<number, ILine> = {};
  @observable timeRecord: number | null = null;

  // Actions
  @action setGame(payload: ILevel) {
    this.level = payload.id;
    this.spiders = payload.spiders;
    this.lines = payload.lines;
  }
  @action fetchLevel(id: number) {
    const data = require(`../levels/level-${id}.json`);
    this.setGame(data);
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
