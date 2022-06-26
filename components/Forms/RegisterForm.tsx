import NextLink from "next/link";
import { useState } from "react";

import { Form } from "@unform/web";
import { BiArrowBack } from "react-icons/bi";
import { MdError } from "react-icons/md";
import {
  Flex,
  Link,
  FormControl,
  FormLabel,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { Input } from "./Input";
import { Alert } from "../Alert";

type FormData = {
  name: string;
  email: string;
  pwd: string;
};

export const RegisterForm = () => {
  const [alert, setAlert] = useState("");

  const inputBg = useColorModeValue("white", "white");
  const labelColor = useColorModeValue("gray.900", "gray.900");
  const formBg = useColorModeValue("gray.200", "gray.200");
  const shadow = useColorModeValue(
    "0 2px .8em rgba(0, 0, 0, .3)",
    "0 2px .8em rgba(255, 255, 255, .15)"
  );

  const handleSubmit = ({ name, email, pwd }: FormData) => {
    if (pwd.length < 6) {
      setAlert("Senha deve ter pelo menos 6 caracteres.");
      return;
    }

    console.log(name, email, pwd);
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      {alert != "" && (
        <Alert
          icon={MdError}
          message={alert}
          color={"red.400"}
          onClick={() => setAlert("")}
        />
      )}

      <Form onSubmit={handleSubmit}>
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
              name="name"
              bg={inputBg}
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
              name="email"
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
              placeholder="Digite sua senha:"
              color={"gray.500"}
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>

          <Button
            type="submit"
            mt={"60px"}
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
            Criar Conta
          </Button>
        </Flex>
      </Form>
    </div>
  );
};
