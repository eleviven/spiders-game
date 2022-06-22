import React from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { GameBox, LevelActions, ScoreBoard } from "../components";

const GamePage: React.FC = () => {
  return (
    <Flex gap="4" flexWrap="wrap">
      <Box flexGrow="1">
        <GameBox />
      </Box>
      <VStack spacing="5" w={{ base: "full", lg: "72" }}>
        <ScoreBoard />
        <LevelActions />
      </VStack>
    </Flex>
  );
};

GamePage.displayName = "Game Page";

export default GamePage;
