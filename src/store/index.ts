import { useContext, createContext } from "react";
import GameStore from "./game.store";
import TimerStore from "./timer.stote";

export class Store {
  game = new GameStore(this);
  timer = new TimerStore();
}

const StoreContext = createContext(new Store());
export const useStore = () => useContext(StoreContext);
