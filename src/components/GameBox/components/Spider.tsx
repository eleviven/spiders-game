import { useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { motion, ResolvedValues, useAnimation } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../store";
import { ISpider } from "../../../types";

export interface ISPiderProps {
  gameBoxRef: React.RefObject<HTMLElement>;
  spiderId: number;
}

const Spider: React.FC<ISPiderProps> = ({ gameBoxRef, spiderId }) => {
  const { game } = useStore();
  const control = useAnimation();

  const spider: ISpider = game.spiders[spiderId];
  // this function will trigger when every spider dragging
  const handleUpdate = (latest: ResolvedValues) => {
    game.updateSpiderCoords?.(spider.id, {
      x: Number(latest.x),
      y: Number(latest.y),
    });
  };

  useEffect(() => {
    control.set({ x: spider.x, y: spider.y });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      as={motion.div}
      animate={control}
      drag={true}
      dragConstraints={gameBoxRef} // Gamebox is our frame
      dragElastic={0}
      dragMomentum={false}
      whileTap={{
        zIndex: 10,
        scale: 1.1,
      }}
      onUpdate={handleUpdate}
      position="absolute"
      zIndex="5"
      w="10"
      h="10"
      userSelect="none"
    >
      <Image
        src={`/images/${spider.image}`}
        alt="spider"
        w="full"
        h="full"
        draggable="false"
      />
    </Box>
  );
};

Spider.displayName = "Spider";

export default observer(Spider);
