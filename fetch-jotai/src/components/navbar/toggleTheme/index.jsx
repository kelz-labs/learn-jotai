import { Button, useColorMode } from "@chakra-ui/react";

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default ToggleTheme;
