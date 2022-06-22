import {
  Button,
  HStack,
  Icon,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

const LevelActions: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack w="full">
      <Button size="sm" colorScheme="twitter">
        Reload Level
      </Button>
      <Button size="sm" colorScheme="gray">
        Restart
      </Button>
      <IconButton
        icon={<Icon as={colorMode === "dark" ? SunIcon : MoonIcon} />}
        size="sm"
        colorScheme="gray"
        aria-label="Change Theme"
        onClick={toggleColorMode}
      />
    </HStack>
  );
};

LevelActions.displayName = "Level Actions";

export default LevelActions;
