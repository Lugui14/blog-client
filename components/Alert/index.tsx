import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { IconBaseProps } from "react-icons";

interface IAlertProps {
  icon?: React.ComponentType<IconBaseProps>;
  message: string;
  color: string;
  onClick?: () => void;
}

export const Alert = ({ icon: Icon, message, color, onClick }: IAlertProps) => {
  const MotionFlex = motion(Flex);

  return (
    <MotionFlex
      onClick={onClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      cursor={"pointer"}
      minW={{ base: "40vw", lg: 56 }}
      p={2}
      rounded={12}
      bg={color}
      pos={"absolute"}
      top={{ base: 36, lg: 6 }}
      right={{ base: "10vw", lg: 6 }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      {Icon && <Icon size={24} color={"white"} />}
      <Text color={"white"}>{message}</Text>
    </MotionFlex>
  );
};
