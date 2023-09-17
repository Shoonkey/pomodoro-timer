import { chakra } from "@chakra-ui/react";

interface ClockNumberProps {
  value: number;
  color: string;
}

function ClockNumber({ value, color }: ClockNumberProps) {
  let x: string, y: string;

  switch (value) {
    case 1:
      x = "93.759933";
      y = "23.6017";
      break;
    case 2:
      x = "110.91653";
      y = "41.915829";
      break;
    case 3:
      x = "119.96262";
      y = "69.026894";
      break;
    case 4:
      x = "109.47203";
      y = "94.659576";
      break;
    case 5:
      x = "90.671791";
      y = "113.63235";
      break;
    case 6:
      x = "64.204704";
      y = "123.38595";
      break;
    case 7:
      x = "40.866745";
      y = "113.63235";
      break;
    case 8:
      x = "17.659111";
      y = "94.659576";
      break;
    case 9:
      x = "8.6075382";
      y = "69.026894";
      break;
    case 10:
      x = "17.67345";
      y = "43.571419";
      break;
    case 11:
      x = "32.635509";
      y = "23.407581";
      break;
    case 12:
      x = "64.204704";
      y = "13.438548";
      break;
    default:
      x = "0";
      y = "0";
  }

  return (
    <chakra.text
      fontSize={value % 3 === 0 ? "13.3333px" : "10.6667px"}
      fontWeight={"bold"}
      fontFamily={"Ubuntu"}
      fill={color}
      textAnchor={"middle"}
      color={color}
      x={x}
      y={y}
    >
      {value}
    </chakra.text>
  );
}

export default ClockNumber;
