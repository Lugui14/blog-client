import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { RegisterForm } from "../components/Forms/RegisterForm";
import { ThemeButton } from "../components/ThemeButton";

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Registrar-se no blog</title>
      </Head>

      <Flex
        gap={12}
        flexDir={{ base: "column", lg: "row" }}
        h={{ base: "auto", lg: "100vh" }}
        w={"100vw"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          p={4}
          pl={{ base: 4, lg: 56 }}
          w={{ base: "100vw", lg: "45vw" }}
          textAlign={{ base: "center", lg: "start" }}
        >
          <Heading fontSize={"8xl"}>BLoUG!</Heading>
        </Box>

        <Stack
          p={{ base: 4, lg: 24 }}
          w={{ base: "100vw", lg: "55vw" }}
          alignItems="center"
          justifyContent={{ base: "center", lg: "flex-start" }}
        >
          <RegisterForm />
        </Stack>
      </Flex>

      <ThemeButton />
    </>
  );
};

export default Register;
