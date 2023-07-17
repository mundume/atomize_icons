import * as React from "react";
import { SVGProps } from "react";
const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 13v6h2v-6h6v-2h-6V5h-2v6H5v2h6Z" fill="#4F4B5C" />
  </svg>
);
export default Plus;
