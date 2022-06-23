import React, { Fragment, useEffect } from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import { GameBox, LevelActions, ScoreBoard } from "../components";

const GamePage: React.FC = () => {
  const { game } = useStore();

  useEffect(() => {
    game.fetchLevel(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {/* Game Arena */}
      <Flex gap="4" flexWrap="wrap">
        <Box flexGrow="1">
          <GameBox />
        </Box>
        <VStack spacing="5" w={{ base: "full", lg: "72" }}>
          <ScoreBoard />
          <LevelActions />
        </VStack>
      </Flex>
    </Fragment>
  );
};

GamePage.displayName = "Game Page";

export default observer(GamePage);
