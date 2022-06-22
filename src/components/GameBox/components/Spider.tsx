import { Box, Image } from "@chakra-ui/react";
import { ISpider } from "../../../types";

export interface ISPiderProps {
  spider: ISpider;
}

const Spider: React.FC<ISPiderProps> = ({ spider }) => {
  return (
    <Box pos="absolute" w="10" h="10">
      <Image src={spider.image} alt="Spider" />
    </Box>
  );
};

Spider.displayName = "Spider";

export default Spider;
