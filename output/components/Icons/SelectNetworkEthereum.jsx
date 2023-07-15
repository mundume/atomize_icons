import * as React from "react";
const SelectNetworkEthereum = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M.483 15.369A12 12 0 1 1 23.516 8.63 12 12 0 0 1 .483 15.369Z"
        fill="url(#b)"
      />
      <path
        d="m11.77 14.918 4.644-2.066-4.347-8.194-4.812 7.928 4.514 2.332Z"
        fill="#fff"
      />
      <path
        d="m12.067 4.658-.112 10.265-4.7-2.337 4.812-7.928Z"
        fill="#E7E9EE"
      />
      <path
        d="m11.928 20.085 4.832-6.49-4.832 2.158-4.69-2.432 4.69 6.764Z"
        fill="#fff"
      />
      <path
        d="m11.896 10.522 4.52 2.33-4.646 2.066-4.514-2.332 4.64-2.064Z"
        fill="#AEAEAE"
        fillOpacity={0.7}
      />
      <path
        d="m7.256 12.585 4.64-2.063-.126 4.396-4.514-2.332Z"
        fill="#939393"
      />
      <path d="m7.227 13.336 4.69 2.432v4.317l-4.69-6.749Z" fill="#E7E9EE" />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={24.609}
        y1={24.5}
        x2={-5.763}
        y2={-7.293}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#242424" />
        <stop offset={1} stopColor="#9B9B9B" stopOpacity={0.94} />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SelectNetworkEthereum;
