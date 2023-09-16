import { Text } from "@chakra-ui/react";

import useClockTime from "../../../hooks/useClockTime";

interface DigitalClockProps {
  startAt?: Date;
}

function DigitalClock({ startAt }: DigitalClockProps) {
  const time = useClockTime(startAt);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hh = hours < 10 ? "0" + hours : hours;
  const mm = minutes < 10 ? "0" + minutes : minutes;
  const ss = seconds < 10 ? "0" + seconds : seconds;

  return (
    <Text mx="auto" fontSize="72px" fontWeight="bold" color="#9CFCFC">
      {hh}:{mm}:{ss}
    </Text>
  )
}

export default DigitalClock;