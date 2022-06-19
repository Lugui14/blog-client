import type { NextPage } from "next";

import { Flex, Heading } from "@chakra-ui/react";

import { ThemeButton } from "../components/ThemeButton";

const Home: NextPage = () => {
  return (
    <>
      <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <Heading>Hello Chakra UI</Heading>
      </Flex>

      <ThemeButton />
    </>
  );
};

export default Home;
