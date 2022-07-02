import { useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const PostModal = ({ isOpen, onClose, onOpen }: IProps) => {
  const finalRef = useRef(null);
  const [post, setPost] = useState("");

  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Criar Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Digite o texto do post."
          />
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              onClose();
            }}
            bg={"teal.350"}
            _hover={{ bg: "teal.300" }}
          >
            Postar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
