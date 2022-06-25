import { NextPage } from "next";
import Head from "next/head";

import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

import { ThemeButton } from "../components/ThemeButton";
import { LoginForm } from "../components/Forms/LoginForm";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Conectar-se ao blog</title>
      </Head>

      <Flex
        gap={12}
        flexDir={{ base: "column", lg: "row" }}
        h={{ base: "auto", lg: "100vh" }}
        w={"100vw"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box p={4} w={{ base: "100vw", lg: "45vw" }} textAlign={"center"}>
          <Heading fontSize={"8xl"}>BLoUG!</Heading>
        </Box>

        <Stack
          p={{ base: 4, lg: 24 }}
          w={{ base: "100vw", lg: "55vw" }}
          alignItems="center"
          justifyContent={{ base: "center", lg: "flex-start" }}
        >
          <LoginForm />
        </Stack>
      </Flex>

      <ThemeButton />
    </>
  );
};

export default Login;
