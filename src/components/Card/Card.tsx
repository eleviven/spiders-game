import { Box, BoxProps } from "@chakra-ui/react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

const Card: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      bg="white"
      borderColor="gray.300"
      borderWidth="1px"
      borderBottomWidth="3px"
      rounded="md"
      w="full"
      {...props}
    >
      {children}
    </Box>
  );
};

Card.displayName = "Card";

export default Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
});
