import { Button, HStack } from "@chakra-ui/react";

const LevelActions: React.FC = () => {
  return (
    <HStack w="full">
      <Button size="sm" colorScheme="twitter">
        Reload Level
      </Button>
      <Button size="sm" colorScheme="gray">
        Restart
      </Button>
    </HStack>
  );
};

LevelActions.displayName = "Level Actions";

export default LevelActions;
