import * as React from "react";
import { SVGProps } from "react";
const Token = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#4F4B5C">
      <path d="m17 9-2-2-2 2 2 2 2-2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 9a6 6 0 1 1 12 0A6 6 0 0 1 9 9Zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      />
      <path d="M7.007 9.339A6.002 6.002 0 0 0 9 21a6.003 6.003 0 0 0 5.661-4.007 7.986 7.986 0 0 1-2.015-.345 4 4 0 1 1-5.294-5.294 7.981 7.981 0 0 1-.345-2.015Z" />
      <path d="M8.432 13.568 7 15l2 2 1.432-1.432a8.046 8.046 0 0 1-2-2Z" />
    </g>
  </svg>
);
export default Token;
