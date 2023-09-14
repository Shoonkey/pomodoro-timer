import { chakra } from "@chakra-ui/react";

import ClockHandle from "./ClockHandle";
import ClockNumber from "./ClockNumber";
import ClockCircle from "./ClockCircle";
import ClockArc from "./ClockArc";

function Clock() {
  return (
    <chakra.svg
      py={4}
      flexGrow={1}
      viewBox="0 0 128 128"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ClockCircle />
      <ClockArc />
      <ClockArc />
      <ClockHandle type="hour" value={1} />
      <ClockHandle type="minute" value={30} />
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <ClockNumber value={i + 1} />
        ))}
    </chakra.svg>
  );
}

export default Clock;
