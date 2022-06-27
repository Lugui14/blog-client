import { Button, Flex, Textarea, VStack } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
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
    <Flex alignItems={"center"} maxH={"80vh"} flexDir={"column"}>
      <VStack
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "black",
            borderRadius: "24px",
          },
        }}
        overflowY={"auto"}
        gap={8}
      >
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
      <Textarea
        mt={6}
        w={"80%"}
        maxW={"xl"}
        border={"2px solid black"}
        resize={"none"}
        p={4}
        h={56}
        placeholder={"Digite sua mensagem aqui."}
      />
      <Button
        gap={4}
        w={"80%"}
        p={4}
        mb={4}
        bg={"teal.350"}
        _hover={{ bg: "teal.300" }}
      >
        Enviar <IoSend />
      </Button>
    </Flex>
  );
};
