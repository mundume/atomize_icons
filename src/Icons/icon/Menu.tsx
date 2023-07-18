import * as React from "react";
import { SVGProps } from "react";
const Menu = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 7H3V5h18v2Zm0 6H3v-2h18v2ZM3 19h18v-2H3v2Z"
      fill="currentColor"
    />
  </svg>
);
export default Menu;
