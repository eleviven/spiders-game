import { Box } from "@chakra-ui/react";
import { ISpider } from "../../../types";
import { calculateAngel, calculateDistance, numWithPx } from "../../../utils";

export interface ILine {
  lineId?: number;
  spider1: ISpider;
  spider2: ISpider;
  isIntersect: boolean;
}

const Line: React.FC<ILine> = ({ spider1, spider2, isIntersect }) => {
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
      bg={isIntersect ? "red.500" : "yellow.500"}
    />
  );
};

Line.displayName = "Line";

export default Line;
