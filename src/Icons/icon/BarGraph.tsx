import * as React from "react";
import { SVGProps } from "react";
const BarGraph = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M10 2h5v20h-5V2Zm2 2v16h1V4h-1ZM3 8h5v14H3V8Zm2 2v10h1V10H5ZM22 11h-5v11h5V11Zm-3 9v-7h1v7h-1Z" />
    </g>
  </svg>
);
export default BarGraph;
