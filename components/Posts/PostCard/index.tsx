import { VStack, Flex, Text } from "@chakra-ui/react";

interface IPostProps {
  text: string;
  username: string;
  useremail: string;
}

export const PostCard = ({ text, username, useremail }: IPostProps) => {
  return (
    <VStack
      alignItems={"flex-start"}
      rounded={8}
      borderLeft={"4px solid #00ADB5"}
      boxShadow={"md"}
      bg={"rgba(203,213,224, 0.4)"}
      p={8}
    >
      <Flex
        alignItems={{ base: "flex-start", lg: "center" }}
        flexDir={{ base: "column", lg: "row" }}
        mb={4}
        gap={{ base: 2, lg: 4 }}
      >
        <Text fontSize={16} fontWeight={"bold"}>
          {username}
        </Text>
        <Text fontSize={12} opacity={"60%"}>
          {useremail}
        </Text>
      </Flex>

      <Text>{text}</Text>
    </VStack>
  );
};
