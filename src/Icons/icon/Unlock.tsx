import * as React from "react";
import { SVGProps } from "react";
const Unlock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#4F4B5C">
      <path d="M13.5 16H13v2h-2v-2h-.5v-3h3v3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a5 5 0 0 0-5 5h2a3 3 0 1 1 6 0v2H4v13h16V9h-3V7a5 5 0 0 0-5-5Zm-6 9v9h12v-9H6Z"
      />
    </g>
  </svg>
);
export default Unlock;
