import * as React from "react";
import { SVGProps } from "react";
const SelectTokenDai = (props: SVGProps<SVGSVGElement>) => (
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
        fill="#F9A606"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.037 5H11.9c3.566 0 6.27 1.851 7.275 4.545H21v1.628h-1.442c.029.257.043.52.043.786v.04c0 .3-.018.594-.054.883H21v1.628h-1.86C18.106 17.166 15.424 19 11.9 19H6.036v-4.49H4v-1.628h2.037v-1.709H4V9.545h2.037V5Zm1.639 9.51v3.03h4.223c2.607 0 4.543-1.214 5.444-3.03H7.676Zm10.17-1.628H7.675v-1.709h10.172c.038.269.057.545.057.826v.04c0 .287-.02.569-.06.843Zm-5.947-6.424c2.619 0 4.56 1.245 5.457 3.087h-9.68V6.458h4.223Z"
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
export default SelectTokenDai;
