import * as React from "react";
import { SVGProps } from "react";
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m14.982 10.75-3.866-3.866 1.768-1.768L19.768 12l-6.884 6.884-1.768-1.768 3.866-3.866H6v-2.5h8.982Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowRight;
