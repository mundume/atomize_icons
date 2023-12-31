import * as React from "react";
import { SVGProps } from "react";
const Apps = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 3H3v8h8V3Zm0 10H3v8h8v-8ZM21 3h-8v8h8V3Zm0 10h-8v8h8v-8Z"
      fill="currentColor"
    />
  </svg>
);
export default Apps;
