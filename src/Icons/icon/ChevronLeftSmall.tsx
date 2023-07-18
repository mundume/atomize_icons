import * as React from "react";
import { SVGProps } from "react";
const ChevronLeftSmall = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.768 12 3.116-3.116-1.768-1.768L7.232 12l4.884 4.884 1.768-1.768L10.768 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronLeftSmall;
