import * as React from "react";
import { SVGProps } from "react";
const Send = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.432 3.13 4 4.35l3 8 .936.648h5v-2H8.63L6.845 6.241l10.076 5.757-10.044 5.74 1.054-2.74H5.788L4.003 19.64l1.43 1.227 14-8V11.13l-14-8Z"
      fill="currentColor"
    />
  </svg>
);
export default Send;
