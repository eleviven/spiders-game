import { Box } from "@chakra-ui/react";
import { ISpider } from "../../../types";

export interface ILine {
  lineId: number;
  spider1: ISpider;
  spider2: ISpider;
}

const Line: React.FC<ILine> = ({ lineId, spider1, spider2 }) => {
  return <Box pos="absolute" h="2px" />;
};

Line.displayName = "Line";

export default Line;
