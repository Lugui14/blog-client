import {
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";

export const Header = () => {
  return (
    <Center>
      <InputGroup>
        <Input id="filter" placeholder="O que está procurando?" />
        <InputRightElement>
          <Button p={4} bg={"teal.350"} _hover={{ bg: "teal.300" }}>
            <IoSend />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Center>
  );
};
