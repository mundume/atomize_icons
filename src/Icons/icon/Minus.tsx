import * as React from "react";
import { SVGProps } from "react";
const Minus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 13H5v-2h14v2Z"
      fill="currentColor"
    />
  </svg>
);
export default Minus;
