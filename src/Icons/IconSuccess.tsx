import * as React from "react";
import { SVGProps } from "react";
const IconSuccess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <circle cx={24} cy={24} r={24} fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m16 24.718 1.768-1.768 4.066 4.066L30.849 18l1.768 1.768L21.834 30.55 16 24.718Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconSuccess;
