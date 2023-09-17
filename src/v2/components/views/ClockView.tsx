import { Flex, IconButton } from "@chakra-ui/react";
import { Play, Gear, ListChecks, Pause } from "@phosphor-icons/react";
import { useMemo, useState } from "react";

import CustomTooltip from "../CustomTooltip";
import AnalogClock from "../clocks/AnalogClock";
import DigitalClock from "../clocks/DigitalClock";
import ViewProps from "./ViewProps";

function ClockView({ changeView }: ViewProps) {
  const now = useMemo(() => new Date(), []);
  const [paused, setPaused] = useState(false);

  return (
    <Flex flexDir="column" w="100%" h="100%">
      <AnalogClock startAt={now} />
      <DigitalClock startAt={now} />
      <Flex mx="auto">
        <CustomTooltip label={paused ? "Resume" : "Pause"} placement="top">
          <IconButton
            variant="ghost"
            icon={paused ? <Play size={32} /> : <Pause size={32} />}
            aria-label={paused ? "Resume" : "Pause"}
            onClick={() => setPaused(!paused)}
          />
        </CustomTooltip>
      </Flex>
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
    </Flex>
  );
}

export default ClockView;
