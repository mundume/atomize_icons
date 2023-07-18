import * as React from "react";
import { SVGProps } from "react";
const Filter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor">
      <path d="M21 7H3V5h18v2ZM19 13H5v-2h14v2ZM8 19h8v-2H8v2Z" />
    </g>
  </svg>
);
export default Filter;
