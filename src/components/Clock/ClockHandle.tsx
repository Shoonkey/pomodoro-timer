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
      width: "3",
      height: "30.966885",
      x: "63.064896",
      y: "34.295696",
      ry: "0.99379987"
    },
    minute: {
      width: "1.8702061",
      height: "37.45166",
      x: "61.98394",
      y: "26.810919",
      ry: "1.4907528"
    },
    second: {
      width: "0.5",
      height: "60",
      x: "63.75",
      y: "4",
      ry: "1.4907528"
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
    <rect
      {...attributes[type]}
      style={{
        fill: color,
        transformOrigin: "center",
        transform: `rotate(${degrees}deg)`
      }}
    />
  );
}

export default ClockHandle;
