import * as React from "react";
import { SVGProps } from "react";
const Search = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 4a7 7 0 1 0 4.192 12.606l3.515 3.515 1.414-1.414-3.515-3.515A7 7 0 0 0 11 4Zm-5 7a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
      fill="currentColor"
    />
  </svg>
);
export default Search;
