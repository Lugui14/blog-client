import { useState } from "react";

import {
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";

interface IProps {
  value?: string;
}

export const Header = ({ value }: IProps) => {
  const [inputVal, setInputVal] = useState("");
  value && setInputVal(value);

  return (
    <Center w={{ base: "80%", lg: "auto" }} my={{ base: 4, lg: 0 }}>
      <InputGroup>
        <Input
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          id="filter"
          placeholder="O que está procurando?"
        />
        <InputRightElement>
          <Button p={4} bg={"teal.350"} _hover={{ bg: "teal.300" }}>
            <IoSend />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Center>
  );
};
