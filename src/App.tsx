import { ChakraProvider } from "@chakra-ui/react";
import GamePage from "./pages/GamePage";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <GamePage />
    </ChakraProvider>
  );
};

App.displayName = "App";

export default App;
