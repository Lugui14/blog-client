import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

import {
  Flex,
  Heading,
  Box,
  VStack,
  Link,
  Text,
  Divider,
} from "@chakra-ui/react";

import { ThemeButton } from "../components/ThemeButton";
import { useState } from "react";

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

        <Divider h={"40%"} orientation="vertical" />

        <VStack
          p={4}
          w={{ base: "100vw", lg: "50vw" }}
          spacing={8}
          align={"center"}
          justify={"center"}
        >
          <NextLink href="/login" passHref>
            <Link
              fontWeight={"bold"}
              fontSize={24}
              minW={48}
              p={2}
              rounded={8}
              bg={"teal.350"}
              color={"white"}
              textAlign={"center"}
              _hover={{ textDecor: "none", bg: "teal.300" }}
            >
              Logar
            </Link>
          </NextLink>

          <Text color={"gray.500"}>ou</Text>

          <NextLink href="/register" passHref>
            <Link
              fontWeight={"bold"}
              fontSize={24}
              minW={48}
              p={2}
              rounded={8}
              bg={"teal.350"}
              color={"white"}
              textAlign={"center"}
              _hover={{ textDecor: "none", bg: "teal.300" }}
            >
              Criar Conta
            </Link>
          </NextLink>
        </VStack>
      </Flex>

      <ThemeButton />
    </>
  );
};

export default Home;
