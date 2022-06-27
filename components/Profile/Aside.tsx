import { Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";

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
  return (
    <Center flexDir={"column"} maxH={"90vh"}>
      <Heading textAlign={"center"} mb={8}>
        {name}
      </Heading>
      <Text mb={12} textAlign={"center"}>
        {email}
      </Text>

      <VStack>
        <Text fontSize={18}>Usuários</Text>
        {users.map((user) => (
          <Flex
            w={"150%"}
            borderTop={"1px solid white"}
            flexDir={"column"}
            p={4}
            key={user.name}
          >
            <Text>{user.name}</Text>
            <Text opacity={"90%"}>{user.email}</Text>
          </Flex>
        ))}
      </VStack>
    </Center>
  );
};
