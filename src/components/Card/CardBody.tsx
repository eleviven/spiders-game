import { Box, BoxProps } from "@chakra-ui/react";

const CardBody: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box p="3" {...props}>
      {children}
    </Box>
  );
};

CardBody.displayName = "CardBody";

export default CardBody;
