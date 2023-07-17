import * as React from "react";
import { SVGProps } from "react";
const More = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#4F4B5C">
      <path d="M5.5 10.5h3v3h-3v-3ZM10.5 10.5h3v3h-3v-3ZM18.5 10.5h-3v3h3v-3Z" />
    </g>
  </svg>
);
export default More;
