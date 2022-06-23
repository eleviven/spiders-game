import { Container, Center } from "@chakra-ui/react";

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Center minH="100vh" pb="20" pt="4">
      <Container maxW="container.lg">{children}</Container>
    </Center>
  );
};

AppLayout.displayName = "App Layout";

export default AppLayout;
