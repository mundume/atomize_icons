import * as React from "react";
import { SVGProps } from "react";
const SelectTokenEth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
        fill="currentColor"
      />
      <path
        d="M12 4v5.915l4.999 2.233-5-8.148Z"
        fill="currentColor"
        fillOpacity={0.602}
      />
      <path d="m12 4-5 8.148 5-2.233V4Z" fill="currentColor" />
      <path
        d="M12 15.981V20l5.002-6.92L12 15.98Z"
        fill="currentColor"
        fillOpacity={0.602}
      />
      <path d="M12 20v-4.02l-5-2.9L12 20Z" fill="currentColor" />
      <path
        d="m12 15.051 4.999-2.902-5-2.233v5.135Z"
        fill="currentColor"
        fillOpacity={0.2}
      />
      <path
        d="m7 12.149 5 2.902V9.916l-5 2.232Z"
        fill="currentColor"
        fillOpacity={0.602}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SelectTokenEth;
