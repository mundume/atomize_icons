import * as React from "react";
import { SVGProps } from "react";
const Add = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-1-5v-4H7v-2h4V7h2v4h4v2h-4v4h-2Z"
      fill="currentColor"
    />
  </svg>
);
export default Add;
