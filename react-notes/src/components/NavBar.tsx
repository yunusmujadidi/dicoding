import { HStack, Heading } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import React from "react";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Heading size="2xl" padding="3">
        simpleNotes
      </Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
