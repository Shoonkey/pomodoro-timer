import { Box, Button, Heading, Flex, Text, ScaleFade, useBreakpointValue } from "@chakra-ui/react";
import { Armchair, Campfire } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const INTERVALS = {
  WORK: 20 * 60_000,
  PAUSE: 5 * 60_000,
};

function Clock() {
  const { t } = useTranslation();
  const iconSize = useBreakpointValue({ base: 32, md: 64 }) || 32;

  const [timeInMS, setTimeInMS] = useState(INTERVALS.WORK);
  const [paused, setPaused] = useState(true);

  const [inPomodoroPause, setInPomodoroPause] = useState(false);

  const minute = Math.floor(timeInMS / 60_000);
  const second = Math.floor((timeInMS % 60_000) / 1000);

  useEffect(() => {
    if (timeInMS !== 0) return;

    setTimeInMS(inPomodoroPause ? INTERVALS.WORK : INTERVALS.PAUSE);
    setInPomodoroPause(!inPomodoroPause);
  }, [inPomodoroPause, timeInMS]);

  useEffect(() => {
    let interval: number;

    if (!paused)
      interval = window.setInterval(() => setTimeInMS((time) => time - 1000), 1000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [paused]);

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      borderColor="gray.700"
      borderStyle="solid"
      width={{ base: "100%", lg: "600px" }}
      borderRightWidth={{ base: 0, lg: "2px" }}
      borderBottomWidth={{ base: "2px", lg: 0 }}
      pr={{ base: 0, lg: 6 }}
      pb={{ base: 6, lg: 0 }}
    >
      <Box position="relative">
        <ScaleFade in={inPomodoroPause}>
          <Text fontSize={{ base: 18, md: 24 }} fontStyle="italic" position="absolute">
            <Flex as="span" alignItems="center" gap={2}>
              <Armchair color="pink" size={iconSize} />
              {t("pages.home.timer.chillTime")}
            </Flex>
          </Text>
        </ScaleFade>
        <ScaleFade in={!inPomodoroPause}>
          <Text fontSize={{ base: 18, md: 24 }} fontStyle="italic">
            <Flex as="span" alignItems="center" gap={2}>
              <Campfire color="orange" size={iconSize} />
              {t("pages.home.timer.workTime")}
            </Flex>
          </Text>
        </ScaleFade>
      </Box>
      <Heading fontSize={{ base: "7xl", lg: "9xl" }}>
        {minute < 10 ? "0" + minute : minute}:
        {second < 10 ? "0" + second : second}
      </Heading>
      <Button
        colorScheme={paused ? "orange" : "cyan"}
        color="gray.800"
        onClick={() => setPaused(!paused)}
      >
        {paused
          ? `${t(`pages.home.timer.start`)}/${t("pages.home.timer.resume")}`
          : t("pages.home.timer.pause")}
      </Button>
    </Flex>
  );
}

export default Clock;
