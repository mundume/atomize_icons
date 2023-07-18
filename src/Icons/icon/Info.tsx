import * as React from "react";
import { SVGProps } from "react";
const Info = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" />
      <path d="M11 17v-6h2v6h-2ZM11 9V7h2v2h-2Z" />
    </g>
  </svg>
);
export default Info;
