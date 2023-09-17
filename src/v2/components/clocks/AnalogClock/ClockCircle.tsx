import { chakra } from "@chakra-ui/react";

interface ClockCircleProps {
  type: "inner" | "outer";
  color: string;
}

function ClockCircle({ type, color }: ClockCircleProps) {
  return (
    <chakra.circle
      cx="64"
      cy="64"
      stroke={color}
      strokeWidth={type === "inner" ? "0.4px" : "1px"}
      fill={type === "inner" ? "black" : "none"}
      r={type === "inner" ? "3" : "62.9814"}
    />
  );
}

export default ClockCircle;
