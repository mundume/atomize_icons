import * as React from "react";
import { SVGProps } from "react";
const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m10.75 14.982-3.866-3.866-1.768 1.768L12 19.768l6.884-6.884-1.768-1.768-3.866 3.866V6h-2.5v8.982Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDown;
