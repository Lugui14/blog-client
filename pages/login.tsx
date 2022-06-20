import { Box, Flex, Grid } from "@chakra-ui/react";
import Head from "next/head";

import { NextPage } from "next";

import { ThemeButton } from "../components/ThemeButton";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Conectar no blog</title>
      </Head>

      <Flex
        gap={12}
        h={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box>Box 1</Box>
        <Grid>Grid 1</Grid>
      </Flex>

      <ThemeButton />
    </>
  );
};

export default Login;
