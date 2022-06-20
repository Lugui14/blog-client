import { NextPage } from "next";
import Head from "next/head";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";

import { ThemeButton } from "../components/ThemeButton";
import Link from "next/link";

const Login: NextPage = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 1080px)");

  const inputBg = useColorModeValue("white", "white");
  const labelColor = useColorModeValue("black", "white");

  return (
    <>
      <Head>
        <title>Conectar no blog</title>
      </Head>

      <Flex
        gap={12}
        flexDir={isNotSmallerScreen ? "row" : "column"}
        h={isNotSmallerScreen ? "100vh" : "auto"}
        w={"100vw"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          p={4}
          pl={isNotSmallerScreen ? 56 : 4}
          w={isNotSmallerScreen ? "45vw" : "100vw"}
          textAlign={isNotSmallerScreen ? "start" : "center"}
        >
          <Heading fontSize={"8xl"}>Blog Muito Brabo do Luiz</Heading>
        </Box>

        <Flex
          p={isNotSmallerScreen ? 24 : 4}
          w={isNotSmallerScreen ? "55vw" : "100vw"}
          alignItems="center"
          justifyContent={isNotSmallerScreen ? "flex-start" : "center"}
        >
          <form action="submit">
            <Flex
              minW={96}
              p={8}
              rounded={12}
              boxShadow="md"
              bg={"gray.100"}
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
