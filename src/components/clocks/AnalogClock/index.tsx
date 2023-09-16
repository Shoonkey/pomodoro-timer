import { chakra } from "@chakra-ui/react";

import useClockTime from "../../../hooks/useClockTime";
import ClockHandle from "./ClockHandle";
import ClockNumber from "./ClockNumber";
import ClockCircle from "./ClockCircle";
import ClockArc from "./ClockArc";

interface ClockColors {
  outerCircle: string;
  innerCircle: string;
  hourHandle: string;
  minuteHandle: string;
  secondHandle: string;
  numbers: string;
}

interface ClockProps {
  startAt?: Date;
  colors?: Partial<ClockColors>;
}

const DEFAULT_FILL_COLOR = "#DD403A";
const DEFAULT_TEXT_COLOR = "#e2e2e2";

// Built the SVG in Inkscape and imported it here as custom component
function Clock({ startAt, colors = {} }: ClockProps) {
  const time = useClockTime(startAt);

  return (
    <chakra.svg
      py={4}
      flexGrow={1}
      viewBox="0 0 128 128"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      userSelect="none"
    >
      <ClockCircle
        type="outer"
        color={colors.outerCircle || DEFAULT_FILL_COLOR}
      />
      {/* <ClockArc />
      <ClockArc /> */}
      <ClockHandle
        type="second"
        time={time}
        color={colors.secondHandle || DEFAULT_FILL_COLOR}
      />
      <ClockHandle
        type="minute"
        time={time}
        color={colors.minuteHandle || DEFAULT_FILL_COLOR}
      />
      <ClockHandle
        type="hour"
        time={time}
        color={colors.hourHandle || DEFAULT_FILL_COLOR}
      />
      <ClockCircle
        type="inner"
        color={colors.innerCircle || DEFAULT_FILL_COLOR}
      />
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <ClockNumber
            key={`number-${i}`}
            value={i + 1}
            color={colors.numbers || DEFAULT_TEXT_COLOR}
          />
        ))}
    </chakra.svg>
  );
}

export default Clock;
