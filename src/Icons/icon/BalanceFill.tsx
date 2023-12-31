import * as React from "react";
import { SVGProps } from "react";
const BalanceFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 3H2v18h15a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Zm-1 6a3 3 0 1 0 0 6h4V9h-4ZM8 19H4v-2h4v2Zm8-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="currentColor"
    />
  </svg>
);
export default BalanceFill;
