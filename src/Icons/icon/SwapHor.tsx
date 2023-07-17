import * as React from "react";
import { SVGProps } from "react";
const SwapHor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#4F4B5C">
      <path d="m6 11-.707-1.707 4-4 1.414 1.414L8.414 9H18v2H6ZM18 13l.707 1.707-4 4-1.414-1.414L15.586 15H6v-2h12Z" />
    </g>
  </svg>
);
export default SwapHor;
