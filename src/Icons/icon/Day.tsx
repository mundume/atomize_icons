import * as React from "react";
import { SVGProps } from "react";
const Day = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#4F4B5C">
      <path d="M13 1v3h-2V1h2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      />
      <path d="M13 23v-3h-2v3h2ZM20.485 4.929 18.364 7.05 16.95 5.636l2.121-2.121 1.414 1.414ZM4.929 20.485l2.121-2.121-1.414-1.414-2.121 2.121 1.414 1.414ZM20.485 19.071l-2.121-2.121-1.414 1.414 2.121 2.121 1.414-1.414ZM4.929 3.515 7.05 5.636 5.636 7.05 3.515 4.93l1.414-1.414ZM23 13h-3v-2h3v2ZM1 13h3v-2H1v2Z" />
    </g>
  </svg>
);
export default Day;
