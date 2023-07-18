import * as React from "react";
import { SVGProps } from "react";
const ArrowTopRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m14.982 7.25-9.866 9.866 1.768 1.768 9.866-9.866V17h2.5V4.75H7v2.5h7.982Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowTopRight;
