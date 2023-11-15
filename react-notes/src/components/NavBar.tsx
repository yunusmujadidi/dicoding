import { HStack, Heading } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Heading size="xl" fontWeight="">
        simpleNotes
      </Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
