import * as React from "react";
import { SVGProps } from "react";
const Link = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor">
      <path d="M9.864 14.109a4 4 0 0 1 0-5.657l3.535-3.536a4 4 0 1 1 5.657 5.657l-1.787 1.788a5.996 5.996 0 0 0-.575-2.254l.948-.948a2 2 0 1 0-2.828-2.828l-3.536 3.535a2 2 0 0 0 0 2.829l-1.414 1.414Z" />
      <path d="M12.692 14.109a2 2 0 0 0 0-2.829l1.415-1.414a4 4 0 0 1 0 5.657l-3.536 3.535a4 4 0 0 1-5.657-5.656l1.788-1.788c.042.773.234 1.54.575 2.253l-.949.949a2 2 0 0 0 2.829 2.828l3.535-3.535Z" />
    </g>
  </svg>
);
export default Link;
