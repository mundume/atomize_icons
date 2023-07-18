import * as React from "react";
import { SVGProps } from "react";
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m9.018 10.75 3.866-3.866-1.768-1.768L4.232 12l6.884 6.884 1.768-1.768-3.866-3.866H18v-2.5H9.018Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowLeft;
