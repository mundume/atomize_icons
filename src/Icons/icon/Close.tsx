import * as React from "react";
import { SVGProps } from "react";
const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM9.525 8.11 12 10.587l2.475-2.475 1.414 1.414L13.414 12l2.475 2.475-1.414 1.414L12 13.414 9.525 15.89l-1.414-1.414L10.586 12 8.11 9.525l1.414-1.414Z"
      fill="#4F4B5C"
    />
  </svg>
);
export default Close;
