import * as React from "react";
import { SVGProps } from "react";
const Support = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 9a4 4 0 1 1 8 0v8a2 2 0 0 1-2 2v-1h-4v3h4a4 4 0 0 0 4-4h3l1-1v-6l-1-1h-3A6 6 0 1 0 6 9H3l-1 1v6l1 1h4l1-1V9Zm-2 6v-4H4v4h2Zm12-4v4h2v-4h-2Z"
      fill="currentColor"
    />
  </svg>
);
export default Support;
