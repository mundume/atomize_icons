import * as React from "react";
import { SVGProps } from "react";
const Lock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#4F4B5C">
      <path d="M10.5 16v-3h3v3H13v2h-2v-2h-.5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 9V7a5 5 0 0 1 10 0v2h3v13H4V9h3Zm2-2a3 3 0 1 1 6 0v2H9V7Zm-3 4v9h12v-9H6Z"
      />
    </g>
  </svg>
);
export default Lock;
