import { action, makeObservable, observable } from "mobx";

export default class GameStore {
  @observable level = 1;
  @observable spiders = {};
  @observable lines = {};

  @action getLevel(id: number) {}

  constructor() {
    makeObservable(this);
  }
}
