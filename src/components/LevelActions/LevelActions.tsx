import {
  Button,
  HStack,
  Icon,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, RefreshIcon } from "@heroicons/react/outline";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";

const LevelActions: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { game } = useStore();

  const handleReload = () => {
    game.fetchLevel(game.level);
  };

  const handleReset = () => {
    game.fetchLevel(1);
  };

  return (
    <HStack w="full">
      <Button size="sm" colorScheme="gray" onClick={handleReset}>
        Restart Game
      </Button>
      <IconButton
        icon={<Icon as={RefreshIcon} />}
        size="sm"
        colorScheme="gray"
        aria-label="Reload Level"
        onClick={handleReload}
      />
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

export default observer(LevelActions);
