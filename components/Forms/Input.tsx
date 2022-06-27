import { Input as ChakraInput, InputProps } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface IProps {
  name: string;
}

type IInputProps = InputProps & IProps;

export const Input = ({ name, ...rest }: IInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <ChakraInput ref={inputRef} defaultValue={defaultValue} {...rest} />;
};
