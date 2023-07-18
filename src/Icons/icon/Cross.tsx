import * as React from "react";
import { SVGProps } from "react";
const Cross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13.768 12 4.773 4.773-1.768 1.768L12 13.768 7.227 18.54l-1.768-1.768L10.232 12 5.46 7.227l1.768-1.768L12 10.232l4.773-4.773 1.768 1.768L13.768 12Z"
      fill="currentColor"
    />
  </svg>
);
export default Cross;
