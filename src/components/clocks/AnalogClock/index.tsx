import { chakra } from "@chakra-ui/react";

import useClockTime from "../../../hooks/useClockTime";
import ClockHandle from "./ClockHandle";
import ClockNumber from "./ClockNumber";
import ClockCircle from "./ClockCircle";
import ClockArc from "./ClockArc";

interface ClockColors {
  outerCircle: string;
  hourHandle: string;
  minuteHandle: string;
  secondHandle: string;
  numbers: string;
}

interface ClockProps {
  startAt?: Date;
  colors?: Partial<ClockColors>;
}

// Built the SVG in Inkscape and imported it here as custom component
function Clock({ startAt, colors: colorProp = {} }: ClockProps) {
  const time = useClockTime(startAt);

  const colors: ClockColors = {
    outerCircle: "purple",
    hourHandle: "cyan",
    minuteHandle: "orange",
    secondHandle: "red",
    numbers: "white",
    ...colorProp,
  };

  return (
    <chakra.svg
      py={4}
      flexGrow={1}
      viewBox="0 0 128 128"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      userSelect="none"
    >
      <ClockCircle type="outer" color={colors.outerCircle} />
      {/* <ClockArc />
      <ClockArc /> */}
      <ClockHandle type="second" time={time} color={colors.secondHandle} />
      <ClockHandle type="minute" time={time} color={colors.minuteHandle} />
      <ClockHandle type="hour" time={time} color={colors.hourHandle} />
      <ClockCircle type="inner" color={colors.outerCircle} />
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <ClockNumber
            key={`number-${i}`}
            value={i + 1}
            color={colors.numbers}
          />
        ))}
    </chakra.svg>
  );
}

export default Clock;
