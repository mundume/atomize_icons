import * as React from "react";
const PieChart = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#4F4B5C">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 10a9 9 0 0 0-9-9h-1v10h10v-1Zm-2.533-2.679A7 7 0 0 1 19.928 9H14V3.072a7 7 0 0 1 5.467 4.25Z"
      />
      <path d="M6 4.517a9 9 0 0 1 4-1.461v2.016A7 7 0 1 0 17.928 13h2.016A9 9 0 1 1 6 4.517Z" />
    </g>
  </svg>
);
export default PieChart;
