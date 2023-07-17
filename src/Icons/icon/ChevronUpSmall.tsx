import * as React from "react";
import { SVGProps } from "react";
const ChevronUpSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 9 4.884 4.884-1.768 1.768L12 12.536l-3.116 3.116-1.768-1.768L12 9Z"
      fill="#4F4B5C"
    />
  </svg>
);
export default ChevronUpSmall;
