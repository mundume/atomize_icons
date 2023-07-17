import * as React from "react";
import { SVGProps } from "react";
const SwapHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd" fill="#4F4B5C">
      <path d="M3 16a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM11 8a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 11.868V8a5 5 0 0 1 5-5h2v2H8a3 3 0 0 0-3 3v.131l1.445-.963 1.11 1.664L3 11.868ZM21 12.132V16a5 5 0 0 1-5 5h-2v-2h2a3 3 0 0 0 3-3v-.132l-1.445.964-1.11-1.664L21 12.132Z" />
    </g>
  </svg>
);
export default SwapHorizontal;
