import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface AddTaskDialogProps {
  isOpen: boolean;
  onAddTask: (description: string) => void;
  onClose: () => void;
}

function AddTaskDialog({ isOpen, onAddTask, onClose }: AddTaskDialogProps) {
  const { t } = useTranslation();
  const { colorMode: theme } = useColorMode();

  const [description, setDescription] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent mx={4}>
        <ModalHeader>{t("pages.home.taskModal.newTask")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex as="form">
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Flex>
        </ModalBody>
        <ModalFooter gap={3}>
          <Button
            colorScheme="orange"
            color="gray.800"
            onClick={() => {
              onAddTask(description);
              setDescription("");
              onClose();
            }}
          >
            {t("pages.home.taskModal.add")}
          </Button>
          <Button
            colorScheme={theme === "dark" ? "whiteAlpha" : "blackAlpha"}
            color="gray.800"
            onClick={onClose}
          >
            {t("pages.home.taskModal.cancel")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddTaskDialog;
