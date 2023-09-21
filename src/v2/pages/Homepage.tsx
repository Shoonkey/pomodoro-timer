import { useState } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { X } from "@phosphor-icons/react";

import Panel from "../components/Panel";
import CustomTooltip from "../components/CustomTooltip";
import ClockView from "../components/views/ClockView";
import AppView from "../components/views/AppView";
import SettingsView from "../components/views/SettingsView";
import TaskListView from "../components/views/TaskListView";

const ASIDE_WIDTH = "70%";

export default function Homepage() {
  const [activeView, setActiveView] = useState<AppView>("clock");
  const [hiddenView, setHiddenView] = useState<Exclude<
    AppView,
    "clock"
  > | null>(null);

  let mainViewLeft = "0px";

  if (activeView === "settings") mainViewLeft = `calc(${ASIDE_WIDTH} / 2)`;
  else if (activeView === "task-list")
    mainViewLeft = `calc(-${ASIDE_WIDTH} / 2)`;

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
          <SettingsView />
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
          bg="gray.800"
          as="main"
          w="50%"
          zIndex={1}
          transition="left 1s ease"
          left={mainViewLeft}
        >
          <ClockView changeView={changeView} />
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
          <TaskListView />
        </Panel>
      </Flex>
    </Box>
  );
}
