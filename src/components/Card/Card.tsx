import { forwardRef } from "react";
import { Box, BoxProps, useColorModeValue as mode } from "@chakra-ui/react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

const Card = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        bg={mode("white", "gray.600")}
        borderColor={mode("gray.300", "gray.800")}
        borderWidth="1px"
        borderBottomWidth="3px"
        rounded="md"
        w="full"
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Card.displayName = "Card";

export default Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
});
