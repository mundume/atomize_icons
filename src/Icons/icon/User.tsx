import * as React from "react";
import { SVGProps } from "react";
const User = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd" fill="#4F4B5C">
      <path d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7ZM8 16a3 3 0 0 0-3 3v3H3v-3a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3h-2v-3a3 3 0 0 0-3-3H8Z" />
    </g>
  </svg>
);
export default User;
