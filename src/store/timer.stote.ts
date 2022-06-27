import { action, makeObservable, observable } from "mobx";

let timerListener: ReturnType<typeof setInterval>;

class TimerStore {
  @observable value = 0;

  @action increase() {
    this.value += 1;
  }

  @action reset() {
    this.value = 0;
  }

  @action stop() {
    clearInterval(timerListener);
  }

  @action subscribe() {
    timerListener = setInterval(() => this.increase(), 1000);
  }

  @action unsubscribe() {
    clearInterval(timerListener);
    this.reset();
  }
  constructor() {
    makeObservable(this);
  }
}

export default TimerStore;
