import * as React from "react";
import { SVGProps } from "react";
const Swap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor">
      <path d="m13 6 1.707-.707 4 4-1.414 1.414L15 8.414V18h-2V6ZM11 18l-1.707.707-4-4 1.414-1.414L9 15.586V6h2v12Z" />
    </g>
  </svg>
);
export default Swap;
