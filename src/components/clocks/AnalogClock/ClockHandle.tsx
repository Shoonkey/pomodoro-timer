import { chakra } from "@chakra-ui/react";

interface ClockHandleProps {
  type: "hour" | "minute" | "second";
  time: Date;
  color: string;
}

interface RectangleData {
  width: string;
  height: string;
  x: string;
  y: string;
  ry: string;
}

function ClockHandle({ type, time, color }: ClockHandleProps) {

  const attributes: Record<ClockHandleProps["type"], RectangleData> = {
    hour: {
      width: "3px",
      height: "30.966885px",
      x: "62.064896",
      y: "34.295696",
      ry: "0.99379987"
    },
    minute: {
      width: "1.8702061px",
      height: "37.45166px",
      x: "62.5",
      y: "26.810919",
      ry: "1.4907528"
    },
    second: {
      width: "0.5px",
      height: "60px",
      x: "63.75",
      y: "4",
      ry: "1"
    }
  };

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  let degrees: number;

  if (type === "second")
    degrees = seconds * 360 / 60;
  else if (type === "minute")
    degrees = minutes * 360 / 60;
  else {
    degrees = hours * 360 / 12 + minutes * 360 / 12 / 60;
  }

  return (
    <chakra.rect
      {...attributes[type]}
      fill={color}
      transformOrigin="center"
      transform={`rotate(${degrees}deg)`}
    />
  );
}

export default ClockHandle;
