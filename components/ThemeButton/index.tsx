import React from "react";

import { Box, useColorMode } from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";

export const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bgColor={"gray.500"}
      p={2}
      rounded={6}
      position={"fixed"}
      bottom={4}
      right={4}
      cursor={"pointer"}
      onClick={toggleColorMode}
    >
      {colorMode === "dark" ? <IoSunny /> : <IoMoon />}
    </Box>
  );
};
