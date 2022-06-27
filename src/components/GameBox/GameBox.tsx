import { Fragment, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import Card from "../Card/Card";
import Line from "./components/Line";
import Spider from "./components/Spider";
import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
} from "@chakra-ui/react";

const GameBox: React.FC = () => {
  const gameBoxRef = useRef<HTMLDivElement | null>(null);
  const { game, timer } = useStore();

  const isLevelEnd = !game.getIsIntersectedLines && !game.isInteract;
  const isGameEnd = game.ended;

  const handleNextLevel = () => {
    game.nextLevel();
  };

  const handleRestart = () => {
    game.fetchLevel(1);
  };

  useEffect(() => {
    timer.subscribe();
    return () => {
      timer.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.loading]);

  useEffect(() => {
    if (isLevelEnd || isGameEnd) {
      return timer.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLevelEnd, isGameEnd]);

  return (
    <Card ref={gameBoxRef} pos="relative" h="60vh" bg="white">
      {!game.loading ? (
        <Fragment>
          {/* Spiders Map */}
          {game.getSpiders.map((spider) => {
            return (
              <Spider
                key={spider.id}
                gameBoxRef={gameBoxRef}
                spiderId={spider.id}
              />
            );
          })}
          {/* Lines Map */}
          {game.getLines.map((line) => {
            return <Line key={line.id} line={line} />;
          })}
        </Fragment>
      ) : (
        <Center h="full">
          <Spinner size="lg" />
        </Center>
      )}
      {/* Congrats Modal */}
      {game.getIsLevelEnd && !isGameEnd && (
        <Modal isOpen={true} onClose={handleNextLevel}>
          <ModalOverlay />
          <ModalContent bg="yellow.500">
            <ModalBody>
              <Box my="4">
                <Text fontSize="xl" fontWeight="semibold">
                  Great
                </Text>
                <Text mb="3">You did a good job</Text>
                <Button onClick={handleNextLevel}>Next</Button>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      {/* End Game Modal */}
      {isGameEnd && (
        <Modal isOpen={true} onClose={handleNextLevel}>
          <ModalOverlay />
          <ModalContent bg="green.500">
            <ModalBody>
              <Box my="4">
                <Text color="white" fontSize="xl" fontWeight="semibold">
                  Game Over
                </Text>
                <Text color="white" mb="3">
                  You have completed all levels
                </Text>
                <Button onClick={handleRestart}>Restart</Button>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Card>
  );
};

GameBox.displayName = "Game Box";

export default observer(GameBox);
