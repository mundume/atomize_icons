import * as React from "react";
const SelectTokenAave = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
        fill="url(#b)"
      />
      <path
        d="m17.571 16.565-4.058-9.81C13.285 6.247 12.944 6 12.496 6h-.359c-.448 0-.789.247-1.017.755l-1.766 4.274H8.018a.732.732 0 0 0-.727.727v.009a.734.734 0 0 0 .727.727h.717l-1.686 4.073a.851.851 0 0 0-.049.278.78.78 0 0 0 .198.548c.127.139.31.207.538.207a.72.72 0 0 0 .418-.14c.13-.089.22-.219.29-.367l1.856-4.602h1.287a.732.732 0 0 0 .726-.727v-.019a.734.734 0 0 0-.726-.726H10.9l1.416-3.53 3.86 9.6c.071.15.161.279.291.369.12.09.27.136.418.139.228 0 .408-.068.538-.207a.766.766 0 0 0 .198-.548.649.649 0 0 0-.05-.275Z"
        fill="#fff"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={20.947}
        y1={4.472}
        x2={3.091}
        y2={19.496}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SelectTokenAave;
