import * as React from "react";
import { SVGProps } from "react";
const Resizer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M6 15.071 15.071 6l1.414 1.414-9.07 9.071L6 15.071ZM11 16.243 16.243 11l1.414 1.414-5.243 5.243L11 16.243Z" />
    </g>
  </svg>
);
export default Resizer;
