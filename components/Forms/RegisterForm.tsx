import NextLink from "next/link";
import { BiArrowBack } from "react-icons/bi";

import {
  Flex,
  Link,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";

export const RegisterForm = () => {
  const inputBg = useColorModeValue("white", "white");
  const labelColor = useColorModeValue("gray.900", "gray.900");
  const formBg = useColorModeValue("gray.200", "gray.200");
  const shadow = useColorModeValue(
    "0 2px .8em rgba(0, 0, 0, .3)",
    "0 2px .8em rgba(255, 255, 255, .15)"
  );

  return (
    <form action="submit">
      <Flex
        minW={96}
        p={8}
        rounded={12}
        boxShadow={shadow}
        bg={formBg}
        flexDir={"column"}
        gap={2}
      >
        <NextLink href="/login" passHref>
          <Link
            display={"flex"}
            alignItems={"center"}
            gap={2}
            color={"black"}
            p={2}
            fontSize={24}
            maxW={"fit-content"}
            _hover={{ color: "gray.500" }}
          >
            {" "}
            <BiArrowBack /> Login{" "}
          </Link>
        </NextLink>

        <FormControl mb={4} isRequired>
          <FormLabel color={labelColor} htmlFor="name">
            Nome
          </FormLabel>
          <Input
            bg={inputBg}
            id="name"
            type="text"
            maxLength={80}
            color={"gray.500"}
            placeholder="Digite seu Nome:"
            _placeholder={{ color: "gray.500" }}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel color={labelColor} htmlFor="email">
            Email
          </FormLabel>
          <Input
            bg={inputBg}
            id="email"
            type="email"
            color={"gray.500"}
            placeholder="Digite seu email:"
            _placeholder={{ color: "gray.500" }}
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
            color={"gray.500"}
            _placeholder={{ color: "gray.500" }}
          />
        </FormControl>

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
          value={"Criar Conta"}
          cursor={"pointer"}
          _hover={{ bg: "teal.300" }}
        />
      </Flex>
    </form>
  );
};
