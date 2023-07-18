import * as React from "react";
import { SVGProps } from "react";
const TokensSwapr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      style={{
        mixBlendMode: "multiply",
      }}
      clipPath="url(#a)"
    >
      <mask
        id="b"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={-1}
        width={24}
        height={25}
      >
        <path d="M24-.182H0v24h24v-24Z" fill="currentColor" />
      </mask>
      <g mask="url(#b)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 15.99v-4.172c0-6.627 5.373-12 12-12 3.269 0 6.233 1.307 8.397 3.427L17.846 4.84a9.103 9.103 0 0 0-14.95 6.979h2.897L0 15.991Zm6.11 2.77a9.103 9.103 0 0 0 14.993-6.941h-2.896L24 7.576v4.241c0 6.627-5.372 12-12 12-3.29 0-6.27-1.323-8.437-3.467L6.11 18.76Zm10.493-2.96h-3.31L12 14.055l-1.293 1.747h-3.31l2.999-3.914-3-4.052H10.5L12 9.793l1.5-1.958h3.104l-3 4.052 3 3.914Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TokensSwapr;
