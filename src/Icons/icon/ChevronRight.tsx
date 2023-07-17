import * as React from "react";
import { SVGProps } from "react";
const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.232 12 9.116 6.884l1.768-1.768L17.768 12l-6.884 6.884-1.768-1.768L14.232 12Z"
      fill="#4F4B5C"
    />
  </svg>
);
export default ChevronRight;
