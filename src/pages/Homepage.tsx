import { useState } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { X, Gear, ListChecks } from "@phosphor-icons/react";

import Clock from "../components/Clock";
import Panel from "../components/Panel";
import Settings from "../components/Settings";
import TaskList from "../components/TaskList";
import CustomTooltip from "../components/CustomTooltip";

type AppView = "clock" | "settings" | "task-list";

const ASIDE_WIDTH = "70%";

export default function Homepage() {
  const [activeView, setActiveView] = useState<AppView>("clock");
  const [hiddenView, setHiddenView] =
    useState<Exclude<AppView, "clock"> | null>(null);

  let mainViewLeft = "0px";

  if (activeView === "settings") mainViewLeft = `calc(${ASIDE_WIDTH} / 2)`;
  else if (activeView === "task-list") mainViewLeft = `calc(-${ASIDE_WIDTH} / 2)`;

  
  const changeView = (newView: AppView) => {
    setActiveView(newView);

    if (newView === "clock") {
      setTimeout(() => setHiddenView(null), 1000);
    } else {
      setHiddenView(newView === "settings" ? "task-list" : "settings");
    }
  };

  return (
    <Box overflowX="hidden" w="100%" h="100%">
      <Flex position="relative" w="200%" h="100%">
        <Panel
          as="aside"
          w={`calc(${ASIDE_WIDTH} / 2)`}
          hidden={hiddenView === "settings"}
          bg="bg.500"
        >
          <Settings />
          <CustomTooltip label="Close settings">
            <IconButton
              position="absolute"
              variant="ghost"
              top="16px"
              right="16px"
              icon={<X size={32} />}
              aria-label="Close settings"
              onClick={() => changeView("clock")}
            />
          </CustomTooltip>
        </Panel>
        <Panel
          bg="bg.800"
          as="main"
          w="50%"
          zIndex={1}
          transition="left 1s ease"
          left={mainViewLeft}
        >
          <Clock />
          <Flex mx="auto" pb={4} gap={4} color="primary.500">
            <CustomTooltip label="Open settings">
              <IconButton
                aria-label="Open settings"
                variant="ghost"
                color="inherit"
                icon={<Gear size={32} weight="fill" />}
                onClick={() => changeView("settings")}
              />
            </CustomTooltip>
            <CustomTooltip label="Open task list">
              <IconButton
                variant="ghost"
                color="inherit"
                aria-label="Open task list"
                icon={<ListChecks size={32} />}
                onClick={() => changeView("task-list")}
              />
            </CustomTooltip>
          </Flex>
        </Panel>
        <Panel
          as="aside"
          left={`calc(50% - ${ASIDE_WIDTH} / 2)`}
          w={`calc(${ASIDE_WIDTH} / 2)`}
          hidden={hiddenView === "task-list"}
          bg="bg.500"
        >
          <CustomTooltip label="Close task list">
            <IconButton
              position="absolute"
              variant="ghost"
              top="16px"
              left="16px"
              icon={<X size={32} />}
              aria-label="Close task list"
              onClick={() => changeView("clock")}
            />
          </CustomTooltip>
          <TaskList />
        </Panel>
      </Flex>
    </Box>
  );
}
