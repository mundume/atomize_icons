import * as React from "react";
import { SVGProps } from "react";
const EyeHide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#4F4B5C">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m21.721 3.714-18 18L2.307 20.3 6.1 16.507l-4.5-4.5 5.464-5.464a7 7 0 0 1 9.43-.43L20.307 2.3l1.414 1.414Zm-6.65 3.821-2.057 2.058v-.586h-1A3 3 0 0 0 9.307 13.3l-1.793 1.793-3.086-3.086 4.05-4.05a5 5 0 0 1 6.594-.422Z"
      />
      <path d="M14.265 13.99a2.993 2.993 0 0 1-.268.268l.268-.268Z" />
      <path d="M15.55 16.057a4.997 4.997 0 0 1-4.684 1.332l-1.58 1.581a7.002 7.002 0 0 0 7.678-1.498l5.464-5.465-3.09-3.09-1.414 1.414 1.676 1.676-4.05 4.05Z" />
    </g>
  </svg>
);
export default EyeHide;
