import * as React from "react";
import { SVGProps } from "react";
const ChevronUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 8 6.884 6.884-1.768 1.768L12 11.535l-5.116 5.117-1.768-1.768L12 8Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronUp;
