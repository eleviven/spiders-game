import { Box, Text } from "@chakra-ui/react";

export interface ICardHeader {
  title: string;
}

const CardHeader: React.FC<ICardHeader> = ({ title }) => {
  return (
    <Box p="3" pb="0">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {title}
      </Text>
    </Box>
  );
};

CardHeader.displayName = "CardHeader";

export default CardHeader;
