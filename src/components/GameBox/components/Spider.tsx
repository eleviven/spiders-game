import { Box, Image } from "@chakra-ui/react";
import { motion, ResolvedValues } from "framer-motion";
import { ICoordinates, ISpider } from "../../../types";

export interface ISPiderProps {
  gameBoxRef: React.RefObject<HTMLElement>;
  spider: ISpider;
  onUpdate?: (latest: ICoordinates) => void;
}

const Spider: React.FC<ISPiderProps> = ({ gameBoxRef, spider, onUpdate }) => {
  // this function will trigger when every spider dragging
  const handleUpdate = (latest: ResolvedValues) => {
    onUpdate?.({
      x: Number(latest.x),
      y: Number(latest.y),
    });
  };

  return (
    <Box
      as={motion.div}
      drag={true}
      dragConstraints={gameBoxRef} // Gamebox is our frame
      dragElastic={0}
      dragMomentum={false}
      whileTap={{
        zIndex: 10,
        scale: 1.1,
      }}
      initial={{
        x: spider.x, // initial x position of spider
        y: spider.y, // initial y position of spider
      }}
      onUpdate={handleUpdate}
      position="absolute"
      zIndex="5"
      w="10"
      h="10"
      userSelect="none"
    >
      <Image
        src={spider.image}
        alt="spider"
        w="full"
        h="full"
        draggable="false"
      />
    </Box>
  );
};

Spider.displayName = "Spider";

export default Spider;
