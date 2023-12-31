import * as React from "react";
import { SVGProps } from "react";
const Copy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 3H4v14h4v4h12V7h-4V3Zm-2 4V5H6v10h2V7h6Zm-4 12V9h8v10h-8Z"
      fill="currentColor"
    />
  </svg>
);
export default Copy;
