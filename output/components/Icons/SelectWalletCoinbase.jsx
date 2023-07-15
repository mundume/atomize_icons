import * as React from "react";
const SelectWalletCoinbase = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={20}
        height={20}
      >
        <path
          d="M18.658 2H5.342A3.342 3.342 0 0 0 2 5.342v13.316A3.342 3.342 0 0 0 5.342 22h13.316A3.342 3.342 0 0 0 22 18.658V5.342A3.342 3.342 0 0 0 18.658 2Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#b)">
        <path d="M2 2h20v20.052H2V2Z" fill="url(#c)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.139 12.004a6.94 6.94 0 1 0 13.879 0 6.94 6.94 0 0 0-13.88 0Zm5.166-2.236a.463.463 0 0 0-.463.462v3.547c0 .256.207.463.463.463h3.547a.463.463 0 0 0 .462-.463V10.23a.463.463 0 0 0-.462-.462h-3.547Z"
          fill="#fff"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={12}
        y1={2}
        x2={12}
        y2={22.052}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2E66F8" />
        <stop offset={1} stopColor="#124ADB" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" transform="translate(2 2)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SelectWalletCoinbase;
