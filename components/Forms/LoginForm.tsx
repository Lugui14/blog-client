import { useState } from "react";
import NextLink from "next/link";

import { BiArrowBack } from "react-icons/bi";
import {
  Flex,
  FormControl,
  FormLabel,
  Text,
  useColorModeValue,
  Link,
  Button,
} from "@chakra-ui/react";
import { Input } from "./Input";

type FormData = {
  email: string;
  pwd: string;
};

export const LoginForm = () => {
  const [alert, setAlert] = useState("");

  const inputBg = useColorModeValue("white", "white");
  const labelColor = useColorModeValue("gray.900", "gray.900");
  const formBg = useColorModeValue("gray.200", "gray.200");
  const shadow = useColorModeValue(
    "0 2px .8em rgba(0, 0, 0, .3)",
    "0 2px .8em rgba(255, 255, 255, .15)"
  );

  const handleSubmit = ({ email, pwd }: FormData) => {
    if (pwd.length < 6) {
      setAlert("Senha deve ter pelo menos 6 caracteres.");
      return;
    }

    console.log(email, pwd);
  };

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
        <NextLink href="/" passHref>
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
            <BiArrowBack /> Início{" "}
          </Link>
        </NextLink>

        <FormControl mb={4} isRequired>
          <FormLabel color={labelColor} htmlFor="email">
            Email
          </FormLabel>
          <Input
            name="email"
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
            name="pwd"
            type="password"
            color={"gray.500"}
            placeholder="Digite sua senha:"
            _placeholder={{ color: "gray.500" }}
          />
        </FormControl>

        <Text fontSize={"sm"} display={"flex"} gap={2} color={labelColor}>
          Não possui conta?
          <NextLink href="/register" passHref>
            <Link color={"teal.350"}>Registrar-se</Link>
          </NextLink>
        </Text>

        <Button
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
          cursor={"pointer"}
          _hover={{ bg: "teal.300" }}
        >
          Conectar
        </Button>
      </Flex>
    </form>
  );
};
