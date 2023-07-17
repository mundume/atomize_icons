import * as React from "react";
import { SVGProps } from "react";
const Bitcoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd" fill="#4F4B5C">
      <path d="M11 7.5h1v-1h2v1h.914L16.5 9.086v2.328l-.586.586.586.586v2.328L14.914 16.5H14v1h-2v-1h-1v1H9v-1H8v-2h1v-5H8v-2h1v-1h2v1Zm0 7h3.086l.414-.414v-.672L14.086 13H11v1.5Zm0-3.5V9.5h3.086l.414.414v.672l-.414.414H11Z" />
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" />
    </g>
  </svg>
);
export default Bitcoin;
