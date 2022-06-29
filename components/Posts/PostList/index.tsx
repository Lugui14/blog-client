import { Button, Flex, VStack } from "@chakra-ui/react";
import { PostCard } from "../PostCard";

interface IMessage {
  text: string;
  user: {
    name: string;
    email: string;
  };
}

const messages: IMessage[] = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    user: {
      name: "Luiz Guilherme",
      email: "zanelallopes9977@gmail.com",
    },
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    user: {
      name: "Luiz Guilherme",
      email: "zanelallopes9977@gmail.com",
    },
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    user: {
      name: "Luiz Guilherme",
      email: "zanelallopes9977@gmail.com",
    },
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    user: {
      name: "Luiz Guilherme",
      email: "zanelallopes9977@gmail.com",
    },
  },
];

export const PostList = () => {
  return (
    <Flex alignItems={"center"} flexDir={"column"} p={4}>
      <VStack overflowY={"auto"} gap={4}>
        {messages.map((message) => (
          <PostCard
            key={message.text}
            text={message.text}
            username={message.user.name}
            useremail={message.user.email}
          />
        ))}
        <Button w={"80%"} p={4}>
          Mostrar Mais
        </Button>
      </VStack>
    </Flex>
  );
};
