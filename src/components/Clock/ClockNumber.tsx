interface ClockNumberProps {
  value: number;
}

{/* <g>
  <text x="64.204704" y="13.438548">
    <tspan id="tspan4" x="64.204704" y="13.438548">
      12
    </tspan>
  </text>
  <text x="64.204704" y="123.38595">
    <tspan id="tspan5" x="64.204704" y="123.38595">
      6
    </tspan>
  </text>
  <text x="119.96262" y="69.026894">
    <tspan id="tspan6" x="119.96262" y="69.026894">
      3
    </tspan>
  </text>
  <text x="8.6075382" y="69.026894">
    <tspan id="tspan7" x="8.6075382" y="69.026894">
      9
    </tspan>
  </text>
  <text x="110.91653" y="41.915829" id="text11">
    <tspan id="tspan10" x="110.91653" y="41.915829">
      2
    </tspan>
    <tspan x="110.91653" y="58.582455" />
  </text>
  <text x="32.635509" y="23.407581">
    <tspan x="32.635509" y="23.407581" id="tspan13">
      11
    </tspan>
  </text>
  <text x="17.67345" y="43.571419" id="text15">
    <tspan x="17.67345" y="43.571419" id="tspan15">
      10
    </tspan>
  </text>
  <text x="109.47203" y="94.659576" id="text19">
    <tspan id="tspan18" x="109.47203" y="94.659576">
      4
    </tspan>
    <tspan x="109.47203" y="111.3262" id="tspan19" />
  </text>
  <text x="90.671791" y="113.63235" id="text21">
    <tspan x="90.671791" y="113.63235" id="tspan21">
      5
    </tspan>
  </text>
  <text x="40.866745" y="113.63235" id="text22">
    <tspan x="40.866745" y="113.63235" id="tspan22">
      7
    </tspan>
  </text>
  <text x="17.659111" y="94.659576" id="text24">
    <tspan x="17.659111" y="94.659576" id="tspan24">
      8
    </tspan>
  </text>
  <text x="93.759933" y="23.6017" id="text26">
    <tspan id="tspan25" x="93.759933" y="23.6017">
      1
    </tspan>
    <tspan x="93.759933" y="36.935074" id="tspan26" />
  </text>
</g>; */}

function ClockNumber({ value }: ClockNumberProps) {
  let x: string, y: string;

  switch (value) {
    case 12:
      x = "64.204704";
      y = "13.438548";
      break;
    case 6:
      x = "64.204704";
      y = "123.38595";
      break;
    case 3:
      x = "119.96262";
      y = "69.026894";
      break;
    case 9:
      x = "8.6075382";
      y = "69.026894";
      break;
    default:
      x = "0px";
      y = "0px";
  }

  return (
    <text
      style={{
        fontSize: "13.3333px",
        fontWeight: "bold",
        fontFamily: "Ubuntu",
        fill: "#ffffff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeOpacity: 1,
        textAnchor: "middle",
      }}
      x={x}
      y={y}
    >
      {value}
    </text>
  );
}

export default ClockNumber;
