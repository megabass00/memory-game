import * as React from "react";

function Clock(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <defs>
        <style>
          {
            ".prefix__a{fill:none;stroke:#999;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
          }
        </style>
      </defs>
      <g transform="translate(-1 -1)">
        <circle
          className="prefix__a"
          cx={15}
          cy={15}
          r={15}
          transform="translate(2 2)"
        />
        <path className="prefix__a" d="M17 8v9l6 3" />
      </g>
    </svg>
  );
}

const MemoClock = React.memo(Clock)
export default MemoClock
