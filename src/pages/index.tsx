import { Flex, IconButton } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { X, Gear, ListChecks } from "@phosphor-icons/react";

import Clock from "@/components/Clock";
import Panel from "@/components/Panel";
import Settings from "@/components/Settings";
import TaskList from "@/components/TaskList";
import CustomTooltip from "@/components/CustomTooltip";

type AppView = "clock" | "settings" | "task-list";

const ASIDE_WIDTH = "70dvw";

export default function Home() {
  const [activeView, setActiveView] = useState<AppView>("clock");
  const [hiddenView, setHiddenView] = useState<Exclude<AppView, "clock">>("settings");

  let mainViewLeft = "0px";

  if (activeView === "settings") mainViewLeft = ASIDE_WIDTH;
  else if (activeView === "task-list") mainViewLeft = `-${ASIDE_WIDTH}`;

  const changeView = (newView: AppView) => {
    if (newView !== "task-list")
      setHiddenView("task-list");
    else
      setHiddenView("settings")
    
    setActiveView(newView);
  };

  return (
    <>
      <Head>
        <title>Pomodoro timer</title>
        <meta name="description" content="A minimalistic Pomodoro timer app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex overflowX="hidden" bg="primary.500">
        <Panel
          as="aside"
          w={ASIDE_WIDTH}
          hidden={activeView === "clock"}
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
          w="100dvw"
          zIndex={1}
          transition="left 1s"
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
          left={`calc(100dvw - ${ASIDE_WIDTH})`}
          w={ASIDE_WIDTH}
          hidden={activeView === "clock"}
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
    </>
  );
}
