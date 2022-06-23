import { Fragment, useRef } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import Card from "../Card/Card";
import Line from "./components/Line";
import Spider from "./components/Spider";
import { calculateIsIntersect } from "../../utils";

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
                spider={{
                  ...spider,
                  image: `/images/${spider.image}`,
                }}
                onUpdate={({ x, y }) =>
                  game.updateSpiderCoords(spider.id, { x, y })
                }
              />
            );
          })}
          {/* Lines Map */}
          {game.getLines.map((line) => {
            const spider1 = game.spiders[line.spiders[0]];
            const spider2 = game.spiders[line.spiders[1]];

            let isIntersect: object | boolean = false;

            for (let subLine of game.getLines) {
              const subSpider1 = game.spiders[subLine.spiders[0]];
              const subSpider2 = game.spiders[subLine.spiders[1]];

              const isSamePoint = [spider1.id, spider2.id].includes(
                subSpider1.id || subSpider2.id
              );

              if (isSamePoint) continue;

              isIntersect = calculateIsIntersect(
                spider1.x,
                spider1.y,
                spider2.x,
                spider2.y,
                subSpider1.x,
                subSpider1.y,
                subSpider2.x,
                subSpider2.y
              );
              break;
            }

            return (
              <Line
                key={line.id}
                lineId={line.id}
                spider1={spider1}
                spider2={spider2}
                isIntersect={!!isIntersect}
              />
            );
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
