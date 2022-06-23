import { Fragment, useRef } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import Card from "../Card/Card";
import Line from "./components/Line";
import Spider from "./components/Spider";

const GameBox: React.FC = () => {
  const { game } = useStore();
  const gameBoxRef = useRef<HTMLDivElement | null>(null);

  return (
    <Card ref={gameBoxRef} pos="relative" h="60vh" bg="white">
      {!game.loading ? (
        <Fragment>
          {/* Spiders Map */}
          {game.getSpiders.map((spider) => {
            return (
              <Spider
                key={spider.id}
                gameBoxRef={gameBoxRef}
                spiderId={spider.id}
              />
            );
          })}
          {/* Lines Map */}
          {game.getLines.map((line) => {
            return <Line key={line.id} line={line} />;
          })}
        </Fragment>
      ) : (
        "loading..."
      )}
    </Card>
  );
};

GameBox.displayName = "Game Box";

export default observer(GameBox);
