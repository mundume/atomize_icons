import * as React from "react";
import { SVGProps } from "react";
const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m9.768 12 5.116-5.116-1.768-1.768L6.232 12l6.884 6.884 1.768-1.768L9.768 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronLeft;
