import * as React from "react";
import { SVGProps } from "react";
const TransactionsFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 8-1-1V2H4v20h16V8h-5Zm4.414-2L16 2.586V6h3.414ZM12 9H8V7h4v2Zm-4 4v-2h8v2H8Zm0 2v2h8v-2H8Z"
      fill="currentColor"
    />
  </svg>
);
export default TransactionsFill;
