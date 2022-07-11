import { Flex, Heading } from "@chakra-ui/react";
import ToggleTheme from "./toggleTheme";

const Navbar = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <Heading>/jotai</Heading>
      <ToggleTheme />
    </Flex>
  );
};

export default Navbar;
