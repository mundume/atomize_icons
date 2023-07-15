import * as React from "react";
const Step1 = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={32} height={32} rx={12} fill="url(#a)" />
    <circle
      cx={16}
      cy={23}
      r={3}
      fill="#7357FF"
      stroke="#7357FF"
      strokeWidth={2}
    />
    <circle
      opacity={0.6}
      cx={24}
      cy={11}
      r={3}
      fill="#7357FF"
      stroke="#7357FF"
      strokeWidth={2}
    />
    <circle
      opacity={0.3}
      cx={8}
      cy={11}
      r={3}
      fill="#7357FF"
      stroke="#7357FF"
      strokeWidth={2}
    />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" />
      </pattern>
      <image
        id="b"
        width={1}
        height={1}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AAAAAAAAFAAFkeJU4AAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);
export default Step1;
