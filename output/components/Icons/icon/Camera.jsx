import * as React from "react";
const Camera = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd" fill="#4F4B5C">
      <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
      <path d="M15.535 3h-7.07l-2 3H2v14h20V6h-4.465l-2-3Zm-8 5 2-3h4.93l2 3H20v10H4V8h3.535Z" />
    </g>
  </svg>
);
export default Camera;
