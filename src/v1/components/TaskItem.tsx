import { Flex, Tooltip, IconButton, Text } from "@chakra-ui/react";
import { CheckCircle, TrashSimple } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

import Task from "../interfaces/Task";
import useAppSettings from "../../common/hooks/useAppSettings";

interface TaskProps {
  task: Task;
  onSetComplete: (complete: boolean) => void;
  onClickDelete: () => void;
}

function TaskItem({ task, onSetComplete, onClickDelete }: TaskProps) {
  const { t } = useTranslation();
  const { theme } = useAppSettings();

  return (
    <Flex
      alignItems="center"
      bg={theme === "dark" ? "gray.900" : "blackAlpha.300"}
      pl={4}
      py={1}
      borderColor="gray.700"
      borderStyle="solid"
      borderWidth="1px"
    >
      <Text
        fontSize="1.25rem"
        textDecor={task.completed ? "line-through" : "none"}
        flexGrow={1}
        wordBreak="break-word"
      >
        {task.description}
      </Text>
      <Tooltip
        placement="left"
        label={t(
          `pages.home.taskList.task.${task.completed ? "reset" : "complete"}`
        )}
      >
        <IconButton
          onClick={() => onSetComplete(!task.completed)}
          aria-label={t(
            `pages.home.taskList.task.${task.completed ? "reset" : "complete"}`
          )}
          color="orange.500"
          icon={
            <CheckCircle
              size={32}
              weight={task.completed ? "fill" : "thin"}
            />
          }
          variant="transparent"
        />
      </Tooltip>
      <Tooltip placement="left" label={t("pages.home.taskList.task.delete")}>
        <IconButton
          icon={<TrashSimple size={32} />}
          aria-label={t("pages.home.taskList.task.delete")}
          variant="transparent"
          color="red.600"
          onClick={onClickDelete}
        />
      </Tooltip>
    </Flex>
  );
}

export default TaskItem;
