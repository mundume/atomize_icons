import * as React from "react";
import { SVGProps } from "react";
const NewFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm1 7.9A5 5 0 0 1 14.1 4H4v16h16V9.9ZM8.21 11.386l3.5-4.5 1.58 1.228L11.044 11H15a1 1 0 0 1 .79 1.614l-3.5 4.5-1.58-1.228L12.956 13H9a1 1 0 0 1-.79-1.614Z"
      fill="currentColor"
    />
  </svg>
);
export default NewFill;
