import * as React from "react";
import { SVGProps } from "react";
const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 13v6h2v-6h6v-2h-6V5h-2v6H5v2h6Z" fill="currentColor" />
  </svg>
);
export default Plus;
