import { Flex, Text } from "@chakra-ui/react";

import { IconBaseProps } from "react-icons";

interface AlertProps {
  icon?: React.ComponentType<IconBaseProps>;
  message: string;
  color: string;
}

export const Alert = ({ icon: Icon, message, color }: AlertProps) => {
  return (
    <Flex
      cursor={"pointer"}
      minW={56}
      p={2}
      rounded={12}
      bg={color}
      pos={"fixed"}
      top={12}
      right={12}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      {Icon && <Icon size={24} color={"white"} />}
      <Text color={"white"}>{message}</Text>
    </Flex>
  );
};
