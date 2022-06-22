import { ChakraProvider, ColorMode, extendTheme } from "@chakra-ui/react";
import { AppLayout } from "./components/layouts";
import GamePage from "./pages/GamePage";

const theme = extendTheme({
  styles: {
    global: ({ theme, colorMode }: { theme: any; colorMode: ColorMode }) => {
      return {
        body: {
          backgroundColor:
            colorMode === "light"
              ? (theme.colors.gray[100] as any)
              : (theme.colors.gray[900] as any),
        },
      };
    },
  },
});

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppLayout>
        <GamePage />
      </AppLayout>
    </ChakraProvider>
  );
};

App.displayName = "App";

export default App;
