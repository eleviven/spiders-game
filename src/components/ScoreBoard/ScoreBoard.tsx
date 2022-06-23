import { Fragment } from "react";
import { Box, BoxProps, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import Card from "../Card/Card";
import { getTimerFromSeconds } from "../../utils";

const ScoreBoard: React.FC<BoxProps> = () => {
  const { game } = useStore();

  const actualTime = getTimerFromSeconds(game.timeActual);
  const bestTime = getTimerFromSeconds(game.timeRecord || 0);

  return (
    <Card>
      <Card.Header title="The time you spend" />
      <Card.Body>
        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            {actualTime}
          </Text>
        </Box>
      </Card.Body>
      {game.timeRecord ? (
        <Fragment>
          <Card.Header title="Your Best" />
          <Card.Body>
            <Box>
              <Text fontSize="xl" fontWeight="semibold">
                {bestTime}
              </Text>
            </Box>
          </Card.Body>
        </Fragment>
      ) : null}
    </Card>
  );
};

ScoreBoard.displayName = "Score Board";

export default observer(ScoreBoard);
