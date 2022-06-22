import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import Card from "../Card/Card";
import Line from "./components/Line";
import Spider from "./components/Spider";

const GameBox: React.FC = () => {
  const { game } = useStore();

  return (
    <Card pos="relative" h="60vh" bg="white">
      {game.getSpiders.map((spider) => (
        <Spider
          key={spider.id}
          spider={{
            ...spider,
            image: `/images/${spider.image}`,
          }}
        />
      ))}
      {game.getLines.map((line) => {
        const spider1 = game.spiders[line.spiders[0]];
        const spider2 = game.spiders[line.spiders[1]];
        return (
          <Line
            key={line.id}
            lineId={line.id}
            spider1={spider1}
            spider2={spider2}
          />
        );
      })}
    </Card>
  );
};

GameBox.displayName = "Game Box";

export default observer(GameBox);
