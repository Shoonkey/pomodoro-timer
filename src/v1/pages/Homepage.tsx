import { Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Clock from "../components/Clock";
import TodoList from "../components/TodoList";

function Homepage() {
  const { t } = useTranslation();

  document.title = `${t("pages.home.title")} | ${t("appTitle")}`;

  return (
    <Flex
      flexGrow={1}
      alignItems="stretch"
      py={4}
      px={6}
      gap={6}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Clock />
      <TodoList />
    </Flex>
  )
}

export default Homepage;