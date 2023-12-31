import * as React from "react";
import { SVGProps } from "react";
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 16.652 5.116 9.768 6.884 8 12 13.116 17.116 8l1.768 1.768L12 16.652Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronDown;
