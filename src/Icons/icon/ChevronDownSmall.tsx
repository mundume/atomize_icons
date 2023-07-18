import * as React from "react";
import { SVGProps } from "react";
const ChevronDownSmall = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 15.652-4.884-4.884L8.884 9 12 12.116 15.116 9l1.768 1.768L12 15.652Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronDownSmall;
