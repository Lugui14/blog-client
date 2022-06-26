import NextLink from "next/link";
import { VStack, Link, Text, Divider } from "@chakra-ui/react";

export const LoginButtons = () => {
  return (
    <>
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
    </>
  );
};
