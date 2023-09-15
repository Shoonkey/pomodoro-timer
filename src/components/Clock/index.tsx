import { chakra } from "@chakra-ui/react";

import ClockHandle from "./ClockHandle";
import ClockNumber from "./ClockNumber";
import ClockCircle from "./ClockCircle";
import ClockArc from "./ClockArc";
import { useEffect, useState } from "react";

interface ClockColors {
  outerCircle: string;
  hourHandle: string;
  minuteHandle: string;
  secondHandle: string;
  numberColor: string;
}

interface ClockProps {
  startAt: Date;
  colors?: Partial<ClockColors>;
}

// Built the SVG in Inkscape and imported it here as custom component
function Clock({ startAt, colors }: ClockProps) {
  const [time, setTime] = useState(startAt || new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <chakra.svg
      py={4}
      flexGrow={1}
      viewBox="0 0 128 128"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ClockCircle />
      {/* <ClockArc />
      <ClockArc /> */}
      <ClockHandle type="hour" time={time} color="cyan" />
      <ClockHandle type="minute" time={time} color="lightpurple" />
      <ClockHandle type="second" time={time} color="red" />
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <ClockNumber value={i + 1} />
        ))}
    </chakra.svg>
  );
}

export default Clock;
