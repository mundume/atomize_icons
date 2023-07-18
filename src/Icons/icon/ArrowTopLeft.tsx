import * as React from "react";
import { SVGProps } from "react";
const ArrowTopLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.25 9.018V17h-2.5V4.75H17v2.5H9.018l9.866 9.866-1.768 1.768L7.25 9.018Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowTopLeft;
