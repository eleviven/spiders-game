import { Box } from "@chakra-ui/react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useMemo } from "react";
import { useStore } from "../../../store";
import { ICoordinates, ILine, ISpider } from "../../../types";
import {
  calculateAngel,
  calculateDistance,
  calculateIsIntersect,
  numWithPx,
} from "../../../utils";

export interface ILineProps {
  line: ILine;
}

const Line: React.FC<ILineProps> = ({ line }) => {
  const { game } = useStore();
  const spider1 = game.spiders[line.spiders[0]];
  const spider2 = game.spiders[line.spiders[1]];

  const distance = calculateDistance(
    spider1.x,
    spider1.y,
    spider2.x,
    spider2.y
  );

  const angel = calculateAngel(spider1.x, spider1.y, spider2.x, spider2.y);

  const centerWidth = 20;
  const x = spider1.x + centerWidth;
  const y = spider1.y + centerWidth;

  // loop all lines and check is intersect another line or not
  const isIntersect = useMemo(
    () =>
      calculateLineIsIntersect({
        line,
        lines: game.getLines,
        spiders: game.spiders,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [toJS(game.spiders)]
  );

  useEffect(() => {
    game.setIntersectedLine(line.id, isIntersect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersect]);

  return (
    <Box
      pos="absolute"
      zIndex={0}
      top={numWithPx(y)}
      left={numWithPx(x)}
      h="2px"
      w={numWithPx(distance)}
      transform={`rotate(${angel}deg)`}
      transformOrigin="top left"
      bg={game.intersectedLines[line.id] ? "red.500" : "yellow.500"}
    />
  );
};

const calculateLineIsIntersect = ({
  spiders,
  lines,
  line,
}: {
  spiders: Record<number, ISpider>;
  lines: ILine[];
  line: ILine;
}) => {
  let isIntersect: ICoordinates | boolean = false;

  const spider1 = spiders[line.spiders[0]];
  const spider2 = spiders[line.spiders[1]];

  for (let subLine of lines) {
    const subSpider1 = spiders[subLine.spiders[0]];
    const subSpider2 = spiders[subLine.spiders[1]];

    const isSamePoint =
      [spider1.id, spider2.id].includes(subSpider1.id) ||
      [spider1.id, spider2.id].includes(subSpider2.id);

    if (isSamePoint) continue;

    const intersect = calculateIsIntersect(
      spider1.x,
      spider1.y,
      spider2.x,
      spider2.y,
      subSpider1.x,
      subSpider1.y,
      subSpider2.x,
      subSpider2.y
    );
    isIntersect = intersect;
    if (intersect) break;
  }

  return !!isIntersect;
};

Line.displayName = "Line";

export default observer(Line);
