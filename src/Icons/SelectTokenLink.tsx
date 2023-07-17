import * as React from "react";
import { SVGProps } from "react";
const SelectTokenLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
        fill="#375BD2"
      />
      <path
        d="m12.002 7.39 4.04 2.297v4.612l-4.029 2.311-4.04-2.293V9.705l4.029-2.315Zm0-3.39-1.483.851-4.036 2.315L5 8.017V16.016l1.483.844 4.04 2.296 1.482.844 1.483-.851 4.03-2.315L19 15.986V7.984l-1.483-.843-4.04-2.297L11.995 4h.007Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SelectTokenLink;
