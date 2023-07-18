import * as React from "react";
import { SVGProps } from "react";
const Stepper = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={7} fill="currentColor" />
  </svg>
);
export default Stepper;
