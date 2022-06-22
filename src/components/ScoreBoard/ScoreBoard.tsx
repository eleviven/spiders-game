import { Box, BoxProps, Text } from "@chakra-ui/react";
import Card from "../Card/Card";

const ScoreBoard: React.FC<BoxProps> = () => {
  return (
    <Card>
      <Card.Header title="The time you spend" />
      <Card.Body>
        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            00:30s
          </Text>
        </Box>
      </Card.Body>
      <Card.Header title="Your Best" />
      <Card.Body>
        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            00:12s
          </Text>
        </Box>
      </Card.Body>
    </Card>
  );
};

ScoreBoard.displayName = "Score Board";

export default ScoreBoard;
