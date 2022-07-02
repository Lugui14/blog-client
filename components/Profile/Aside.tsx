import {
  Button,
  Center,
  Flex,
  Heading,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { PostModal } from "../Posts/PostModal";

interface IAsideProps {
  name: string;
  email: string;
}

const users = [
  {
    name: "Jorjao Foda 1",
    email: "emaildojorjao@gmail.com",
  },
  {
    name: "Jorjao Foda 2",
    email: "emaildojorjao@gmail.com",
  },
  {
    name: "Jorjao Foda 3",
    email: "emaildojorjao@gmail.com",
  },
  {
    name: "Jorjao Foda 4",
    email: "emaildojorjao@gmail.com",
  },
  {
    name: "Jorjao Foda 5",
    email: "emaildojorjao@gmail.com",
  },
];

export const Aside = ({ name, email }: IAsideProps) => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <PostModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />

      <Center flexDir={"column"} maxH={"85vh"} p={4}>
        <Heading textAlign={"center"} mb={8}>
          {name}
        </Heading>
        <Text mb={12} textAlign={"center"}>
          {email}
        </Text>

        <Button
          mb={8}
          p={4}
          w={"100%"}
          bg={"teal.350"}
          _hover={{ bg: "teal.300" }}
          onClick={onOpen}
        >
          {" "}
          Criar Post{" "}
        </Button>

        <VStack w={"100%"}>
          <Text fontSize={18}>Novos Usuários</Text>
          {users.map((user) => (
            <Flex
              w={"100%"}
              borderTop={"1px solid white"}
              flexDir={"column"}
              p={2}
              fontSize={16}
              key={user.name}
            >
              <Text>{user.name}</Text>
              <Text opacity={"70%"}>{user.email}</Text>
            </Flex>
          ))}
        </VStack>
      </Center>
    </>
  );
};
