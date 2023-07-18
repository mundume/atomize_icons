import * as React from "react";
import { SVGProps } from "react";
const Undo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7.414 9 2.293-2.293-1.414-1.414L3.586 10l4.707 4.707 1.414-1.414L7.414 11H15a3 3 0 1 1 0 6h-5v2h5a5 5 0 0 0 0-10H7.414Z"
      fill="currentColor"
    />
  </svg>
);
export default Undo;
