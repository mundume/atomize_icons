import * as React from "react";
import { SVGProps } from "react";
const SelectTokenTel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M12 24c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12S0 5.373 0 12c0 6.628 5.373 12 12 12Z"
        fill="currentColor"
      />
      <path
        d="m17.2 17.692-5.923 2.14c-.606.219-1.282.1-1.777-.312l-4.845-4.026a1.816 1.816 0 0 1-.628-1.71l1.076-6.141a1.817 1.817 0 0 1 1.172-1.395l5.924-2.14c.606-.219 1.282-.1 1.777.312l4.844 4.026c.5.416.74 1.068.628 1.71l-1.076 6.141a1.815 1.815 0 0 1-1.171 1.395Z"
        fill="currentColor"
      />
      <path
        d="m12.678 8.325-.301 1.615h2.208s-.146 1.193-.19 1.193h-2.24l-.48 2.532s-.132.612.29.64h1.732l-.232 1.31H11.28s-1.44-.116-1.251-1.804l.45-2.634h-.9l.159-1.106s1.455-.393 2.212-1.747h.727v.001Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SelectTokenTel;
