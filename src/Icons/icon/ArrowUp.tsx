import * as React from "react";
import { SVGProps } from "react";
const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m10.75 9.018-3.866 3.866-1.768-1.768L12 4.232l6.884 6.884-1.768 1.768-3.866-3.866V18h-2.5V9.018Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowUp;
