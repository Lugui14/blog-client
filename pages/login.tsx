import { NextPage } from "next";
import Head from "next/head";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeButton } from "../components/ThemeButton";
import Link from "next/link";

const Login: NextPage = () => {
  const inputBg = useColorModeValue("white", "white");
  const labelColor = useColorModeValue("black", "white");

  return (
    <>
      <Head>
        <title>Conectar no blog</title>
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
          <Heading fontSize={"8xl"}>Blog Muito Brabo do Luiz</Heading>
        </Box>

        <Flex
          p={{ base: 4, lg: 24 }}
          w={{ base: "100vw", lg: "55vw" }}
          alignItems="center"
          justifyContent={{ base: "center", lg: "flex-start" }}
        >
          <form action="submit">
            <Flex
              minW={96}
              p={8}
              rounded={12}
              boxShadow="md"
              bg={"gray.200"}
              opacity={"60%"}
              flexDir={"column"}
              gap={2}
            >
              <FormControl mb={4} isRequired>
                <FormLabel color={labelColor} htmlFor="email">
                  Email
                </FormLabel>
                <Input
                  bg={inputBg}
                  id="email"
                  type="email"
                  placeholder="Digite seu email:"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color={labelColor} htmlFor="pwd">
                  Senha
                </FormLabel>
                <Input
                  bg={inputBg}
                  id="pwd"
                  type="password"
                  placeholder="Digite sua senha:"
                />
              </FormControl>

              <Text fontSize={"sm"} display={"flex"} gap={2}>
                Não possui conta?
                <Link href="#">
                  <a>
                    <Text color={"teal.350"}>Registrar-se</Text>
                  </a>
                </Link>
              </Text>

              <Input
                mt={"60px"}
                type="submit"
                bg={"teal.350"}
                w={"auto"}
                h={12}
                rounded={8}
                textAlign="center"
                color={inputBg}
                fontWeight={"bold"}
                letterSpacing={1.5}
                fontSize={"lg"}
                value={"Conectar"}
                cursor={"pointer"}
                _hover={{ bg: "teal.300" }}
              />
            </Flex>
          </form>
        </Flex>
      </Flex>

      <ThemeButton />
    </>
  );
};

export default Login;
