import * as React from "react";
import { SVGProps } from "react";
const IconFail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <circle cx={24} cy={24} r={24} fill="currentColor" />
      <path
        d="m25.308 23.54 4.773 4.774-1.767 1.767-4.773-4.773-4.773 4.773L17 28.314l4.773-4.773L17 18.768 18.768 17l4.773 4.773L28.314 17l1.767 1.768-4.773 4.773Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconFail;
