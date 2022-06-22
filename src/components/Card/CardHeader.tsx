import { Box, Text, useColorModeValue as mode } from "@chakra-ui/react";

export interface ICardHeader {
  title: string;
}

const CardHeader: React.FC<ICardHeader> = ({ title }) => {
  return (
    <Box p="3" pb="0">
      <Text
        color={mode("gray.500", "gray.300")}
        fontSize="sm"
        fontWeight="medium"
      >
        {title}
      </Text>
    </Box>
  );
};

CardHeader.displayName = "CardHeader";

export default CardHeader;
