import * as React from "react";
import { SVGProps } from "react";
const ChevronRightSmall = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.232 12-3.116-3.116 1.768-1.768L16.768 12l-4.884 4.884-1.768-1.768L13.232 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronRightSmall;
