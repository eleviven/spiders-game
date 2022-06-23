import React, { Fragment, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import { GameBox, LevelActions, ScoreBoard } from "../components";

const GamePage: React.FC = () => {
  const { game } = useStore();

  const initGame = () => {
    game.fetchLevel(1);
  };

  const handleLoadNextLevel = () => {
    game.fetchLevel(game.level + 1);
  };

  useEffect(() => {
    initGame();
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
      {/* Modal */}
      <Modal isOpen={!game.getIsIntersectedLines} onClose={() => {}}>
        <ModalOverlay />
        <ModalContent bg="yellow.500">
          <ModalBody>
            <Box my="4">
              <Text fontSize="xl" fontWeight="semibold">
                Great
              </Text>
              <Text mb="3">You did a good job</Text>
              <Button onClick={handleLoadNextLevel}>Next</Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

GamePage.displayName = "Game Page";

export default observer(GamePage);
