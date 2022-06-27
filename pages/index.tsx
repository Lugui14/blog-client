import type { NextPage } from "next";
import Head from "next/head";

import { Flex, Heading, Box, Divider } from "@chakra-ui/react";

import { ThemeButton } from "../components/ThemeButton";
import { LoginButtons } from "../components/LoginButtons";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BLoUG!</title>
      </Head>

      <Flex
        flexDir={{ base: "column", lg: "row" }}
        height={{ base: "auto", lg: "100vh" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box p={4} w={{ base: "100vw", lg: "50vw" }} textAlign={"center"}>
          <Heading fontSize={"8xl"}>BLoUG!</Heading>
        </Box>

        <LoginButtons />
      </Flex>

      <ThemeButton />
    </>
  );
};

export default Home;
