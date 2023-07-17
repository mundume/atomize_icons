import * as React from "react";
import { SVGProps } from "react";
const Notification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd" fill="#4F4B5C" clipPath="url(#a)">
      <path d="M11.952 3.064A5 5 0 0 0 18 10.584v2.002l2 2V20h-5a4.002 4.002 0 0 1-5.775 3.585A4 4 0 0 1 7 20H2v-5.414l2-2V10a7 7 0 0 1 7.952-6.936ZM9.038 20.387A2 2 0 0 1 9 20h4a1.998 1.998 0 0 1-2.003 2 2 2 0 0 1-1.96-1.613Z" />
      <path d="M16 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Notification;
