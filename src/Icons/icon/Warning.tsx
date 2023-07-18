import * as React from "react";
import { SVGProps } from "react";
const Warning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M13.392 8v6h-2V8h2ZM13.392 16v2h-2v-2h2Z" />
      <path d="M9.981 2h4.823l9.135 15.823L21.528 22H3.257L.845 17.823l4.568-7.911L9.981 2Zm1.155 2L3.155 17.823 4.41 20h15.962l1.257-2.177-3.99-6.911L13.648 4h-2.513Z" />
    </g>
  </svg>
);
export default Warning;
