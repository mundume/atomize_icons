import * as React from "react";
import { SVGProps } from "react";
const Play = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 12 7 5.072v13.856L19 12Zm2.5-.866v1.732l-15 8.66L5 20.66V3.34l1.5-.866 15 8.66Z"
      fill="currentColor"
    />
  </svg>
);
export default Play;
