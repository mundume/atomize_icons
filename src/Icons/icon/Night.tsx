import * as React from "react";
import { SVGProps } from "react";
const Night = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.032 6.208a7 7 0 1 0 9.736 9.736 9 9 0 0 1-9.736-9.736ZM3 11.976a9.003 9.003 0 0 1 6.102-8.523l1.269 1.269a7 7 0 0 0 8.884 8.884l1.268 1.268A9 9 0 0 1 3 11.976Z"
      fill="currentColor"
    />
  </svg>
);
export default Night;
