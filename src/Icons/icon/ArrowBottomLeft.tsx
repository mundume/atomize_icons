import * as React from "react";
import { SVGProps } from "react";
const ArrowBottomLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m9.018 16.75 9.866-9.866-1.768-1.768-9.866 9.866V7h-2.5v12.25H17v-2.5H9.018Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowBottomLeft;
