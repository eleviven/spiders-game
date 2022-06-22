import { Box } from "@chakra-ui/react";
import Card from "../Card/Card";

const GameBox: React.FC = () => {
  return (
    <Card h="60vh" bg="white">
      <Box>Hello World</Box>
    </Card>
  );
};

GameBox.displayName = "Game Box";

export default GameBox;
