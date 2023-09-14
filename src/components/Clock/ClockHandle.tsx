interface ClockHandProps {
  type: "minute" | "hour";
  value: number;
}

function ClockHandle({ type, value }: ClockHandProps) {
  return (
    <rect
      id="minute_handle"
      style={{
        fill: "#ffffff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.5,
        strokeDasharray: "none",
        strokeOpacity: 1,
        transformOrigin: "top center",
        transform: `rotate(calc(${value} * 12deg))`,
      }}
      width={type === "hour" ? "1.8702061" : "4.0321212"}
      height={type === "hour" ? "24.966885" : "37.45166"}
      x="61.98394"
      y="28.810919"
      ry="1"
    />
  );
}

export default ClockHandle;
