import { useContext, createContext } from "react";
import GameStore from "./game.store";

class Store {
  game = new GameStore();
}

const StoreContext = createContext(new Store());
export const useStore = () => useContext(StoreContext);
