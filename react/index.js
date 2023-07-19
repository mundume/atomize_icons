import * as React from "react";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

typeof SuppressedError === "function"
  ? SuppressedError
  : function (error, suppressed, message) {
      var e = new Error(message);
      return (
        (e.name = "SuppressedError"),
        (e.error = error),
        (e.suppressed = suppressed),
        e
      );
    };

var Add = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-1-5v-4H7v-2h4V7h2v4h4v2h-4v4h-2Z",
      fill: "currentColor",
    }),
  );
};

var Close = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM9.525 8.11 12 10.587l2.475-2.475 1.414 1.414L13.414 12l2.475 2.475-1.414 1.414L12 13.414 9.525 15.89l-1.414-1.414L10.586 12 8.11 9.525l1.414-1.414Z",
      fill: "currentColor",
    }),
  );
};

var Stepper = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 7,
      fill: "currentColor",
    }),
  );
};

var Play = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19 12 7 5.072v13.856L19 12Zm2.5-.866v1.732l-15 8.66L5 20.66V3.34l1.5-.866 15 8.66Z",
      fill: "currentColor",
    }),
  );
};

var Resizer = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fillRule: "evenodd", clipRule: "evenodd", fill: "currentColor" },
      React.createElement("path", {
        d: "M6 15.071 15.071 6l1.414 1.414-9.07 9.071L6 15.071ZM11 16.243 16.243 11l1.414 1.414-5.243 5.243L11 16.243Z",
      }),
    ),
  );
};

var SwapHor = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", {
        d: "m6 11-.707-1.707 4-4 1.414 1.414L8.414 9H18v2H6ZM18 13l.707 1.707-4 4-1.414-1.414L15.586 15H6v-2h12Z",
      }),
    ),
  );
};

var Swap = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", {
        d: "m13 6 1.707-.707 4 4-1.414 1.414L15 8.414V18h-2V6ZM11 18l-1.707.707-4-4 1.414-1.414L9 15.586V6h2v12Z",
      }),
    ),
  );
};

var Lock = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", { d: "M10.5 16v-3h3v3H13v2h-2v-2h-.5Z" }),
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 9V7a5 5 0 0 1 10 0v2h3v13H4V9h3Zm2-2a3 3 0 1 1 6 0v2H9V7Zm-3 4v9h12v-9H6Z",
      }),
    ),
  );
};

var BarGraph = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fillRule: "evenodd", clipRule: "evenodd", fill: "currentColor" },
      React.createElement("path", {
        d: "M10 2h5v20h-5V2Zm2 2v16h1V4h-1ZM3 8h5v14H3V8Zm2 2v10h1V10H5ZM22 11h-5v11h5V11Zm-3 9v-7h1v7h-1Z",
      }),
    ),
  );
};

var PieChart = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 10a9 9 0 0 0-9-9h-1v10h10v-1Zm-2.533-2.679A7 7 0 0 1 19.928 9H14V3.072a7 7 0 0 1 5.467 4.25Z",
      }),
      React.createElement("path", {
        d: "M6 4.517a9 9 0 0 1 4-1.461v2.016A7 7 0 1 0 17.928 13h2.016A9 9 0 1 1 6 4.517Z",
      }),
    ),
  );
};

var Camera = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fillRule: "evenodd", clipRule: "evenodd", fill: "currentColor" },
      React.createElement("path", {
        d: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z",
      }),
      React.createElement("path", {
        d: "M15.535 3h-7.07l-2 3H2v14h20V6h-4.465l-2-3Zm-8 5 2-3h4.93l2 3H20v10H4V8h3.535Z",
      }),
    ),
  );
};

var Token = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", { d: "m17 9-2-2-2 2 2 2 2-2Z" }),
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9 9a6 6 0 1 1 12 0A6 6 0 0 1 9 9Zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
      }),
      React.createElement("path", {
        d: "M7.007 9.339A6.002 6.002 0 0 0 9 21a6.003 6.003 0 0 0 5.661-4.007 7.986 7.986 0 0 1-2.015-.345 4 4 0 1 1-5.294-5.294 7.981 7.981 0 0 1-.345-2.015Z",
      }),
      React.createElement("path", {
        d: "M8.432 13.568 7 15l2 2 1.432-1.432a8.046 8.046 0 0 1-2-2Z",
      }),
    ),
  );
};

var Settings = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fillRule: "evenodd", clipRule: "evenodd", fill: "currentColor" },
      React.createElement("path", {
        d: "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
      }),
      React.createElement("path", {
        d: "M9.72 2h4.56l.639 2.55c.095.039.19.078.283.12l2.256-1.354 3.226 3.226-1.354 2.256c.042.093.081.188.12.284l2.55.637v4.562l-2.55.637c-.039.096-.078.19-.12.284l1.354 2.256-3.226 3.226-2.256-1.354c-.093.042-.188.081-.284.12L14.281 22H9.719l-.637-2.55a8.005 8.005 0 0 1-.284-.12l-2.256 1.354-3.226-3.226 1.354-2.256a7.875 7.875 0 0 1-.12-.284L2 14.281V9.719l2.55-.637a7.95 7.95 0 0 1 .12-.284L3.316 6.542l3.226-3.226L8.798 4.67a7.94 7.94 0 0 1 .284-.12L9.719 2Zm1.56 2-.525 2.102-.537.167c-.345.107-.68.25-1.006.42l-.498.263-1.862-1.117-1.017 1.017 1.117 1.862-.262.498a5.95 5.95 0 0 0-.421 1.006l-.167.537L4 11.281v1.438l2.102.526.167.537c.107.345.25.68.42 1.006l.263.498-1.117 1.862 1.017 1.017 1.862-1.117.498.262c.325.171.66.314 1.006.421l.537.167.526 2.102h1.438l.526-2.102.537-.167c.345-.107.68-.25 1.006-.42l.498-.263 1.862 1.117 1.017-1.017-1.117-1.862.262-.498c.171-.325.314-.66.421-1.006l.167-.537L20 12.719v-1.438l-2.102-.526-.167-.537a5.946 5.946 0 0 0-.421-1.006l-.262-.498 1.117-1.862-1.017-1.017-1.862 1.117-.498-.262a5.948 5.948 0 0 0-1.006-.421l-.537-.167L12.719 4h-1.438Z",
      }),
    ),
  );
};

var Unlock = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", { d: "M13.5 16H13v2h-2v-2h-.5v-3h3v3Z" }),
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2a5 5 0 0 0-5 5h2a3 3 0 1 1 6 0v2H4v13h16V9h-3V7a5 5 0 0 0-5-5Zm-6 9v9h12v-9H6Z",
      }),
    ),
  );
};

var EyeView = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.05 6.536 1.586 12l5.464 5.465a7 7 0 0 0 9.9 0L22.414 12 16.95 6.536a7 7 0 0 0-9.9 0Zm1.414 9.514L4.414 12l4.05-4.05a5 5 0 0 1 7.072 0l4.05 4.05-4.05 4.05a5 5 0 0 1-7.072 0ZM15 11h-2V9h-1a3 3 0 1 0 3 3v-1Z",
      fill: "currentColor",
    }),
  );
};

var Warning = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fillRule: "evenodd", clipRule: "evenodd", fill: "currentColor" },
      React.createElement("path", {
        d: "M13.392 8v6h-2V8h2ZM13.392 16v2h-2v-2h2Z",
      }),
      React.createElement("path", {
        d: "M9.981 2h4.823l9.135 15.823L21.528 22H3.257L.845 17.823l4.568-7.911L9.981 2Zm1.155 2L3.155 17.823 4.41 20h15.962l1.257-2.177-3.99-6.911L13.648 4h-2.513Z",
      }),
    ),
  );
};

var Exclamation = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", { d: "M11 17v-2h2v2h-2ZM11 7v6h2V7h-2Z" }),
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
      }),
    ),
  );
};

var Notification = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        clipPath: "url(#a)",
      },
      React.createElement("path", {
        d: "M11.952 3.064A5 5 0 0 0 18 10.584v2.002l2 2V20h-5a4.002 4.002 0 0 1-5.775 3.585A4 4 0 0 1 7 20H2v-5.414l2-2V10a7 7 0 0 1 7.952-6.936ZM9.038 20.387A2 2 0 0 1 9 20h4a1.998 1.998 0 0 1-2.003 2 2 2 0 0 1-1.96-1.613Z",
      }),
      React.createElement("path", { d: "M16 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", {
          fill: "currentColor",
          d: "M0 0h24v24H0z",
        }),
      ),
    ),
  );
};

var Night = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.032 6.208a7 7 0 1 0 9.736 9.736 9 9 0 0 1-9.736-9.736ZM3 11.976a9.003 9.003 0 0 1 6.102-8.523l1.269 1.269a7 7 0 0 0 8.884 8.884l1.268 1.268A9 9 0 0 1 3 11.976Z",
      fill: "currentColor",
    }),
  );
};

var Day = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", { d: "M13 1v3h-2V1h2Z" }),
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
      }),
      React.createElement("path", {
        d: "M13 23v-3h-2v3h2ZM20.485 4.929 18.364 7.05 16.95 5.636l2.121-2.121 1.414 1.414ZM4.929 20.485l2.121-2.121-1.414-1.414-2.121 2.121 1.414 1.414ZM20.485 19.071l-2.121-2.121-1.414 1.414 2.121 2.121 1.414-1.414ZM4.929 3.515 7.05 5.636 5.636 7.05 3.515 4.93l1.414-1.414ZM23 13h-3v-2h3v2ZM1 13h3v-2H1v2Z",
      }),
    ),
  );
};

var Send = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.432 3.13 4 4.35l3 8 .936.648h5v-2H8.63L6.845 6.241l10.076 5.757-10.044 5.74 1.054-2.74H5.788L4.003 19.64l1.43 1.227 14-8V11.13l-14-8Z",
      fill: "currentColor",
    }),
  );
};

var Copy = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16 3H4v14h4v4h12V7h-4V3Zm-2 4V5H6v10h2V7h6Zm-4 12V9h8v10h-8Z",
      fill: "currentColor",
    }),
  );
};

var About = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.022 2C4.363 2 3 3.333 3 5v14a3 3 0 0 0 3 3h14l.738-1.675a1.964 1.964 0 0 1 0-2.65l-.002-.005.004-.002.26-.266V3l-1-1H6.022Zm12.33 16H6a1 1 0 1 0 0 2h12.351a3.979 3.979 0 0 1 0-2ZM5 16.17c.313-.11.65-.17 1-.17h.329a5.822 5.822 0 0 1 2.876-3.514 3.41 3.41 0 1 1 5.41 0A5.822 5.822 0 0 1 17.492 16H19V4H6.022C5.447 4 5 4.458 5 5v11.17Zm6.903-2.35H11.916A3.815 3.815 0 0 1 15.358 16H8.462a3.815 3.815 0 0 1 3.441-2.18Zm.012-2a1.41 1.41 0 1 0-.01 0h.01Z",
      fill: "currentColor",
    }),
  );
};

var Gas = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15 18a3 3 0 1 0 6 0V7a1 1 0 0 0-.293-.707l-1-1-.001-.002-2.999-2.998-1.414 1.414 2.49 2.49-.889 1.778c-.997 1.994.12 4.292 2.106 4.882V18a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3V4l-1-1H4L3 4v16l1 1h9l1-1v-5a1 1 0 0 1 1 1v2ZM5 9V5h7v4H5Zm0 2v8h7v-8H5Z",
      fill: "currentColor",
    }),
  );
};

var Bitcoin = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fillRule: "evenodd", clipRule: "evenodd", fill: "currentColor" },
      React.createElement("path", {
        d: "M11 7.5h1v-1h2v1h.914L16.5 9.086v2.328l-.586.586.586.586v2.328L14.914 16.5H14v1h-2v-1h-1v1H9v-1H8v-2h1v-5H8v-2h1v-1h2v1Zm0 7h3.086l.414-.414v-.672L14.086 13H11v1.5Zm0-3.5V9.5h3.086l.414.414v.672l-.414.414H11Z",
      }),
      React.createElement("path", {
        d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
      }),
    ),
  );
};

var User = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fillRule: "evenodd", clipRule: "evenodd", fill: "currentColor" },
      React.createElement("path", {
        d: "M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7ZM8 16a3 3 0 0 0-3 3v3H3v-3a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3h-2v-3a3 3 0 0 0-3-3H8Z",
      }),
    ),
  );
};

var SwapHorizontal = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fillRule: "evenodd", clipRule: "evenodd", fill: "currentColor" },
      React.createElement("path", {
        d: "M3 16a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM11 8a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 11.868V8a5 5 0 0 1 5-5h2v2H8a3 3 0 0 0-3 3v.131l1.445-.963 1.11 1.664L3 11.868ZM21 12.132V16a5 5 0 0 1-5 5h-2v-2h2a3 3 0 0 0 3-3v-.132l-1.445.964-1.11-1.664L21 12.132Z",
      }),
    ),
  );
};

var EyeHide = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m21.721 3.714-18 18L2.307 20.3 6.1 16.507l-4.5-4.5 5.464-5.464a7 7 0 0 1 9.43-.43L20.307 2.3l1.414 1.414Zm-6.65 3.821-2.057 2.058v-.586h-1A3 3 0 0 0 9.307 13.3l-1.793 1.793-3.086-3.086 4.05-4.05a5 5 0 0 1 6.594-.422Z",
      }),
      React.createElement("path", {
        d: "M14.265 13.99a2.993 2.993 0 0 1-.268.268l.268-.268Z",
      }),
      React.createElement("path", {
        d: "M15.55 16.057a4.997 4.997 0 0 1-4.684 1.332l-1.58 1.581a7.002 7.002 0 0 0 7.678-1.498l5.464-5.465-3.09-3.09-1.414 1.414 1.676 1.676-4.05 4.05Z",
      }),
    ),
  );
};

var Info = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fillRule: "evenodd", clipRule: "evenodd", fill: "currentColor" },
      React.createElement("path", {
        d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z",
      }),
      React.createElement("path", { d: "M11 17v-6h2v6h-2ZM11 9V7h2v2h-2Z" }),
    ),
  );
};

var ChevronRightSmall = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m13.232 12-3.116-3.116 1.768-1.768L16.768 12l-4.884 4.884-1.768-1.768L13.232 12Z",
      fill: "currentColor",
    }),
  );
};

var ChevronLeftSmall = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m10.768 12 3.116-3.116-1.768-1.768L7.232 12l4.884 4.884 1.768-1.768L10.768 12Z",
      fill: "currentColor",
    }),
  );
};

var ChevronUpSmall = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m12 9 4.884 4.884-1.768 1.768L12 12.536l-3.116 3.116-1.768-1.768L12 9Z",
      fill: "currentColor",
    }),
  );
};

var ChevronDownSmall = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m12 15.652-4.884-4.884L8.884 9 12 12.116 15.116 9l1.768 1.768L12 15.652Z",
      fill: "currentColor",
    }),
  );
};

var ArrowTopLeftSmall = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "M9.25 11.018V15h-2.5V6.75H15v2.5h-3.982l5.866 5.866-1.768 1.768-5.866-5.866Z",
      fill: "currentColor",
    }),
  );
};

var ArrowTopRightSmall = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m12.982 9.25-5.866 5.866 1.768 1.768 5.866-5.866V15h2.5V6.75H9v2.5h3.982Z",
      fill: "currentColor",
    }),
  );
};

var ArrowBottomLeftSmall = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m11.018 14.75 5.866-5.866-1.768-1.768-5.866 5.866V9h-2.5v8.25H15v-2.5h-3.982Z",
      fill: "currentColor",
    }),
  );
};

var ArrowBottomRightSmall = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "M12.982 14.75 7.116 8.884l1.768-1.768 5.866 5.866V9h2.5v8.25H9v-2.5h3.982Z",
      fill: "currentColor",
    }),
  );
};

var Undo = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m7.414 9 2.293-2.293-1.414-1.414L3.586 10l4.707 4.707 1.414-1.414L7.414 11H15a3 3 0 1 1 0 6h-5v2h5a5 5 0 0 0 0-10H7.414Z",
      fill: "currentColor",
    }),
  );
};

var Redo = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m16.586 9-2.293-2.293 1.414-1.414L20.414 10l-4.707 4.707-1.414-1.414L16.586 11H9a3 3 0 1 0 0 6h5v2H9A5 5 0 0 1 9 9h7.586Z",
      fill: "currentColor",
    }),
  );
};

var ArrowDoubleRightSmall = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", {
        d: "M11.884 8.884 8.768 12l3.116 3.116-1.768 1.768L5.232 12l4.884-4.884 1.768 1.768Z",
      }),
      React.createElement("path", {
        d: "M17.884 8.884 14.768 12l3.116 3.116-1.768 1.768L11.232 12l4.884-4.884 1.768 1.768Z",
      }),
    ),
  );
};

var Plus = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "M11 13v6h2v-6h6v-2h-6V5h-2v6H5v2h6Z",
      fill: "currentColor",
    }),
  );
};

var Minus = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19 13H5v-2h14v2Z",
      fill: "currentColor",
    }),
  );
};

var Filter = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", {
        d: "M21 7H3V5h18v2ZM19 13H5v-2h14v2ZM8 19h8v-2H8v2Z",
      }),
    ),
  );
};

var Download = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", {
        d: "m13 13.586 4.657-4.657 1.414 1.414L12 17.414l-7.071-7.07 1.414-1.415L11 13.586V3h2v10.586Z",
      }),
      React.createElement("path", {
        d: "M5 15v4h14v-4h2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4h2Z",
      }),
    ),
  );
};

var Link = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", {
        d: "M9.864 14.109a4 4 0 0 1 0-5.657l3.535-3.536a4 4 0 1 1 5.657 5.657l-1.787 1.788a5.996 5.996 0 0 0-.575-2.254l.948-.948a2 2 0 1 0-2.828-2.828l-3.536 3.535a2 2 0 0 0 0 2.829l-1.414 1.414Z",
      }),
      React.createElement("path", {
        d: "M12.692 14.109a2 2 0 0 0 0-2.829l1.415-1.414a4 4 0 0 1 0 5.657l-3.536 3.535a4 4 0 0 1-5.657-5.656l1.788-1.788c.042.773.234 1.54.575 2.253l-.949.949a2 2 0 0 0 2.829 2.828l3.535-3.535Z",
      }),
    ),
  );
};

var Refresh = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", {
        d: "M17.553 7.739A7 7 0 0 1 19 12h2A9 9 0 0 0 6 5.292V4H4v5h5V7H7.101a7 7 0 0 1 10.453.739ZM6.447 16.261A7 7 0 0 1 5 12H3a9 9 0 0 0 15 6.708V20h2v-5h-5v2h1.899a7.001 7.001 0 0 1-10.452-.739Z",
      }),
    ),
  );
};

var More = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "currentColor" },
      React.createElement("path", {
        d: "M5.5 10.5h3v3h-3v-3ZM10.5 10.5h3v3h-3v-3ZM18.5 10.5h-3v3h3v-3Z",
      }),
    ),
  );
};

var Search = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 4a7 7 0 1 0 4.192 12.606l3.515 3.515 1.414-1.414-3.515-3.515A7 7 0 0 0 11 4Zm-5 7a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z",
      fill: "currentColor",
    }),
  );
};

var Menu = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21 7H3V5h18v2Zm0 6H3v-2h18v2ZM3 19h18v-2H3v2Z",
      fill: "currentColor",
    }),
  );
};

var Cross = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m13.768 12 4.773 4.773-1.768 1.768L12 13.768 7.227 18.54l-1.768-1.768L10.232 12 5.46 7.227l1.768-1.768L12 10.232l4.773-4.773 1.768 1.768L13.768 12Z",
      fill: "currentColor",
    }),
  );
};

var Tick = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m3.616 12.884 1.768-1.768 4.066 4.066 9.015-9.016 1.768 1.768L9.45 18.718l-5.834-5.834Z",
      fill: "currentColor",
    }),
  );
};

var ChevronRight = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.232 12 9.116 6.884l1.768-1.768L17.768 12l-6.884 6.884-1.768-1.768L14.232 12Z",
      fill: "currentColor",
    }),
  );
};

var ChevronLeft = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m9.768 12 5.116-5.116-1.768-1.768L6.232 12l6.884 6.884 1.768-1.768L9.768 12Z",
      fill: "currentColor",
    }),
  );
};

var ChevronUp = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m12 8 6.884 6.884-1.768 1.768L12 11.535l-5.116 5.117-1.768-1.768L12 8Z",
      fill: "currentColor",
    }),
  );
};

var ChevronDown = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 16.652 5.116 9.768 6.884 8 12 13.116 17.116 8l1.768 1.768L12 16.652Z",
      fill: "currentColor",
    }),
  );
};

var ArrowTopLeft = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "M7.25 9.018V17h-2.5V4.75H17v2.5H9.018l9.866 9.866-1.768 1.768L7.25 9.018Z",
      fill: "currentColor",
    }),
  );
};

var ArrowTopRight = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m14.982 7.25-9.866 9.866 1.768 1.768 9.866-9.866V17h2.5V4.75H7v2.5h7.982Z",
      fill: "currentColor",
    }),
  );
};

var ArrowBottomLeft = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m9.018 16.75 9.866-9.866-1.768-1.768-9.866 9.866V7h-2.5v12.25H17v-2.5H9.018Z",
      fill: "currentColor",
    }),
  );
};

var ArrowBottomRight = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "M14.982 16.75 5.116 6.884l1.768-1.768 9.866 9.866V7h2.5v12.25H7v-2.5h7.982Z",
      fill: "currentColor",
    }),
  );
};

var ArrowUp = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m10.75 9.018-3.866 3.866-1.768-1.768L12 4.232l6.884 6.884-1.768 1.768-3.866-3.866V18h-2.5V9.018Z",
      fill: "currentColor",
    }),
  );
};

var ArrowDown = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m10.75 14.982-3.866-3.866-1.768 1.768L12 19.768l6.884-6.884-1.768-1.768-3.866 3.866V6h-2.5v8.982Z",
      fill: "currentColor",
    }),
  );
};

var ArrowLeft = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m9.018 10.75 3.866-3.866-1.768-1.768L4.232 12l6.884 6.884 1.768-1.768-3.866-3.866H18v-2.5H9.018Z",
      fill: "currentColor",
    }),
  );
};

var ArrowRight = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m14.982 10.75-3.866-3.866 1.768-1.768L19.768 12l-6.884 6.884-1.768-1.768 3.866-3.866H6v-2.5h8.982Z",
      fill: "currentColor",
    }),
  );
};

var ArrowLeftLg = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m8.018 10.75 5.866-5.866-1.768-1.768L3.232 12l8.884 8.884 1.768-1.768-5.866-5.866H21v-2.5H8.018Z",
      fill: "currentColor",
    }),
  );
};

var ArrowRightLg = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m15.982 10.75-5.866-5.866 1.768-1.768L20.768 12l-8.884 8.884-1.768-1.768 5.866-5.866H3v-2.5h12.982Z",
      fill: "currentColor",
    }),
  );
};

var Apps = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 3H3v8h8V3Zm0 10H3v8h8v-8ZM21 3h-8v8h8V3Zm0 10h-8v8h8v-8Z",
      fill: "currentColor",
    }),
  );
};

var SupportFill = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.921 2.946 12 1.848l-1.921 1.098A8 8 0 0 1 6.109 4H4v7.197a11 11 0 0 0 5.542 9.55L12 22.152l2.457-1.405A11 11 0 0 0 20 11.197V4h-2.11a8 8 0 0 1-3.969-1.054ZM11.414 12 10 10.586 8.586 12l2.828 2.828 4.243-4.242-1.415-1.414L11.415 12Z",
      fill: "currentColor",
    }),
  );
};

var TransactionsFill = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m15 8-1-1V2H4v20h16V8h-5Zm4.414-2L16 2.586V6h3.414ZM12 9H8V7h4v2Zm-4 4v-2h8v2H8Zm0 2v2h8v-2H8Z",
      fill: "currentColor",
    }),
  );
};

var EcosystemDAppsFill = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.414 2H7.586L2 7.586v8.828L7.586 22h8.828L22 16.414V7.586L16.414 2ZM8.35 4.064 5.414 7h1.468L8.35 4.064ZM4 9v6h2V9H4Zm1.414 8 2.936 2.936L6.882 17H5.414Zm5.204 3H11v-3H9.118l1.5 3ZM13 20h.382l1.5-3H13v3Zm2.65-.064L18.586 17h-1.468l-1.468 2.936ZM20 15V9h-2v6h2Zm-1.414-8L15.65 4.064 17.118 7h1.468Zm-5.204-3H13v3h1.882l-1.5-3ZM11 4h-.382l-1.5 3H11V4Zm5 10.764-.118.236H13V9h2.882l.118.236v5.528ZM8.118 9 8 9.236v5.528l.118.236H11V9H8.118Z",
      fill: "currentColor",
    }),
  );
};

var NewFill = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm1 7.9A5 5 0 0 1 14.1 4H4v16h16V9.9ZM8.21 11.386l3.5-4.5 1.58 1.228L11.044 11H15a1 1 0 0 1 .79 1.614l-3.5 4.5-1.58-1.228L12.956 13H9a1 1 0 0 1-.79-1.614Z",
      fill: "currentColor",
    }),
  );
};

var SwapFill = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM3 8v3.868l4.555-3.036-1.11-1.664L5 8.132V8a3 3 0 0 1 3-3h2V3H8a5 5 0 0 0-5 5Zm0 8a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-2 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm15-3.868V16a5 5 0 0 1-5 5h-2v-2h2a3 3 0 0 0 3-3v-.132l-1.445.964-1.11-1.664L21 12.132Z",
      fill: "currentColor",
    }),
  );
};

var BalanceFill = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17 3H2v18h15a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Zm-1 6a3 3 0 1 0 0 6h4V9h-4ZM8 19H4v-2h4v2Zm8-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      fill: "currentColor",
    }),
  );
};

var Step1 = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 32,
        height: 32,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
      },
      props,
    ),
    React.createElement("rect", {
      width: 32,
      height: 32,
      rx: 12,
      fill: "currentColor",
    }),
    React.createElement("circle", {
      cx: 16,
      cy: 23,
      r: 3,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 2,
    }),
    React.createElement("circle", {
      opacity: 0.6,
      cx: 24,
      cy: 11,
      r: 3,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 2,
    }),
    React.createElement("circle", {
      opacity: 0.3,
      cx: 8,
      cy: 11,
      r: 3,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 2,
    }),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "pattern",
        {
          id: "a",
          patternContentUnits: "objectBoundingBox",
          width: 1,
          height: 1,
        },
        React.createElement("use", { xlinkHref: "#b" }),
      ),
      React.createElement("image", {
        id: "b",
        width: 1,
        height: 1,
        xlinkHref:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AAAAAAAAFAAFkeJU4AAAAAElFTkSuQmCC",
      }),
    ),
  );
};

var Step2 = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 32,
        height: 32,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
      },
      props,
    ),
    React.createElement("rect", {
      width: 32,
      height: 32,
      rx: 12,
      fill: "currentColor",
    }),
    React.createElement("circle", {
      opacity: 0.3,
      cx: 16.001,
      cy: 23.001,
      r: 3,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 2,
    }),
    React.createElement("circle", {
      cx: 24.001,
      cy: 11.001,
      r: 3,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 2,
    }),
    React.createElement("circle", {
      opacity: 0.6,
      cx: 8.001,
      cy: 11.001,
      r: 3,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 2,
    }),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "pattern",
        {
          id: "a",
          patternContentUnits: "objectBoundingBox",
          width: 1,
          height: 1,
        },
        React.createElement("use", { xlinkHref: "#b" }),
      ),
      React.createElement("image", {
        id: "b",
        width: 1,
        height: 1,
        xlinkHref:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AAAAAAAAFAAFkeJU4AAAAAElFTkSuQmCC",
      }),
    ),
  );
};

var Step3 = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 32,
        height: 32,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
      },
      props,
    ),
    React.createElement("rect", {
      width: 32,
      height: 32,
      rx: 12,
      fill: "currentColor",
    }),
    React.createElement("circle", {
      opacity: 0.6,
      cx: 16.001,
      cy: 23.001,
      r: 3,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 2,
    }),
    React.createElement("circle", {
      opacity: 0.3,
      cx: 24.001,
      cy: 11.001,
      r: 3,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 2,
    }),
    React.createElement("circle", {
      cx: 8.001,
      cy: 11.001,
      r: 3,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 2,
    }),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "pattern",
        {
          id: "a",
          patternContentUnits: "objectBoundingBox",
          width: 1,
          height: 1,
        },
        React.createElement("use", { xlinkHref: "#b" }),
      ),
      React.createElement("image", {
        id: "b",
        width: 1,
        height: 1,
        xlinkHref:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AAAAAAAAFAAFkeJU4AAAAAElFTkSuQmCC",
      }),
    ),
  );
};

var SelectWalletMetamask = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fillRule: "evenodd", clipRule: "evenodd" },
      React.createElement("path", {
        d: "m7.724 19.433 2.62.696v-.91l.214-.214h1.497v1.82H10.45l-1.978-.857-.749-.535Z",
        fill: "#CDBDB2",
      }),
      React.createElement("path", {
        d: "m16.279 19.433-2.567.696v-.91l-.213-.214H12v1.82h1.604l1.979-.857.695-.535Z",
        fill: "#CDBDB2",
      }),
      React.createElement("path", {
        d: "m10.558 17.453-.214 1.766.267-.214h2.78l.321.214-.213-1.766-.428-.268-2.139.054-.374.214Z",
        fill: "#393939",
      }),
      React.createElement("path", {
        d: "m9.114 5.519 1.283 2.997.588 8.723h2.086l.641-8.723 1.177-2.997H9.114Z",
        fill: "#F89C35",
      }),
      React.createElement("path", {
        d: "m3.5 12.101-1.497 4.335 3.743-.214h2.406v-1.873l-.107-3.853-.535.428L3.5 12.1Z",
        fill: "#F89D35",
      }),
      React.createElement("path", {
        d: "m6.334 12.583 4.384.107-.481 2.248-2.085-.536-1.818-1.82Z",
        fill: "#D87C30",
      }),
      React.createElement("path", {
        d: "m6.334 12.636 1.818 1.713v1.712l-1.818-3.425Z",
        fill: "#EA8D3A",
      }),
      React.createElement("path", {
        d: "m8.152 14.402 2.139.536.694 2.3-.48.268-2.353-1.391v-1.713Z",
        fill: "#F89D35",
      }),
      React.createElement("path", {
        d: "m8.152 16.115-.428 3.318 2.834-1.98-2.406-1.338Z",
        fill: "#EB8F35",
      }),
      React.createElement("path", {
        d: "m10.718 12.69.268 4.549-.803-2.328.535-2.221Z",
        fill: "#EA8E3A",
      }),
      React.createElement("path", {
        d: "m5.692 16.169 2.46-.054-.428 3.318-2.032-3.264Z",
        fill: "#D87C30",
      }),
      React.createElement("path", {
        d: "m3.18 20.878 4.544-1.445-2.032-3.264-3.689.267 1.176 4.442Z",
        fill: "#EB8F35",
      }),
      React.createElement("path", {
        d: "m10.397 8.515-2.299 1.927-1.764 2.14 4.384.161-.32-4.228Z",
        fill: "#E8821E",
      }),
      React.createElement("path", {
        d: "m7.724 19.433 2.834-1.98-.214 1.712v.964l-1.925-.375-.695-.321ZM16.279 19.433l-2.78-1.98.213 1.712v.964l1.925-.375.642-.321Z",
        fill: "#DFCEC3",
      }),
      React.createElement("path", {
        d: "m9.542 13.653.588 1.231-2.085-.535 1.497-.696Z",
        fill: "#393939",
      }),
      React.createElement("path", {
        d: "m3.126 3.003 7.271 5.512-1.23-2.997-6.041-2.515Z",
        fill: "#E88F35",
      }),
      React.createElement("path", {
        d: "m3.126 3.003-.963 2.944.535 3.21-.374.215.535.481-.428.375.588.535-.374.321.855 1.07 4.01-1.23c1.96-1.57 2.923-2.373 2.887-2.409-.035-.035-2.46-1.873-7.271-5.512Z",
        fill: "#8E5A30",
      }),
      React.createElement("path", {
        d: "M20.503 12.101 22 16.436l-3.743-.214h-2.406v-1.873l.107-3.853.535.428 4.01 1.177Z",
        fill: "#F89D35",
      }),
      React.createElement("path", {
        d: "m17.669 12.583-4.384.107.48 2.248 2.086-.536 1.818-1.82Z",
        fill: "#D87C30",
      }),
      React.createElement("path", {
        d: "M17.669 12.636 15.85 14.35v1.712l1.818-3.425Z",
        fill: "#EA8D3A",
      }),
      React.createElement("path", {
        d: "m15.851 14.402-2.139.536-.695 2.3.482.268 2.352-1.391v-1.713Z",
        fill: "#F89D35",
      }),
      React.createElement("path", {
        d: "m15.851 16.115.428 3.318-2.78-1.927 2.352-1.391Z",
        fill: "#EB8F35",
      }),
      React.createElement("path", {
        d: "m13.285 12.69-.268 4.549.802-2.328-.534-2.221Z",
        fill: "#EA8E3A",
      }),
      React.createElement("path", {
        d: "m18.31 16.169-2.459-.054.428 3.318 2.032-3.264Z",
        fill: "#D87C30",
      }),
      React.createElement("path", {
        d: "m20.823 20.878-4.544-1.445 2.032-3.264 3.689.267-1.177 4.442Z",
        fill: "#EB8F35",
      }),
      React.createElement("path", {
        d: "m13.605 8.515 2.3 1.927 1.764 2.14-4.384.161.32-4.228Z",
        fill: "#E8821E",
      }),
      React.createElement("path", {
        d: "m14.46 13.653-.587 1.231 2.085-.535-1.497-.696Z",
        fill: "#393939",
      }),
      React.createElement("path", {
        d: "m20.877 3.003-7.271 5.512 1.23-2.997 6.041-2.515Z",
        fill: "#E88F35",
      }),
      React.createElement("path", {
        d: "m20.877 3.003.962 2.944-.534 3.21.374.215-.535.481.428.375-.588.535.374.321-.855 1.07-4.01-1.23c-1.96-1.57-2.923-2.373-2.888-2.409.036-.035 2.46-1.873 7.272-5.512Z",
        fill: "#8E5A30",
      }),
    ),
  );
};

var SelectWalletWalletConnect = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z",
      fill: "url(#a)",
    }),
    React.createElement("path", {
      d: "M8.355 9.723c2.013-1.964 5.277-1.964 7.29 0l.242.236c.1.099.1.258 0 .356l-.829.809a.131.131 0 0 1-.182 0l-.333-.326a3.66 3.66 0 0 0-5.086 0l-.357.349a.131.131 0 0 1-.182 0l-.829-.809a.247.247 0 0 1 0-.356l.266-.259Zm9.004 1.672.737.72c.101.098.101.257 0 .355l-3.325 3.245a.262.262 0 0 1-.365 0l-2.36-2.303a.066.066 0 0 0-.092 0l-2.36 2.303a.262.262 0 0 1-.364 0L5.904 12.47a.247.247 0 0 1 0-.355l.737-.72a.262.262 0 0 1 .365 0l2.36 2.303a.065.065 0 0 0 .091 0l2.36-2.303a.262.262 0 0 1 .365 0l2.36 2.303a.065.065 0 0 0 .092 0l2.36-2.303a.262.262 0 0 1 .365 0Z",
      fill: "#fff",
    }),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "radialGradient",
        {
          id: "a",
          cx: 0,
          cy: 0,
          r: 1,
          gradientUnits: "userSpaceOnUse",
          gradientTransform: "matrix(20 0 0 20 2 12)",
        },
        React.createElement("stop", { stopColor: "#5D9DF6" }),
        React.createElement("stop", { offset: 1, stopColor: "#006FFF" }),
      ),
    ),
  );
};

var SelectWalletVenly = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m21.805 9.046-2.453.931a.125.125 0 0 1-.159-.165l2.734-6.638c.041-.1-.056-.204-.156-.166l-5.197 1.82a.372.372 0 0 0-.222.212l-3.521 8.89a.141.141 0 0 0 .178.184l2.2-.807a.14.14 0 0 1 .168.204l-3.23 5.487a.181.181 0 0 1-.313 0l-3.232-5.49a.14.14 0 0 1 .169-.204l2.2.807a.141.141 0 0 0 .178-.185L7.624 5.04a.373.373 0 0 0-.222-.212l-5.19-1.82a.125.125 0 0 0-.157.166l2.732 6.638c.04.1-.06.203-.16.165L2.19 9.046a.14.14 0 0 0-.17.203l7.257 12.019c.072.119.2.19.34.19h4.757a.4.4 0 0 0 .34-.19l7.27-12.02c.059-.115-.054-.25-.179-.202Z",
      fill: "#7927FF",
    }),
  );
};

var SelectWalletBitski = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement("path", {
      d: "m3.279 13.024.531-.531c.165-.165.242-.208.335-.236a.476.476 0 0 1 .28 0c.093.028.17.07.335.236l7.938 7.937c.165.166.208.243.236.335a.478.478 0 0 1 0 .28c-.028.093-.071.17-.236.335l-.531.532c-.166.165-.243.207-.335.236a.476.476 0 0 1-.28 0c-.093-.029-.17-.071-.335-.236l-7.938-7.938c-.165-.165-.208-.242-.236-.335a.476.476 0 0 1 0-.28c.028-.093.07-.17.236-.335Z",
      fill: "#4100EA",
    }),
    React.createElement("path", {
      d: "m3.279 13.024.531-.531c.165-.165.242-.208.335-.236a.476.476 0 0 1 .28 0c.093.028.17.07.335.236l7.938 7.937c.165.166.208.243.236.335a.478.478 0 0 1 0 .28c-.028.093-.071.17-.236.335l-.531.532c-.166.165-.243.207-.335.236a.476.476 0 0 1-.28 0c-.093-.029-.17-.071-.335-.236l-7.938-7.938c-.165-.165-.208-.242-.236-.335a.476.476 0 0 1 0-.28c.028-.093.07-.17.236-.335Z",
      fill: "url(#a)",
    }),
    React.createElement("path", {
      d: "M2.205 6.602 5.99 2.816C8.497.309 11.359.505 13.599 2.745c.284.284.64.782.853 1.102.089.124.142.213.213.284.142.142.285.178.587.089 1.866-.516 3.501.053 5.066 1.617 2.186 2.187 2.417 5.12-.356 7.893l-5.315 5.314c-.284.285-.515.267-.8-.017L2.223 7.402c-.284-.285-.302-.516-.017-.8ZM9.972 8.61l.907-.906c.462-.462.533-1.102-.018-1.653-.533-.534-1.19-.48-1.653-.018l-.906.906c-.285.285-.267.516.017.8l.854.854c.284.284.515.302.8.017Zm4.338 4.338 2.382-2.382c.693-.694.835-1.333.248-1.92-.568-.569-1.226-.444-1.92.249l-2.381 2.382c-.285.284-.267.515.018.8l.853.853c.284.284.515.302.8.018Z",
      fill: "#2926CF",
    }),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 7.909,
          y1: 17.085,
          x2: 7.853,
          y2: 17.16,
          gradientUnits: "userSpaceOnUse",
        },
        React.createElement("stop", { stopColor: "#CF0BC3" }),
        React.createElement("stop", { offset: 1, stopColor: "#FF3568" }),
      ),
    ),
  );
};

var SelectWalletCoinbase = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement(
        "mask",
        {
          id: "b",
          style: {
            maskType: "alpha",
          },
          maskUnits: "userSpaceOnUse",
          x: 2,
          y: 2,
          width: 20,
          height: 20,
        },
        React.createElement("path", {
          d: "M18.658 2H5.342A3.342 3.342 0 0 0 2 5.342v13.316A3.342 3.342 0 0 0 5.342 22h13.316A3.342 3.342 0 0 0 22 18.658V5.342A3.342 3.342 0 0 0 18.658 2Z",
          fill: "#fff",
        }),
      ),
      React.createElement(
        "g",
        { mask: "url(#b)" },
        React.createElement("path", {
          d: "M2 2h20v20.052H2V2Z",
          fill: "url(#c)",
        }),
        React.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.139 12.004a6.94 6.94 0 1 0 13.879 0 6.94 6.94 0 0 0-13.88 0Zm5.166-2.236a.463.463 0 0 0-.463.462v3.547c0 .256.207.463.463.463h3.547a.463.463 0 0 0 .462-.463V10.23a.463.463 0 0 0-.462-.462h-3.547Z",
          fill: "#fff",
        }),
      ),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 12,
          y1: 2,
          x2: 12,
          y2: 22.052,
          gradientUnits: "userSpaceOnUse",
        },
        React.createElement("stop", { stopColor: "#2E66F8" }),
        React.createElement("stop", { offset: 1, stopColor: "#124ADB" }),
      ),
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", {
          fill: "#fff",
          transform: "translate(2 2)",
          d: "M0 0h20v20H0z",
        }),
      ),
    ),
  );
};

var SelectNetworkEthereum = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M.483 15.369A12 12 0 1 1 23.516 8.63 12 12 0 0 1 .483 15.369Z",
        fill: "url(#b)",
      }),
      React.createElement("path", {
        d: "m11.77 14.918 4.644-2.066-4.347-8.194-4.812 7.928 4.514 2.332Z",
        fill: "#fff",
      }),
      React.createElement("path", {
        d: "m12.067 4.658-.112 10.265-4.7-2.337 4.812-7.928Z",
        fill: "#E7E9EE",
      }),
      React.createElement("path", {
        d: "m11.928 20.085 4.832-6.49-4.832 2.158-4.69-2.432 4.69 6.764Z",
        fill: "#fff",
      }),
      React.createElement("path", {
        d: "m11.896 10.522 4.52 2.33-4.646 2.066-4.514-2.332 4.64-2.064Z",
        fill: "#AEAEAE",
        fillOpacity: 0.7,
      }),
      React.createElement("path", {
        d: "m7.256 12.585 4.64-2.063-.126 4.396-4.514-2.332Z",
        fill: "#939393",
      }),
      React.createElement("path", {
        d: "m7.227 13.336 4.69 2.432v4.317l-4.69-6.749Z",
        fill: "#E7E9EE",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 24.609,
          y1: 24.5,
          x2: -5.763,
          y2: -7.293,
          gradientUnits: "userSpaceOnUse",
        },
        React.createElement("stop", { stopColor: "#242424" }),
        React.createElement("stop", {
          offset: 1,
          stopColor: "#9B9B9B",
          stopOpacity: 0.94,
        }),
      ),
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectNetworkOptimism = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "#FF0420",
      }),
      React.createElement("path", {
        d: "M8.5 15.187c-.714 0-1.3-.168-1.756-.504-.451-.34-.677-.83-.677-1.46 0-.134.015-.292.043-.484.077-.432.188-.95.332-1.56.408-1.651 1.464-2.477 3.163-2.477.46 0 .878.077 1.243.235.365.15.653.38.864.687.211.302.317.662.317 1.08 0 .124-.014.283-.043.475a19.478 19.478 0 0 1-.327 1.56c-.21.82-.57 1.44-1.09 1.848-.513.403-1.204.6-2.068.6Zm.13-1.296c.336 0 .62-.1.855-.298.24-.197.413-.499.513-.912.14-.566.245-1.056.317-1.478.024-.125.039-.255.039-.389 0-.547-.284-.82-.855-.82-.336 0-.624.1-.864.297-.235.197-.403.5-.504.912-.11.403-.216.893-.326 1.478-.024.12-.039.245-.039.38-.004.556.288.83.864.83ZM12.446 15.101c-.067 0-.115-.02-.153-.062-.029-.048-.039-.101-.029-.164l1.243-5.856a.24.24 0 0 1 .101-.163.264.264 0 0 1 .173-.062h2.395c.667 0 1.2.139 1.603.413.408.278.615.676.615 1.2 0 .148-.02.307-.053.47-.149.691-.451 1.2-.912 1.531-.451.331-1.07.495-1.858.495h-1.214l-.413 1.972a.258.258 0 0 1-.1.164.264.264 0 0 1-.174.062h-1.224Zm3.188-3.442c.254 0 .47-.067.657-.206a.987.987 0 0 0 .38-.595c.019-.101.028-.192.028-.269 0-.173-.053-.307-.153-.398-.101-.096-.279-.144-.524-.144h-1.08l-.34 1.612h1.032Z",
        fill: "#fff",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectNetworkGnosis = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { fill: "#04795B", clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M7.056 13.66c.691 0 1.363-.23 1.91-.652L4.59 8.63a3.12 3.12 0 0 0 .557 4.378 3.18 3.18 0 0 0 1.91.643v.01ZM20.064 10.54c0-.69-.23-1.362-.653-1.91l-4.377 4.378a3.119 3.119 0 0 0 5.03-2.467Z",
      }),
      React.createElement("path", {
        d: "m22.272 5.78-1.94 1.938a4.412 4.412 0 0 1-.556 6.212 4.396 4.396 0 0 1-5.654 0L12 16.05 9.878 13.93a4.412 4.412 0 0 1-6.21-.557 4.396 4.396 0 0 1 0-5.655l-.99-.988-.94-.95A11.927 11.927 0 0 0 0 12c0 6.624 5.376 12 12 12s12-5.376 12-12a12.033 12.033 0 0 0-1.728-6.22Z",
      }),
      React.createElement("path", {
        d: "M20.678 3.715c-4.57-4.79-12.163-4.973-16.953-.403a7.983 7.983 0 0 0-.403.403c-.298.317-.576.643-.845.98L12 14.217l9.523-9.524c-.259-.345-.547-.672-.845-.979ZM12 1.565c2.803 0 5.414 1.085 7.382 3.053L12 12 4.618 4.618C6.576 2.64 9.197 1.565 12 1.565Z",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenWbtc = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "#F5F5F5",
      }),
      React.createElement("path", {
        d: "m17.677 6.778-.494.494a6.997 6.997 0 0 1 0 9.443l.494.494a7.704 7.704 0 0 0 0-10.443v.012ZM7.283 6.82a6.997 6.997 0 0 1 9.444 0l.494-.494a7.703 7.703 0 0 0-10.443 0l.505.495ZM6.82 16.72a6.997 6.997 0 0 1 0-9.438l-.494-.494a7.704 7.704 0 0 0 0 10.443l.494-.51ZM16.72 17.176a6.997 6.997 0 0 1-9.443 0l-.494.495a7.704 7.704 0 0 0 10.443 0l-.506-.495Z",
        fill: "#5A5564",
      }),
      React.createElement("path", {
        d: "M15.12 10.351c-.099-1.031-.988-1.377-2.113-1.483v-1.42h-.87v1.394h-.696V7.448h-.863v1.43H8.814v.931s.642-.011.632 0a.45.45 0 0 1 .495.382v3.915a.305.305 0 0 1-.106.212.3.3 0 0 1-.224.076c.012.01-.632 0-.632 0l-.165 1.04h1.748v1.453h.87v-1.432h.695v1.425h.871v-1.437c1.47-.089 2.495-.451 2.623-1.827.104-1.107-.417-1.601-1.249-1.8.506-.25.82-.71.748-1.465Zm-1.219 3.094c0 1.08-1.852.957-2.441.957v-1.917c.59.001 2.441-.169 2.441.96Zm-.403-2.702c0 .989-1.546.868-2.037.868V9.868c.491 0 2.037-.155 2.037.875Z",
        fill: "#F09242",
      }),
      React.createElement("path", {
        d: "M11.998 21a9 9 0 1 1 .003-18 9 9 0 0 1-.003 18Zm0-17.298a8.293 8.293 0 1 0 .013 16.586 8.293 8.293 0 0 0-.013-16.586Z",
        fill: "#282138",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenUsdt = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)", fillRule: "evenodd", clipRule: "evenodd" },
      React.createElement("path", {
        d: "M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z",
        fill: "#50AF95",
      }),
      React.createElement("path", {
        d: "M13.424 12.947c-.08.006-.49.03-1.407.03-.73 0-1.247-.021-1.429-.03-2.818-.124-4.921-.616-4.921-1.205 0-.588 2.103-1.08 4.921-1.205v1.92c.185.013.712.045 1.442.045.875 0 1.313-.037 1.392-.044v-1.92c2.812.126 4.91.617 4.91 1.204 0 .588-2.098 1.08-4.91 1.204h.002Zm0-2.608V8.621h3.925V6H6.664v2.62h3.924v1.719c-3.19.146-5.588.78-5.588 1.538 0 .759 2.398 1.391 5.588 1.539v5.507h2.836v-5.51c3.182-.146 5.576-.778 5.576-1.536s-2.392-1.39-5.576-1.538Z",
        fill: "#fff",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenUsdc = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "#2775C9",
      }),
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.28 7.545v-.75a.72.72 0 0 1 1.44 0v.747c1.303.196 2.196.937 2.435 1.992a.425.425 0 0 1-.415.519h-.39a.814.814 0 0 1-.736-.467c-.248-.528-.837-.832-1.62-.832-.982 0-1.643.48-1.643 1.203 0 .577.439.914 1.504 1.167l.998.228c1.763.403 2.509 1.131 2.509 2.425 0 1.433-1 2.402-2.642 2.63v.868a.72.72 0 0 1-1.44 0v-.854c-1.454-.175-2.436-.945-2.666-2.122a.357.357 0 0 1 .35-.426h.592c.267 0 .511.154.626.396.272.572.969.927 1.841.927 1.047 0 1.775-.517 1.775-1.239 0-.626-.445-.987-1.54-1.245l-1.125-.265c-1.6-.367-2.358-1.137-2.358-2.376 0-1.335 1.007-2.294 2.505-2.526ZM3 12C3 8.03 5.592 4.66 9.183 3.483a.432.432 0 0 1 .567.41v.254a.95.95 0 0 1-.593.88C6.394 6.146 4.447 8.847 4.447 12s1.945 5.852 4.706 6.972c.36.146.597.497.597.886v.212a.46.46 0 0 1-.604.435C5.574 19.317 3 15.958 3 12Zm18 0c0 3.949-2.562 7.3-6.12 8.497a.477.477 0 0 1-.63-.453v-.17c0-.398.241-.757.61-.908 2.754-1.123 4.694-3.819 4.694-6.966 0-3.144-1.936-5.837-4.686-6.962a.995.995 0 0 1-.618-.922v-.154a.481.481 0 0 1 .635-.456C18.44 4.703 21 8.054 21 12Z",
        fill: "#fff",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenAda = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Z",
        fill: "#0033AD",
      }),
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.957 5.442a.455.455 0 0 0 .475-.425.451.451 0 0 0-.9-.055.458.458 0 0 0 .425.48Zm4.199.06a.35.35 0 0 1-.488.104.36.36 0 0 1-.103-.493.352.352 0 0 1 .487-.098.35.35 0 0 1 .104.487Zm-7.887.137a.358.358 0 0 0 .156-.475.358.358 0 0 0-.475-.157.354.354 0 0 0 .319.632Zm1.096 7.49a1.089 1.089 0 0 1-1.028-1.15c.03-.58.51-1.035 1.089-1.032a1.084 1.084 0 0 1 1.094 1.088 1.084 1.084 0 0 1-1.09 1.094h-.065ZM3.893 12.03a.353.353 0 1 1 .705.038.353.353 0 0 1-.705-.038Zm5.725-5.189a.543.543 0 1 1-.973.49.543.543 0 0 1 .973-.49Zm-3.97 2.06a.45.45 0 0 0 .622-.13.45.45 0 0 0-.129-.621.45.45 0 0 0-.621.129.444.444 0 0 0 .129.621Zm.087 3.117a.544.544 0 0 1 .576-.516c.3.018.53.278.515.576a.544.544 0 0 1-.576.516.544.544 0 0 1-.515-.576Zm-.028 3.147a.454.454 0 0 0-.2.607c.114.22.382.31.607.2a.454.454 0 0 0 .2-.607.455.455 0 0 0-.607-.2Zm3.006-4.976a.641.641 0 0 1-1.074-.7c.19-.3.59-.382.887-.187.301.19.382.589.187.887Zm5.839-2.66a.55.55 0 0 0 .758-.157.55.55 0 0 0-.157-.758.55.55 0 0 0-.758.157.543.543 0 0 0 .157.757Zm.08 3.408a1.087 1.087 0 0 0-1.149 1.028 1.088 1.088 0 0 0 1.028 1.15h.06a1.09 1.09 0 0 0 1.09-1.095 1.08 1.08 0 0 0-1.029-1.083Zm-3.92-.038a1.096 1.096 0 0 1-.493-2.072 1.09 1.09 0 0 1 1.581.978 1.09 1.09 0 0 1-1.088 1.094ZM18.29 8.9a.451.451 0 1 0-.612-.2c.119.22.39.311.612.2Zm-3.052 1.208a.643.643 0 0 1 .285-.862c.316-.156.7-.03.862.286a.643.643 0 0 1-1.147.576Zm-2.613-2.45a.642.642 0 1 1-1.28-.069.642.642 0 0 1 1.28.068Zm-4.15 7.161a.643.643 0 0 0-.576-1.147.643.643 0 0 0 .576 1.147Zm4.209-4.108a1.089 1.089 0 1 1 1.192-1.823 1.088 1.088 0 1 1-1.192 1.823Zm1.581 3.057a1.09 1.09 0 0 0-1.465-.485 1.09 1.09 0 0 0-.485 1.466c.273.54.93.758 1.465.485.536-.268.758-.917.488-1.458.002-.003.002-.003-.003-.008Zm1.02.11a.641.641 0 1 1 .187.887.635.635 0 0 1-.186-.888Zm2.98-1.825a.544.544 0 0 0-.516-.576.544.544 0 0 0-.576.515.544.544 0 0 0 .515.576.55.55 0 0 0 .576-.515Zm1.136-.056a.353.353 0 1 1 .705.038.353.353 0 0 1-.705-.038Zm-1.05 3.168a.45.45 0 0 0-.622.13.45.45 0 0 0 .128.62.45.45 0 0 0 .622-.128.444.444 0 0 0-.129-.622Zm-10.51 3.393a.352.352 0 0 1 .487-.098.345.345 0 0 1 .099.487.352.352 0 0 1-.586-.389Zm7.89-.131a.358.358 0 0 0-.157.475.358.358 0 0 0 .475.157.354.354 0 0 0-.319-.632Zm-4.417-5.078c.506.333.645 1.008.316 1.513-.202.311-.543.498-.917.493a1.091 1.091 0 0 1-.912-1.69 1.095 1.095 0 0 1 1.513-.316Zm-1.867 3.188a.55.55 0 0 0-.757.157.55.55 0 0 0 .156.758.55.55 0 0 0 .758-.157.542.542 0 0 0-.157-.758Zm2.072 2.511a.455.455 0 0 1 .475-.424c.248.018.437.23.424.48a.45.45 0 0 1-.899-.056Zm.48-3.246a.636.636 0 0 0-.675.606.636.636 0 0 0 .607.675.641.641 0 1 0 .068-1.28Zm2.387 1.428a.546.546 0 1 1 .973-.498.546.546 0 0 1-.973.498Z",
        fill: "#fff",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenMatic = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "#8247E5",
      }),
      React.createElement("path", {
        d: "M15.972 9.432a1.016 1.016 0 0 0-.979 0l-2.245 1.284-1.525.837-2.245 1.284a1.015 1.015 0 0 1-.979 0l-1.784-1.005c-.288-.167-.49-.474-.49-.809V9.042a.9.9 0 0 1 .49-.81l1.755-.976c.288-.168.662-.168.98 0l1.755.976c.288.168.49.475.49.81v1.284l1.524-.866V8.177a.9.9 0 0 0-.489-.81L8.978 5.525a1.016 1.016 0 0 0-.979 0L4.69 7.367a.9.9 0 0 0-.489.81v3.711a.9.9 0 0 0 .49.81L8 14.539c.287.168.661.168.978 0l2.245-1.255 1.525-.866 2.245-1.255c.288-.168.662-.168.979 0l1.756.976c.287.168.489.475.489.81v1.981a.9.9 0 0 1-.49.81l-1.755 1.004a1.016 1.016 0 0 1-.979 0l-1.755-.977c-.288-.167-.49-.474-.49-.809v-1.284l-1.525.865v1.284a.9.9 0 0 0 .49.81l3.31 1.841c.287.168.661.168.978 0l3.31-1.841c.288-.168.489-.475.489-.81v-3.712a.9.9 0 0 0-.49-.809l-3.338-1.87Z",
        fill: "#fff",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenArbitrum = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "#283141",
      }),
      React.createElement("path", {
        d: "m12.096 14.61 2.441 3.854 2.255-1.315-3.206-5.083-1.49 2.543ZM18.846 15.603l-.002-1.053-3.503-5.49-1.3 2.22 3.382 5.501 1.223-.713a.546.546 0 0 0 .2-.397v-.068Z",
        fill: "#2C97E7",
      }),
      React.createElement("path", {
        d: "M4.166 15.966c0 .39.208.751.545.947l1.181.684 5.747-9.27-.976-.025c-.83-.012-1.726.205-2.137.88l-3.263 5.087-1.097 1.697ZM14.955 8.327l-2.57.01-5.815 9.652 2.032 1.178.553-.943 5.8-9.897Z",
        fill: "#fff",
      }),
      React.createElement("path", {
        d: "M19.929 8.314a1.649 1.649 0 0 0-.769-1.324l-6.39-3.696a1.653 1.653 0 0 0-1.465 0c-.054.027-6.214 3.62-6.214 3.62a1.638 1.638 0 0 0-.925 1.397v7.655l1.097-1.697-.01-5.907a.544.544 0 0 1 .226-.41c.03-.021 6.295-3.67 6.315-3.68a.553.553 0 0 1 .482-.002l6.307 3.65c.15.095.243.257.251.435v7.316a.535.535 0 0 1-.188.398l-1.223.712-.631.368-2.255 1.315-2.287 1.333a.552.552 0 0 1-.39-.008l-2.705-1.565-.553.943 2.432 1.408a37.138 37.138 0 0 0 .386.216c.172.085.421.134.645.134.206 0 .406-.038.595-.113l6.643-3.87c.381-.297.605-.745.626-1.23V8.314Z",
        fill: "#8DB4D4",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenWeth = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement(
        "mask",
        {
          id: "b",
          style: {
            maskType: "luminance",
          },
          maskUnits: "userSpaceOnUse",
          x: 0,
          y: 0,
          width: 24,
          height: 24,
        },
        React.createElement("path", {
          d: "M23.9 0H0v24h23.9V0Z",
          fill: "#fff",
        }),
      ),
      React.createElement(
        "g",
        { mask: "url(#b)" },
        React.createElement("path", {
          d: "M6.568 24c6.158 0 6.158-.092 7.203-.401 1.364-.405-3.853-4.017-7.203-4.017s-6.066.99-6.066 2.21S3.217 24 6.568 24Z",
          fill: "#000",
        }),
        React.createElement("path", {
          d: "m20.552 5.214.283.305-.247.334C12.556 16.713 7.928 21.63 5.966 20.971c-1.196-.402-2.395-1.61-3.595-3.364a24.839 24.839 0 0 1-1.725-2.955 2.602 2.602 0 0 1-.235-.684l-.006-.028a2.146 2.146 0 0 0-.04-.18A10.95 10.95 0 0 1 16.283 1.386l.041.026c1.325.922 2.734 2.189 4.229 3.8ZM15.77 2.25A9.948 9.948 0 0 0 1.336 13.502c.022.082.031.128.054.247l.005.024c.03.156.083.306.157.446.097.201.29.575.52.986.345.621.725 1.245 1.128 1.835 1.084 1.584 2.158 2.667 3.085 2.978 1.237.416 5.89-4.511 13.246-14.426a25.263 25.263 0 0 0-3.761-3.34Z",
          fill: "#000",
        }),
        React.createElement("path", {
          d: "M15.77 2.251A9.948 9.948 0 0 0 1.336 13.502c.021.082.031.128.054.247l.004.024c.031.156.084.306.158.446A23.976 23.976 0 0 0 3.2 17.04c1.083 1.585 2.158 2.668 3.085 2.98 1.237.415 5.89-4.512 13.246-14.427A25.262 25.262 0 0 0 15.77 2.25Z",
          fill: "#EC1C79",
        }),
        React.createElement("path", {
          d: "M12.954 23.9a10.946 10.946 0 1 1 0-21.892 10.946 10.946 0 0 1 0 21.892Zm0-1.005a9.94 9.94 0 1 0 0-19.881 9.94 9.94 0 0 0 0 19.881Z",
          fill: "#000",
        }),
        React.createElement("path", {
          d: "M12.954 22.895a9.94 9.94 0 1 0 0-19.88 9.94 9.94 0 0 0 0 19.88Z",
          fill: "#fff",
        }),
        React.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "m5.517 14.99-1.316-3.964h1.153l.687 2.277.758-2.288h.939l.76 2.288.685-2.277h1.13l-1.315 3.965h-.95l-.793-2.267-.788 2.267h-.95Zm5.23-.027v-3.937h3.166v.928h-2.086v.596h1.89v.861h-1.89v.624h2.114v.928h-3.194Zm4.713 0v-2.981h-1.181v-.956h3.452v.956h-1.18v2.98H15.46Zm2.75 0v-3.937h1.09v1.473h1.4v-1.473h1.092v3.936h-1.091v-1.495h-1.4v1.495h-1.092Z",
          fill: "#000",
        }),
        React.createElement("path", {
          d: "M.652 9.842a.562.562 0 1 1 .503-1.006l1.607.803a.562.562 0 1 1-.503 1.006L.652 9.842ZM.467 12.506a.564.564 0 0 1-.146-.923.562.562 0 0 1 .617-.098l1.607.741a.562.562 0 0 1-.47 1.022l-1.608-.742Z",
          fill: "#000",
        }),
      ),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectToken1inch = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z",
        fill: "#0C192B",
        stroke: "#000",
        strokeOpacity: 0.08,
      }),
      React.createElement("path", {
        d: "m7.762 13.37.53-3.975-4.59-3.186 4.193 1.42.99-1.52 3.617-2.243 7.97 4.392.413 6.7-3.55 4.934-2.808.43 1.452-2.656v-2.558l-1.055-1.998-1.073-.71-1.65 1.7v1.8l-1.287 1.205-1.635.198-.725.41-1.188-.378-.495-1.783.891-1.253v-.928Z",
        fill: "#fff",
      }),
      React.createElement("path", {
        d: "M15.09 6.175c-.874-.181-1.83-.133-1.83-.133s-.314 1.451-2.261 1.833c.014 0 2.572.875 4.091-1.7ZM15.883 19.346c1.055-.826 1.848-1.963 2.213-3.25.017-.049.164-.134.263-.199.164-.099.33-.181.362-.314.065-.38.099-.775.099-1.171 0-.148-.15-.298-.297-.445-.116-.099-.232-.215-.232-.297a6.273 6.273 0 0 0-1.964-3.927l-.116.116a6.159 6.159 0 0 1 1.916 3.828c.017.133.147.263.28.396.116.1.249.25.249.314 0 .38-.034.759-.1 1.138-.016.065-.163.133-.28.198-.163.082-.314.164-.345.297a6.101 6.101 0 0 1-2.51 3.418c.216-.461.892-1.964 1.254-2.725l-.065-2.442-2.097-2.028-1.188.164-1.304 2.113s.61.776-.25 1.684c-.84.891-1.502 1.09-1.502 1.09l-.611-.332c.181-.232.546-.577.826-.809.478-.396.957-.43.957-.857.02-.894-.94-.648-.94-.648l-.348.33-.147 1.223-.724.908-.083-.017-1.188-.263s.727-.379.843-.809c.116-.413-.232-1.783-.249-1.865.017.017.348.298.495.759.264-.727.612-1.42.71-1.486.1-.065 1.435-.775 1.435-.775l-.444 1.171.331-.18.792-1.947s.776-.38 1.353-.38c1.038-.017 2.575-1.287 1.882-3.565.197.082 3.63 1.8 4.224 5.167.444 2.589-1.024 5.014-3.5 6.417Z",
        fill: "#94A6C3",
      }),
      React.createElement("path", {
        d: "M11.955 6.537c.38-.447.232-1.106.232-1.106l-1.106 1.635c-.017 0 .393.017.874-.529ZM8.24 15.467l.133-.66s-.546.957-.594 1.09c-.05.15.034.413.246.396.215-.017.478-.33.478-.56 0-.297-.263-.266-.263-.266Z",
        fill: "#1B314F",
      }),
      React.createElement("path", {
        d: "M18.044 4.97s.827.034 1.684.133c-1.933-1.52-3.763-1.964-5.249-1.964-2.045 0-3.432.843-3.517.891l.645-1.024s-2.574-.249-3.483 2.476c-.232-.577-.444-1.42-.444-1.42s-1.338 1.174-.71 3.12c-1.537-.56-3.73-1.338-3.814-1.352-.116-.017-.15.034-.15.034s-.034.048.065.133c.184.144 3.65 2.705 4.41 3.2-.163.594-.163.874 0 1.154.233.38.247.578.216.858-.034.28-.331 2.708-.396 3.005-.065.297-.758 1.352-.727 1.666.034.314.46 1.65.843 1.8.28.099.973.314 1.434.314.165 0 .314-.034.38-.1.28-.245.362-.296.56-.296h.048c.082 0 .181.017.297.017.263 0 .611-.051.857-.28.362-.363.99-.858 1.189-1.09.249-.314.379-.741.314-1.171-.051-.396.164-.744.413-1.09.314-.413.891-1.154.891-1.154 1.14.855 1.85 2.159 1.85 3.61 0 2.575-2.243 4.655-5.016 4.655-.43 0-.84-.048-1.253-.147 1.27.444 2.342.594 3.22.594 1.864 0 2.854-.676 2.854-.676s-.345.447-.908.956h.017c3.087-.43 4.59-2.97 4.59-2.97s-.116.825-.263 1.386c4.105-3.087 3.412-6.95 3.395-7.08.034.048.447.543.66.81.661-6.803-4.902-8.998-4.902-8.998Zm-6.32 10.862c-.066.082-.346.331-.544.512-.198.181-.413.362-.577.53-.065.065-.198.099-.396.099h-.495c.249-.332.973-1.09 1.222-1.254.297-.198.447-.396.263-.741-.181-.348-.66-.264-.66-.264s.28-.116.53-.116c-.314-.082-.71 0-.891.182-.198.18-.165.826-.247 1.236-.082.43-.362.645-.792 1.041-.232.215-.396.28-.529.28a5.632 5.632 0 0 1-.843-.215c-.164-.215-.413-.925-.478-1.222.048-.164.246-.512.345-.71.198-.38.314-.594.348-.792.065-.28.28-2.015.362-2.74.215.28.512.745.444 1.042.479-.676.133-1.338-.034-1.602-.147-.263-.345-.792-.18-1.352.163-.56.758-2.114.758-2.114s.198.348.478.28c.28-.065 2.54-3.466 2.54-3.466s.612 1.336-.033 2.312c-.66.973-1.305 1.154-1.305 1.154s.909.164 1.749-.447c.345.81.676 1.65.693 1.766-.05.116-.71 1.7-.775 1.8-.034.033-.263.098-.43.133-.28.082-.444.132-.512.18-.116.1-.645 1.551-.892 2.261a1.37 1.37 0 0 0-.809.578c.116-.082.478-.133.744-.165.232-.017.94.363 1.124 1.073v.034c.036.26-.046.51-.179.707Zm-1.551.198c.15-.215.133-.577.15-.693.017-.116.048-.331.18-.362.134-.034.448.017.448.246 0 .215-.232.263-.396.413-.12.113-.351.362-.382.396Zm6.584-3.155c.164-.84.181-1.567.133-2.161a6.064 6.064 0 0 1 1.154 2.97c.017.134.148.264.28.397.117.099.25.232.25.314 0 .379-.034.758-.1 1.14-.016.048-.163.133-.28.198-.164.082-.314.164-.345.297a6.152 6.152 0 0 1-2.178 3.186c1.533-1.601 2.274-4.244 1.086-6.34Zm-1.038 6.488c1.072-.826 1.898-1.98 2.26-3.285.017-.048.165-.133.264-.198.164-.082.33-.18.362-.314.065-.379.099-.775.099-1.171 0-.147-.15-.297-.297-.444-.082-.1-.215-.216-.215-.298a6.473 6.473 0 0 0-1.353-3.285c-.33-1.98-1.65-2.591-1.683-2.608.034.05.89 1.287.297 2.739-.611 1.468-2.179 1.239-2.312 1.253-.133 0-.642.66-1.287 1.882a1.783 1.783 0 0 0-.827-.049c.297-.826.745-1.997.827-2.096.034-.034.28-.1.447-.147.314-.082.46-.133.512-.198.034-.051.198-.43.362-.827.15 0 .529-.034.56-.05.034-.034.348-.84.348-.94 0-.082-.645-1.683-.891-2.295.116-.133.232-.297.345-.478 3.384.365 6.027 3.237 6.027 6.717a6.76 6.76 0 0 1-3.845 6.092Z",
        fill: "#1B314F",
      }),
      React.createElement("path", {
        d: "M11.327 10.45c.314-.362.15-1.038-.43-1.154.15-.345.362-1.038.362-1.038s-1.683 2.64-1.83 2.69c-.15.051-.297-.529-.297-.529-.315 1.206.529 1.37.628.99.46-.118 1.253-.613 1.567-.959Z",
        fill: "#1B314F",
      }),
      React.createElement("path", {
        d: "m9.89 11.093.857-1.469s.495.25.246.646c-.31.46-1.103.823-1.103.823Z",
        fill: "#FFD923",
      }),
      React.createElement("path", {
        d: "M20.503 17.895c-.249.33-.529.676-.857 1.007 2.128-4.094.1-7.84.017-7.988.15.15.297.315.43.462 1.633 1.813 1.83 4.538.41 6.519ZM22.484 12.63c-.744-1.998-1.8-3.7-4.125-5.233-2.244-1.485-4.655-1.37-4.788-1.352h-.034c.082-.034.164-.051.246-.065a10.544 10.544 0 0 1 1.834-.38c1.751-.251 3.517.343 4.722 1.616l.034.034c1.37 1.452 2.08 3.265 2.111 5.38ZM17.83 4.457c-2.46-.46-4.044-.232-5.184.199a4.891 4.891 0 0 0-.25-.612 26.55 26.55 0 0 0-.936 1.223c-.628.43-.891.843-.891.843.362-1.24 1.42-2.162 2.708-2.394a6.727 6.727 0 0 1 1.188-.099 7.77 7.77 0 0 1 3.364.84ZM8.735 7.626c-1.93-.065-1.287-2.311-1.253-2.441 0 .017.13 1.765 1.253 2.441ZM10.634 3.583c-1.486.891-1.188 3.02-1.188 3.02-1.42-2.16 1.072-2.969 1.188-3.02Z",
        fill: "#D82122",
      }),
      React.createElement("path", {
        d: "M8.192 8.22c.1.083.198.233.082.448-.065.116-.164.099-.314.034-.198-.1-1.386-.792-2.459-1.503 1.223.43 2.46.892 2.657.99 0 0 .017.018.034.032Z",
        fill: "#fff",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenUni = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "#FF007A",
      }),
      React.createElement("path", {
        style: {
          mixBlendMode: "soft-light",
        },
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "url(#b)",
      }),
      React.createElement("path", {
        d: "M9.009 3.814c-.228-.036-.238-.04-.13-.056.205-.032.692.012 1.027.09.781.187 1.492.663 2.252 1.509l.202.224.288-.046c1.216-.196 2.454-.04 3.488.438.285.131.734.393.79.46.018.021.05.16.073.307.076.51.038.9-.117 1.192-.085.158-.09.208-.033.344a.333.333 0 0 0 .297.189c.258 0 .535-.416.663-.995l.051-.23.1.115c.555.627.989 1.483 1.063 2.09l.02.16-.093-.144a1.784 1.784 0 0 0-.527-.555c-.37-.245-.764-.328-1.804-.384-.939-.05-1.47-.13-1.997-.301-.897-.292-1.35-.682-2.415-2.08-.473-.62-.765-.963-1.056-1.24-.661-.628-1.31-.958-2.142-1.087Z",
        fill: "#fff",
      }),
      React.createElement("path", {
        d: "M17.138 5.2c.024-.416.08-.69.194-.941.044-.1.087-.18.093-.18a.624.624 0 0 1-.044.162c-.082.244-.096.576-.039.963.072.49.114.561.632 1.092.244.249.527.562.63.697l.186.245-.186-.175c-.228-.214-.753-.632-.87-.691-.077-.04-.089-.04-.137.008-.044.045-.053.11-.059.423-.01.486-.076.8-.237 1.112-.086.168-.1.133-.021-.058.058-.143.064-.205.064-.676 0-.948-.113-1.175-.773-1.565a7.245 7.245 0 0 0-.611-.317 2.328 2.328 0 0 1-.3-.146c.019-.018.662.17.92.27.386.147.45.166.497.148.03-.012.046-.103.061-.371ZM9.452 6.82c-.463-.638-.75-1.616-.688-2.347l.02-.227.105.02c.199.035.54.163.7.26.439.267.63.618.822 1.519.057.264.131.562.165.664.055.162.263.542.432.79.122.177.04.26-.228.237-.412-.038-.968-.422-1.328-.916Zm7.124 4.748c-2.165-.872-2.928-1.63-2.928-2.906 0-.188.007-.341.014-.341.008 0 .092.061.186.137.44.352.932.503 2.292.7.801.119 1.252.213 1.668.35 1.322.439 2.14 1.329 2.335 2.54a4.204 4.204 0 0 1-.069 1.36c-.072.275-.294.77-.352.79-.016.004-.032-.058-.037-.143-.022-.454-.252-.898-.638-1.23-.44-.377-1.029-.677-2.471-1.257Zm-1.52.361a3.856 3.856 0 0 0-.104-.457l-.056-.165.103.115c.141.16.254.363.349.635.072.207.08.27.08.606 0 .331-.01.4-.076.587-.094.275-.25.523-.457.726-.396.404-.904.626-1.638.719-.128.016-.5.043-.827.06-.824.043-1.365.131-1.853.302a.39.39 0 0 1-.139.034c-.02-.02.312-.218.586-.35.387-.186.77-.288 1.633-.43.425-.072.865-.158.976-.192 1.055-.323 1.596-1.157 1.423-2.19Z",
        fill: "#fff",
      }),
      React.createElement("path", {
        d: "M16.048 13.692c-.288-.618-.354-1.216-.196-1.773.016-.059.044-.107.06-.107.054.02.105.047.15.081.134.09.4.24 1.107.626.884.482 1.388.856 1.732 1.281.3.374.485.8.575 1.318.05.293.02 1-.055 1.296-.237.933-.79 1.665-1.577 2.093a2.015 2.015 0 0 1-.23.114c-.012 0 .03-.106.093-.237.264-.554.295-1.093.094-1.693-.122-.367-.372-.816-.877-1.573-.587-.88-.732-1.115-.876-1.426ZM7.914 17.03c.804-.678 1.803-1.16 2.715-1.308.392-.064 1.046-.038 1.41.054.582.15 1.103.484 1.374.881.264.39.379.728.496 1.482.048.297.099.596.114.664.088.39.261.703.476.86.34.249.926.264 1.502.04a.786.786 0 0 1 .19-.06c.02.021-.27.216-.474.318a1.61 1.61 0 0 1-.787.19c-.528 0-.966-.267-1.332-.815a6.576 6.576 0 0 1-.36-.718c-.386-.88-.576-1.149-1.024-1.442-.391-.256-.894-.302-1.273-.116-.497.244-.636.88-.28 1.282.142.16.406.299.622.325a.664.664 0 0 0 .751-.664c0-.266-.102-.416-.358-.532-.35-.158-.726.026-.724.355 0 .14.061.228.202.292.09.04.092.044.018.029-.32-.067-.396-.454-.137-.71.31-.31.95-.173 1.17.247.093.177.104.53.023.743-.18.476-.707.726-1.24.59-.364-.093-.511-.193-.95-.644-.76-.785-1.055-.936-2.153-1.108l-.21-.032.24-.203Z",
        fill: "#fff",
      }),
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.663 2.5C7.38 5.83 8.768 7.54 8.831 7.625c.16.222.1.421-.176.578a1.666 1.666 0 0 1-.624.175.803.803 0 0 1-.526-.224c-.103-.098-.52-.72-1.482-2.214-.451-.706-.908-1.408-1.37-2.106-.04-.037-.038-.036 1.294 2.348.837 1.498 1.12 2.027 1.12 2.098 0 .144-.04.22-.217.418-.296.33-.428.701-.524 1.47-.107.86-.408 1.469-1.243 2.51-.488.61-.568.721-.692.967-.156.309-.198.482-.216.873-.018.412.018.68.144 1.074.11.345.226.574.52 1.03.255.395.401.688.401.802 0 .091.018.091.412.002.943-.212 1.709-.588 2.14-1.047.267-.284.329-.44.331-.83.001-.255-.008-.308-.076-.455-.112-.238-.316-.436-.766-.744-.59-.403-.84-.728-.91-1.173-.058-.366.008-.624.335-1.307.337-.708.42-1.008.477-1.721.036-.461.087-.643.22-.788.137-.152.262-.204.604-.25.556-.077.91-.22 1.202-.489.253-.233.358-.458.374-.796l.013-.256-.141-.164c-.128-.15-1.657-1.837-4.586-5.061l-.205.155Zm.864 12.485a.453.453 0 0 0-.139-.597c-.182-.122-.466-.064-.466.094 0 .048.026.084.086.115.102.052.109.11.03.23-.081.122-.075.229.018.302.149.117.36.052.472-.144Zm4.42-5.74c-.261.08-.515.357-.594.648-.048.176-.02.488.051.584.116.155.229.196.533.193.595-.004 1.112-.259 1.173-.578.05-.262-.179-.624-.492-.784-.161-.082-.504-.114-.67-.063Zm.696.544c.092-.13.051-.272-.104-.367-.297-.181-.747-.032-.747.25 0 .14.235.292.449.292.144 0 .34-.086.402-.175Z",
        fill: "#fff",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 12,
          y1: 0,
          x2: 12,
          y2: 24,
          gradientUnits: "userSpaceOnUse",
        },
        React.createElement("stop", { stopColor: "#fff", stopOpacity: 0.5 }),
        React.createElement("stop", { offset: 1, stopOpacity: 0.5 }),
      ),
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenTel = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12S0 5.373 0 12c0 6.628 5.373 12 12 12Z",
        fill: "#00C9FF",
      }),
      React.createElement("path", {
        d: "m17.2 17.692-5.923 2.14c-.606.219-1.282.1-1.777-.312l-4.845-4.026a1.816 1.816 0 0 1-.628-1.71l1.076-6.141a1.817 1.817 0 0 1 1.172-1.395l5.924-2.14c.606-.219 1.282-.1 1.777.312l4.844 4.026c.5.416.74 1.068.628 1.71l-1.076 6.141a1.815 1.815 0 0 1-1.171 1.395Z",
        fill: "#FEFEFE",
      }),
      React.createElement("path", {
        d: "m12.678 8.325-.301 1.615h2.208s-.146 1.193-.19 1.193h-2.24l-.48 2.532s-.132.612.29.64h1.732l-.232 1.31H11.28s-1.44-.116-1.251-1.804l.45-2.634h-.9l.159-1.106s1.455-.393 2.212-1.747h.727v.001Z",
        fill: "#00C9FF",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenLink = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "#375BD2",
      }),
      React.createElement("path", {
        d: "m12.002 7.39 4.04 2.297v4.612l-4.029 2.311-4.04-2.293V9.705l4.029-2.315Zm0-3.39-1.483.851-4.036 2.315L5 8.017V16.016l1.483.844 4.04 2.296 1.482.844 1.483-.851 4.03-2.315L19 15.986V7.984l-1.483-.843-4.04-2.297L11.995 4h.007Z",
        fill: "#fff",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenEth = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "#627EEA",
      }),
      React.createElement("path", {
        d: "M12 4v5.915l4.999 2.233-5-8.148Z",
        fill: "#fff",
        fillOpacity: 0.602,
      }),
      React.createElement("path", {
        d: "m12 4-5 8.148 5-2.233V4Z",
        fill: "#fff",
      }),
      React.createElement("path", {
        d: "M12 15.981V20l5.002-6.92L12 15.98Z",
        fill: "#fff",
        fillOpacity: 0.602,
      }),
      React.createElement("path", {
        d: "M12 20v-4.02l-5-2.9L12 20Z",
        fill: "#fff",
      }),
      React.createElement("path", {
        d: "m12 15.051 4.999-2.902-5-2.233v5.135Z",
        fill: "#fff",
        fillOpacity: 0.2,
      }),
      React.createElement("path", {
        d: "m7 12.149 5 2.902V9.916l-5 2.232Z",
        fill: "#fff",
        fillOpacity: 0.602,
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenDai = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "#F9A606",
      }),
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.037 5H11.9c3.566 0 6.27 1.851 7.275 4.545H21v1.628h-1.442c.029.257.043.52.043.786v.04c0 .3-.018.594-.054.883H21v1.628h-1.86C18.106 17.166 15.424 19 11.9 19H6.036v-4.49H4v-1.628h2.037v-1.709H4V9.545h2.037V5Zm1.639 9.51v3.03h4.223c2.607 0 4.543-1.214 5.444-3.03H7.676Zm10.17-1.628H7.675v-1.709h10.172c.038.269.057.545.057.826v.04c0 .287-.02.569-.06.843Zm-5.947-6.424c2.619 0 4.56 1.245 5.457 3.087h-9.68V6.458h4.223Z",
        fill: "#fff",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenBusd = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "#F0B90B",
      }),
      React.createElement("path", {
        d: "m12 4 1.982 2.03-4.99 4.99L7.008 9.04 12 4ZM15.009 7.009l1.982 2.03-8 8-1.982-1.983 8-8.047ZM5.982 10.018l1.982 2.03-1.982 1.982L4 12.046l1.982-2.03ZM18.018 10.018 20 12.048l-8 8-1.982-1.983 8-8.047Z",
        fill: "#fff",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var SelectTokenAave = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "url(#b)",
      }),
      React.createElement("path", {
        d: "m17.571 16.565-4.058-9.81C13.285 6.247 12.944 6 12.496 6h-.359c-.448 0-.789.247-1.017.755l-1.766 4.274H8.018a.732.732 0 0 0-.727.727v.009a.734.734 0 0 0 .727.727h.717l-1.686 4.073a.851.851 0 0 0-.049.278.78.78 0 0 0 .198.548c.127.139.31.207.538.207a.72.72 0 0 0 .418-.14c.13-.089.22-.219.29-.367l1.856-4.602h1.287a.732.732 0 0 0 .726-.727v-.019a.734.734 0 0 0-.726-.726H10.9l1.416-3.53 3.86 9.6c.071.15.161.279.291.369.12.09.27.136.418.139.228 0 .408-.068.538-.207a.766.766 0 0 0 .198-.548.649.649 0 0 0-.05-.275Z",
        fill: "#fff",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 20.947,
          y1: 4.472,
          x2: 3.091,
          y2: 19.496,
          gradientUnits: "userSpaceOnUse",
        },
        React.createElement("stop", { stopColor: "#B6509E" }),
        React.createElement("stop", { offset: 1, stopColor: "#2EBAC6" }),
      ),
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var TokensUniswap = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z",
        fill: "#050222",
      }),
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.176 9.962a.911.911 0 0 1-.153.319c-.133.173-.31.309-.511.392-.181.079-.373.13-.57.15-.04.006-.082.009-.122.012h-.007a.58.58 0 0 0-.54.434c-.015.06-.026.12-.033.182-.011.093-.017.188-.024.29-.004.074-.009.151-.016.235-.042.34-.14.672-.29.98-.031.066-.062.129-.093.19-.165.331-.313.63-.27 1.03.033.31.19.516.4.73.099.101.23.188.367.279.382.253.804.532.665 1.236-.114.57-1.054 1.168-2.376 1.377.128-.02-.155-.504-.186-.558l-.002-.003c-.036-.057-.074-.114-.111-.17-.108-.163-.215-.325-.298-.505-.221-.47-.324-1.012-.233-1.526.082-.466.388-.837.683-1.195l.142-.175c.395-.492.808-1.136.9-1.775.008-.055.015-.116.022-.18.013-.114.027-.238.05-.361.032-.214.099-.42.196-.613.067-.126.155-.24.26-.336a.336.336 0 0 0 .065-.41L5.983 6.185 9.01 9.937a.377.377 0 0 0 .58.012.258.258 0 0 0 .008-.325c-.14-.18-.287-.364-.433-.546a135.82 135.82 0 0 1-.176-.22l-.762-.948-1.53-1.89L5 4l1.894 1.85 1.628 1.807.812.906.223.252c.195.219.39.437.585.669l.044.054.01.084a.997.997 0 0 1-.02.34Zm7.786 1.273.003.005c0-.404-.249-1.07-.753-1.711l-.011-.016a5.035 5.035 0 0 0-.614-.639 4.203 4.203 0 0 0-.759-.53l-.02-.01c-.852-.466-1.962-.706-3.33-.435a6.764 6.764 0 0 0-.593-.635 3.41 3.41 0 0 0-1.12-.714 2.843 2.843 0 0 0-1.29-.158c.421.038.831.155 1.208.346.365.196.693.454.97.761.281.314.546.643.792.985l.062.081c.241.315.486.636.792.922.168.16.356.296.559.408a2.526 2.526 0 0 0 .319.14c.104.04.212.073.32.104.43.124.872.168 1.303.192l.179.009c.154.008.307.015.457.026.206.012.41.045.61.097.3.078.564.258.748.508.063.084.12.172.168.264Zm-1.261-2.262-.066-.06-.042-.038.032.03.076.068Zm-.54 3.986c-1.385-.565-2.835-1.156-2.62-2.815.463.496 1.19.6 1.98.713.717.103 1.486.213 2.158.63 1.586.985 1.355 2.896.816 3.6.049-1.158-1.118-1.633-2.333-2.128Zm-5.584-.83c.366-.036 1.146-.227.797-.843a.776.776 0 0 0-.734-.374.72.72 0 0 0-.623.546c-.109.403.006.724.56.67Zm-.105-4.878c-.23-.267-.585-.406-.934-.457a2.425 2.425 0 0 0-.025.264c-.016.726.241 1.525.739 2.08.159.179.35.326.565.432.124.061.452.212.574.076a.089.089 0 0 0 .01-.087c-.02-.058-.059-.11-.098-.163-.027-.037-.054-.074-.075-.112a3.354 3.354 0 0 0-.064-.115c-.042-.07-.083-.141-.115-.218a3.393 3.393 0 0 1-.17-.63l-.026-.128c-.066-.33-.151-.676-.38-.942Zm4.904 5.798c-.356.998.218 1.841.79 2.68.638.937 1.272 1.868.595 3.003 1.316-.546 1.94-2.194 1.394-3.501-.344-.827-1.172-1.276-1.942-1.692-.298-.161-.588-.318-.837-.49Zm-3.848 2.383a2.984 2.984 0 0 0-.67.381 4.85 4.85 0 0 1 1.456-.288c.09-.006.18-.01.272-.014.158-.007.318-.015.482-.028.268-.019.533-.073.787-.163.266-.093.508-.245.71-.444.202-.205.344-.462.41-.744a1.663 1.663 0 0 0-.422-1.502c.091.231.147.474.166.722a1.68 1.68 0 0 1-.092.679 1.39 1.39 0 0 1-.357.541c-.166.151-.357.27-.566.352-.289.117-.616.165-.957.215-.155.023-.314.046-.473.076-.255.047-.505.12-.746.217Zm4.131 4.12-.023.019c-.06.048-.121.098-.187.142a2.016 2.016 0 0 1-.263.148c-.19.093-.4.14-.611.139-.574-.011-.979-.44-1.216-.924-.062-.127-.117-.258-.171-.389-.088-.21-.176-.419-.294-.613-.274-.45-.743-.811-1.293-.744-.224.028-.434.13-.559.325-.327.51.143 1.225.743 1.124a.538.538 0 0 0 .28-.122.601.601 0 0 0 .183-.265.623.623 0 0 0 .026-.337.463.463 0 0 0-.193-.289.493.493 0 0 1 .25.27.764.764 0 0 1-.136.75.749.749 0 0 1-.162.14.942.942 0 0 1-.612.134 1.118 1.118 0 0 1-.627-.31 2.033 2.033 0 0 1-.29-.308 3.017 3.017 0 0 0-.117-.125 2.33 2.33 0 0 0-.67-.49 2.488 2.488 0 0 0-.538-.169 3.542 3.542 0 0 0-.282-.045l-.055-.009c-.078-.014-.206-.036-.23-.015.292-.27.61-.509.95-.714a4.608 4.608 0 0 1 1.111-.478 3.161 3.161 0 0 1 1.244-.096c.215.026.425.08.625.162.21.084.404.205.572.355.168.158.303.348.398.557.086.197.15.402.192.612.022.114.039.238.056.367.079.587.17 1.265.842 1.383.043.008.086.014.13.018l.134.003c.092-.006.184-.02.274-.04.187-.043.37-.106.545-.186l-.026.02Zm-5.119-1.071Z",
        fill: "#fff",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var TokensSwapr = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      {
        style: {
          mixBlendMode: "multiply",
        },
        clipPath: "url(#a)",
      },
      React.createElement(
        "mask",
        {
          id: "b",
          style: {
            maskType: "luminance",
          },
          maskUnits: "userSpaceOnUse",
          x: 0,
          y: -1,
          width: 24,
          height: 25,
        },
        React.createElement("path", {
          d: "M24-.182H0v24h24v-24Z",
          fill: "#fff",
        }),
      ),
      React.createElement(
        "g",
        { mask: "url(#b)" },
        React.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M0 15.99v-4.172c0-6.627 5.373-12 12-12 3.269 0 6.233 1.307 8.397 3.427L17.846 4.84a9.103 9.103 0 0 0-14.95 6.979h2.897L0 15.991Zm6.11 2.77a9.103 9.103 0 0 0 14.993-6.941h-2.896L24 7.576v4.241c0 6.627-5.372 12-12 12-3.29 0-6.27-1.323-8.437-3.467L6.11 18.76Zm10.493-2.96h-3.31L12 14.055l-1.293 1.747h-3.31l2.999-3.914-3-4.052H10.5L12 9.793l1.5-1.958h3.104l-3 4.052 3 3.914Z",
          fill: "#5568F6",
        }),
      ),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var TokensQuickswap = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M11.309.02a11.997 11.997 0 0 1 12.466 14.29 12.025 12.025 0 0 1-7.16 8.77 12.04 12.04 0 0 1-8.025.428 12.036 12.036 0 0 1-7.814-7.253 12.053 12.053 0 0 1-.211-7.902A11.997 11.997 0 0 1 11.309.02Z",
        fill: "#fff",
      }),
      React.createElement("path", {
        d: "M4.616 11.13c.048.219.076.44.123.663.031.133.072.102.14.044.134-.11.26-.229.407-.317.041.006.065.04.085.071.39.51.906.82 1.517.988.28.078.57.13.861.16a1.348 1.348 0 0 1-.225-.341.49.49 0 0 1 .102-.588c.202-.212.465-.3.735-.37.563-.146 1.137-.16 1.715-.119.464.031.922.11 1.373.236.376.106.741.229 1.073.44.048.038.078.09.123.127.427.458.676.998.693 1.623.01.43-.11.844-.324 1.223-.39.683-.96 1.182-1.64 1.561a5.816 5.816 0 0 1-2.241.707c-1.408.154-2.716-.153-3.915-.901-.998-.622-1.767-1.473-2.392-2.457-.29-.468-.546-.956-.768-1.462-.028-.061-.035-.13-.062-.181.017.061.051.126-.014.191-.02-.256.004-.509.017-.762.035-.7.144-1.393.325-2.066a10.014 10.014 0 0 1 5.962-6.69 9.795 9.795 0 0 1 2.75-.656c1.49-.136 2.93.058 4.338.557-.215.407-1.434 1.493-2.384 2.125a3.257 3.257 0 0 0-.185-.803c-.003-.068.058-.088.096-.123.198-.17.396-.338.594-.505.02-.017.041-.034.059-.051.023-.024.061-.045.05-.082-.006-.038-.05-.038-.085-.045a1.53 1.53 0 0 0-.28-.034c-.13-.014-.26-.044-.39-.048-.102-.007-.2-.03-.3-.024-.051 0-.102-.003-.154-.01-.085-.027-.174-.014-.26-.014-.05 0-.102-.003-.156 0-.15.007-.298-.017-.448.01a.591.591 0 0 1-.11.01c-.044 0-.085.004-.13 0a.4.4 0 0 0-.167.018 5.295 5.295 0 0 0-.468.055c-.187.04-.379.047-.563.095-.171.045-.345.069-.513.127-.222.061-.444.13-.662.205-.318.126-.643.242-.947.406a8.643 8.643 0 0 0-1.903 1.26 9.155 9.155 0 0 0-1.424 1.552 8.382 8.382 0 0 0-.564.895c-.11.201-.212.406-.307.615-.069.16-.15.318-.205.485a6.478 6.478 0 0 0-.178.512c-.065.175-.103.356-.15.53-.02.068-.035.14-.052.212-.02.085-.034.17-.05.256a8.98 8.98 0 0 0-.073.437c-.027.15-.044.3-.054.455-.024.099-.007.205-.024.307-.028.127-.01.256-.017.383-.004.088-.007.177-.004.266 0 .038-.017.089.02.106.045.02.076-.027.11-.051.11-.089.215-.181.321-.274.359-.307.721-.611 1.08-.919.03-.02.065-.088.12-.02Z",
        fill: "#4189C9",
      }),
      React.createElement("path", {
        d: "M12.518 12.025c-.423-.253-.885-.396-1.36-.509a6.73 6.73 0 0 0-1.902-.174c-.451.024-.899.085-1.316.283a.972.972 0 0 0-.143.082c-.338.226-.39.526-.143.851.05.068.105.13.174.212-.219 0-.414-.041-.605-.079-.516-.102-1-.28-1.418-.615a2.085 2.085 0 0 1-.516-.563c.055-.09.147-.13.233-.181.164-.069.314-.168.478-.243a7.103 7.103 0 0 1 2.303-.615c.317-.03.635-.061.956-.048.943.038 1.88.202 2.778.485.232.072.46.154.703.233 0-.069-.037-.11-.065-.154a3.407 3.407 0 0 0-.33-.468c-.045-.055-.11-.1-.107-.181.127.03.257.058.383.089.034.007.075.027.095 0 .031-.038-.013-.069-.034-.096-.188-.28-.42-.52-.673-.741.134-.079.27-.014.4.003 1.329.17 2.538.642 3.594 1.47 1.397 1.096 2.3 2.51 2.682 4.252.123.581.16 1.18.116 1.77a5.413 5.413 0 0 1-1.008 2.822c-.04.055-.095.1-.123.164-.137.205-.341.345-.526.495-1.008.82-2.186 1.247-3.454 1.446a10.64 10.64 0 0 1-2.982.05 9.824 9.824 0 0 1-4.353-1.643 6.687 6.687 0 0 1-.905-.703c-.01-.007-.01-.02-.003-.031l.003-.003c.058-.024.096.02.137.047a6.484 6.484 0 0 0 3.037 1.244c.061.024.13.01.191.024.014 0 .027.003.038.007.621.075 1.243.03 1.858-.079 1.35-.24 2.552-.803 3.577-1.715.7-.618 1.254-1.35 1.548-2.251.293-.902.252-1.78-.16-2.648-.086.39-.288.71-.544 1.005a3.58 3.58 0 0 1-.892.724c-.037.024-.082.065-.126.03-.038-.03-.017-.082-.004-.12.082-.269.137-.546.168-.826.12-1.179-.335-2.098-1.274-2.791a4.323 4.323 0 0 0-.486-.31Z",
        fill: "#262F71",
      }),
      React.createElement("path", {
        d: "M8.624 21a5.258 5.258 0 0 1-1.022-.209 6.83 6.83 0 0 1-1.773-.83c-.13-.085-.242-.201-.382-.27-.082-.01-.117-.092-.181-.126-1.38-1.227-2.324-2.733-2.863-4.493a9.454 9.454 0 0 1-.42-2.637c.003-.068.006-.133.013-.239l.174.386c.496 1.09 1.131 2.08 2.006 2.907.929.878 2.012 1.466 3.286 1.67 1.493.243 2.89-.016 4.175-.822.642-.404 1.165-.92 1.469-1.627.366-.857.229-1.653-.331-2.388-.048-.064-.103-.126-.15-.188.064-.058.102.01.14.041.33.277.594.626.771 1.022.171.38.264.786.267 1.203.007.423-.089.843-.273 1.226a.161.161 0 0 0 .109-.041 3.42 3.42 0 0 0 .502-.355c.048-.041.092-.106.17-.096a5.674 5.674 0 0 1-.207.95c.205-.116.403-.246.59-.393.147-.116.267-.26.414-.38.061.028.061.09.075.14.236.855.065 1.65-.355 2.402-.513.913-1.264 1.592-2.139 2.142a7.19 7.19 0 0 1-2.299.94 4.797 4.797 0 0 1-1.561.092c-.069-.037-.14.004-.205-.027Z",
        fill: "#161F42",
      }),
      React.createElement("path", {
        d: "M21.538 14.666a7.26 7.26 0 0 0-.711-2.815 7.443 7.443 0 0 0-1.039-1.596c-.372-.44-.8-.816-1.25-1.175.04-.04.096-.034.143-.027a7.918 7.918 0 0 1 1.838.437c.147.055.29.12.427.198.048.024.096.052.144.082.01.007.017.024.034.02a.048.048 0 0 1-.007-.047c-.403-.526-.895-.967-1.407-1.384A10.135 10.135 0 0 0 17.72 7.1a9.747 9.747 0 0 0-3.129-.936c-.096-.014-.198 0-.29-.034-.007-.065.048-.086.085-.117a5.712 5.712 0 0 0 1.513-1.91c.11-.225.202-.46.277-.7.02-.068.034-.143.103-.184a9.852 9.852 0 0 1 3.023 2.255 9.977 9.977 0 0 1 2.275 9.224c-.023.01-.027-.014-.04-.031Z",
        fill: "#4189C9",
      }),
      React.createElement("path", {
        d: "M17.667 20.074c0-.099.078-.157.13-.229.468-.666.751-1.404.898-2.203.092-.496.1-.994.068-1.49a6.582 6.582 0 0 0-.553-2.2 7.446 7.446 0 0 0-.844-1.455 7.464 7.464 0 0 0-1.237-1.285 7.067 7.067 0 0 0-2.412-1.302 6.931 6.931 0 0 0-1.441-.297c-.09-.007-.175-.03-.267-.024-.31-.229-.628-.45-.984-.611l.004-.034c.126 0 .256.003.382 0 1.79-.031 3.444.406 4.886 1.496 1.493 1.13 2.429 2.624 2.777 4.469.297 1.571.069 3.057-.806 4.42-.17.277-.359.533-.601.745ZM16.287 3.218c-.178.55-.404 1.076-.728 1.558-.325.485-.721.919-1.175 1.288-.028.02-.052.044-.075.068-.158.079-.287.202-.431.297a8.967 8.967 0 0 1-1.688.871c-.013.004-.03.007-.044.01-.027-.037.003-.05.02-.068.335-.32.544-.714.684-1.151a.167.167 0 0 1 .109-.123c1.042-.413 1.876-1.097 2.555-1.978.062-.079.123-.16.199-.263-.212-.004-.373.102-.55.13-.035.003-.079.03-.086-.034a7.325 7.325 0 0 0 1.428-2.583c.017-.062 0-.144.086-.174.006.003.01.01.006.017 0 .006-.003.01-.003.01a8.086 8.086 0 0 1-.284 2.002 1.15 1.15 0 0 0-.023.123Z",
        fill: "#161F42",
      }),
      React.createElement("path", {
        d: "M12.235 10.344c.212.233.396.492.55.77.014.026.051.057.017.088-.027.024-.055-.007-.082-.017a11.854 11.854 0 0 0-2.139-.581 11.087 11.087 0 0 0-1.113-.12 6.624 6.624 0 0 0-1.008.014 6.947 6.947 0 0 0-2.22.533c-.22.096-.442.181-.647.307-.023.014-.05.038-.078.004a6.74 6.74 0 0 1 2.022-.97c.998-.297 2.013-.37 3.048-.29a10.9 10.9 0 0 1 1.561.238.335.335 0 0 1 .089.024Z",
        fill: "#161F42",
      }),
      React.createElement("path", {
        d: "M11.979 3.163h.153c.082.034.175-.01.257.024h.153c.014.075-.048.106-.089.14-.71.601-1.414 1.206-2.124 1.804-.236.198-.469.396-.7.594a.221.221 0 0 0-.083.096c-.307.116-.594.26-.82.51-.106.119-.177.255-.253.392-.211.137-.389.318-.58.478-.506.424-1.005.858-1.51 1.278-.041.034-.072.085-.12.113-.085-.13-.068-.274-.048-.414.065-.106.164-.17.253-.249.492-.417.98-.834 1.47-1.25.477-.407.952-.813 1.43-1.217.55-.464 1.097-.932 1.647-1.4.304-.26.608-.523.92-.776.047-.03.078-.061.044-.123Z",
        fill: "#5C94CE",
      }),
      React.createElement("path", {
        d: "M20.97 9.726a6.842 6.842 0 0 0-1.896-.577c-.177-.028-.352-.065-.53-.065-.228-.144-.454-.298-.69-.434a7.209 7.209 0 0 0-2.466-.882c-.02-.006-.037-.013-.055-.02.26-.048 1.152.085 1.767.256a8.299 8.299 0 0 1 1.656.65c-.054-.168-.157-.278-.218-.41-.007-.035-.055-.066-.024-.103.03-.038.072.003.102.017.09.04.175.089.264.13.744.386 1.448.85 2.097 1.383.034.045.034.045-.007.055Z",
        fill: "#161F42",
      }),
      React.createElement("path", {
        d: "M11.979 3.163c.017.038.065.01.088.051l-.43.373-.79.666c-.372.314-.744.632-1.12.946-.26.219-.512.444-.772.667-.314.266-.632.53-.943.796-.25.211-.495.427-.745.638l-.789.667-.263.222.075-.335c-.04-.11.048-.157.106-.209.24-.198.475-.403.71-.604.554-.468 1.104-.94 1.658-1.408l1.424-1.21c.441-.375.885-.747 1.322-1.13.035-.03.1-.065.004-.102.154-.055.31-.014.465-.028Z",
        fill: "#6497D0",
      }),
      React.createElement("path", {
        d: "M11.517 3.19c.035.007.075-.013.113.018-.089.133-.222.218-.341.32-.335.295-.677.582-1.015.868-.311.264-.625.523-.936.786-.311.263-.622.537-.936.803-.315.267-.625.523-.936.786-.311.263-.622.533-.936.803-.093.082-.22.136-.243.276-.164.02-.253.158-.372.246-.192.137-.339.325-.513.479-.177.126-.335.276-.499.416-.492.417-.98.837-1.472 1.25-.068.059-.13.127-.205.175-.034.02-.065.062-.113.027a.547.547 0 0 1 .051-.256c.246-.157.451-.365.673-.55.612-.512 1.217-1.032 1.825-1.547.608-.516 1.206-1.029 1.81-1.541l1.774-1.507c.604-.512 1.209-1.025 1.81-1.54.12-.103.246-.199.359-.308l.102-.003Z",
        fill: "#689AD1",
      }),
      React.createElement("path", {
        d: "M12.85 3.214c.14-.003.273.035.41.052.037.082-.034.112-.075.15-.171.15-.349.29-.516.444-.017-.024-.038-.048-.055-.072-.038-.054-.065-.04-.089.01-.201.435-.546.735-.926 1.002a7.027 7.027 0 0 1-1.363.744c-.027-.047-.027-.05.017-.095.092-.096.198-.175.297-.26.728-.618 1.456-1.233 2.18-1.858.041-.035.079-.076.12-.117Z",
        fill: "#4E8FCC",
      }),
      React.createElement("path", {
        d: "M12.85 3.215a.149.149 0 0 1-.062.105l-1.404 1.193c-.359.304-.714.611-1.073.919-.03.027-.092.048-.075.112a6.397 6.397 0 0 1-.693.28c-.079-.02-.014-.05 0-.064.14-.123.28-.246.423-.366.26-.222.523-.444.786-.666A152.142 152.142 0 0 0 12.3 3.409c.082-.071.184-.126.239-.225.106-.007.208.027.31.03Z",
        fill: "#5591CD",
      }),
      React.createElement("path", {
        d: "M11.032 6.296c.27-.133.554-.246.79-.44.047-.004.044.027.03.057-.219.902-.902 1.497-1.828 1.582-.177.017-.355.038-.536.02.024-.064.085-.06.137-.075.201-.054.4-.112.587-.208.349-.181.605-.448.752-.813a.231.231 0 0 1 .068-.123Z",
        fill: "#161F42",
      }),
      React.createElement("path", {
        d: "M11.032 6.296c-.113.43-.386.728-.765.943-.243.137-.512.201-.779.277-.065-.192.007-.352.12-.5.133-.17.317-.276.512-.365.297-.136.601-.252.912-.355Z",
        fill: "#418AC9",
      }),
      React.createElement("path", {
        d: "M3.113 10.44c.15-.055.25-.184.37-.284.385-.317.764-.642 1.144-.963.201-.17.396-.342.594-.516.055-.048.103-.099.181-.106-.205.257-.4.52-.546.817-.393.331-.786.666-1.176 1-.18.155-.365.305-.543.465-.027.024-.058.055-.099.02.007-.143.03-.29.075-.433Z",
        fill: "#6497D0",
      }),
      React.createElement("path", {
        d: "M4.616 11.13c-.12.01-.174.116-.256.181-.338.273-.663.554-.99.837-.11.096-.216.191-.332.28-.075.058-.106.034-.102-.054v-.322c.12-.13.26-.228.392-.341.383-.325.759-.653 1.148-.97.034-.028.062-.079.12-.045l.02.434Z",
        fill: "#468CCA",
      }),
      React.createElement("path", {
        d: "M6.263 8.599a.137.137 0 0 1 .065-.106l.922-.78c.253-.211.503-.43.755-.645.134-.113.263-.229.393-.342.024-.02.048-.037.072 0-.027.117-.061.233-.058.356-.137.15-.304.27-.458.403-.478.41-.956.816-1.435 1.223-.02.017-.034.037-.051.058a.27.27 0 0 1-.205-.167Z",
        fill: "#5591CD",
      }),
      React.createElement("path", {
        d: "M3.035 10.877c.109-.034.174-.13.26-.198.45-.372.891-.751 1.338-1.13.072-.059.12-.148.226-.158a4.99 4.99 0 0 0-.205.615c-.079-.007-.12.055-.17.1-.465.399-.933.792-1.398 1.188-.027.024-.055.058-.1.044-.006-.157.011-.31.049-.46Z",
        fill: "#5C94CE",
      }),
      React.createElement("path", {
        d: "M6.468 8.766c-.03-.058.02-.075.051-.099.393-.335.786-.67 1.179-1.001.222-.188.444-.376.67-.564a.197.197 0 0 1 .047-.017c0 .106.017.209.048.308-.133.157-.304.273-.458.406-.345.297-.69.591-1.042.885a.126.126 0 0 0-.05.068c-.148.055-.295.076-.445.014ZM4.589 10.7c-.143.082-.26.201-.386.307-.335.273-.663.553-.987.837-.09.079-.171.164-.284.215.014-.136-.027-.276.024-.41.506-.43 1.011-.86 1.52-1.291.034-.03.072-.065.123-.041l-.01.383Z",
        fill: "#4E8FCC",
      }),
      React.createElement("path", {
        d: "M4.603 10.314c-.164.085-.287.222-.427.338-.332.273-.653.553-.98.827-.073.061-.124.157-.233.167.014-.103-.027-.209.027-.308.318-.273.64-.546.96-.816.215-.184.434-.366.653-.55.068-.058.051.007.054.037-.024.1-.037.202-.054.305Z",
        fill: "#5591CD",
      }),
      React.createElement("path", {
        d: "M6.912 8.756c-.048-.034-.014-.058.01-.082l.906-.759c.188-.157.372-.317.56-.478a.131.131 0 0 1 .075-.044l.075.153c-.058.093-.153.147-.222.233-.369.41-.785.755-1.308.953a.782.782 0 0 1-.096.024Z",
        fill: "#488DCA",
      }),
      React.createElement("path", {
        d: "M12.669 3.864c.047-.144.198-.188.287-.29.095-.11.249-.158.307-.308.113 0 .219.03.325.048.092.017.099.058.034.116-.14.123-.28.25-.42.369l-.4.338a6.548 6.548 0 0 1-.133-.273Z",
        fill: "#468CCA",
      }),
      React.createElement("path", {
        d: "M6.342 9.706c.024.058-.045.085-.038.136-.034-.157-.12-.215-.277-.184a.795.795 0 0 0-.43.253c-.03.034-.068.064-.103.095-.027-.034 0-.065.01-.095.069-.223.22-.38.407-.506a.404.404 0 0 1 .14-.065c.219-.051.338.055.308.277a.16.16 0 0 1-.017.089Z",
        fill: "#428AC9",
      }),
      React.createElement("path", {
        d: "M6.342 9.706c0-.035.003-.069.003-.103.003-.222-.123-.307-.331-.212-.24.11-.39.304-.496.54-.024.003-.037-.003-.03-.03.075-.28.222-.51.464-.674a.548.548 0 0 1 .198-.078.214.214 0 0 1 .253.157.488.488 0 0 1-.061.4Z",
        fill: "#182144",
      }),
      React.createElement("path", {
        d: "M8.316 7.779c-.044-.034-.003-.048.017-.065.072-.051.113-.14.202-.168.116.185.3.267.495.335.038.014.079.024.144.041-.297.079-.554.048-.79-.113a.086.086 0 0 0-.068-.03Z",
        fill: "#458CCA",
      }),
      React.createElement("path", {
        d: "M18.876 8.284c-.096-.01-.164-.075-.25-.106-.033-.013-.064-.054-.098-.027-.028.024.017.058.007.092-.052-.044-.072-.112-.1-.177.154.061.305.123.441.218Z",
        fill: "#63657D",
      }),
      React.createElement("path", {
        d: "M20.97 9.726c.028-.017 0-.038.004-.058l.147.082.078.102c-.095-.027-.16-.082-.229-.126Z",
        fill: "#263154",
      }),
      React.createElement("path", {
        d: "M15.084 7.704a.517.517 0 0 1 .205.013c-.082.048-.137.041-.205-.013Z",
        fill: "#A09AA9",
      }),
      React.createElement("path", {
        d: "M5.266 19.561c.078.014.116.093.18.127l-.003.03a.438.438 0 0 1-.177-.157Z",
        fill: "#424A7F",
      }),
      React.createElement("path", {
        d: "m21.538 14.666.044.027c.007.052-.017.096-.044.158v-.185Z",
        fill: "#8CB7DE",
      }),
      React.createElement("path", {
        d: "M15.077 3.83c.017.037.058.023.086.034l-.137.054c-.01-.058.024-.072.051-.089Z",
        fill: "#5A5D76",
      }),
      React.createElement("path", {
        d: "m5.49 9.9.032.03-.024.076-.055.072c.014-.086.017-.137.048-.178Z",
        fill: "#4F668A",
      }),
      React.createElement("path", {
        d: "M11.852 5.91c-.007-.02-.003-.048-.03-.058.006-.02.03-.048.04-.038.031.031.018.065-.01.096Z",
        fill: "#555A73",
      }),
      React.createElement("path", {
        d: "M3.216 9.979a2.12 2.12 0 0 1 .153-.54c.301-.212.568-.465.848-.7.485-.41.97-.82 1.452-1.234.44-.375.881-.751 1.325-1.127l1.435-1.22c.434-.369.871-.738 1.305-1.11.304-.26.615-.516.912-.782a1.79 1.79 0 0 1 .485-.052c.014-.013.034-.013.052-.006.037.061-.01.095-.048.13-.414.348-.824.7-1.237 1.052-.44.372-.878.744-1.319 1.12L7.363 6.545c-.492.42-.987.837-1.483 1.258-.615.519-1.226 1.045-1.841 1.564-.24.202-.471.407-.714.602-.02.023-.061.102-.11.01Z",
        fill: "#6D9CD2",
      }),
      React.createElement("path", {
        d: "M10.646 3.266c-.044.143-.18.198-.28.287-.325.287-.66.563-.987.844-.37.31-.742.621-1.11.936-.322.273-.636.55-.957.823-.311.263-.625.523-.936.79-.311.266-.619.532-.93.795l-.935.79c-.257.218-.51.437-.766.655-.102.09-.208.174-.314.26-.024.017-.044.027-.065 0a2.07 2.07 0 0 1 .178-.513c.235-.15.434-.345.645-.522.485-.41.97-.82 1.452-1.234a497.25 497.25 0 0 1 1.5-1.277c.413-.352.827-.7 1.237-1.052.536-.455 1.07-.916 1.609-1.367a.24.24 0 0 0 .089-.106c.188-.075.382-.072.57-.11Z",
        fill: "#729FD4",
      }),
      React.createElement("path", {
        d: "M10.082 3.368c.08.02.014.051 0 .065-.143.13-.29.26-.44.386l-.78.656-1.137.96c-.31.263-.618.533-.929.796-.321.273-.642.543-.963.813-.311.263-.619.53-.93.796l-.932.79-.342.286c-.024.017-.048.062-.082.014.034-.174.126-.328.205-.485.42-.359.844-.718 1.267-1.08.434-.372.872-.741 1.306-1.11l1.246-1.06c.438-.371.878-.747 1.316-1.12.225-.191.447-.393.683-.58.16-.076.338-.096.512-.127Z",
        fill: "#78A2D5",
      }),
      React.createElement("path", {
        d: "M9.57 3.495c-.164.211-.383.358-.58.533-.26.225-.523.447-.786.67-.257.214-.513.43-.77.648-.255.219-.508.438-.764.653-.257.218-.52.437-.78.656l-.754.645c-.321.274-.643.544-.964.814-.112.095-.229.19-.341.286a.131.131 0 0 1-.079.038c.082-.215.185-.42.308-.615.584-.475 1.154-.97 1.728-1.459.666-.567 1.333-1.127 1.995-1.698.373-.32.762-.628 1.124-.966.212-.086.434-.154.663-.205Z",
        fill: "#7DA5D6",
      }),
      React.createElement("path", {
        d: "M8.904 3.703c.027.044-.02.058-.041.079-.284.249-.57.495-.858.74-.252.216-.505.428-.758.643-.314.267-.629.533-.943.796-.256.219-.509.437-.765.653l-.96.813c-.133.113-.267.229-.396.341a.223.223 0 0 1-.123.062c.157-.318.348-.618.563-.895.198-.147.38-.314.567-.472.489-.413.974-.826 1.46-1.24.375-.32.75-.642 1.126-.96.059-.048.13-.082.175-.147.3-.188.628-.297.953-.413Z",
        fill: "#81A7D8",
      }),
      React.createElement("path", {
        d: "M14.309 15.13c-.257.212-.513.428-.855.575.1-.199.175-.407.226-.622.202-.889.014-1.698-.51-2.433-.129-.18-.303-.32-.457-.481-.024-.028-.051-.058-.096-.038-.047-.024-.068-.068-.102-.102.02-.028.044-.014.068 0 .619.351 1.134.806 1.452 1.458.154.322.25.67.28 1.025.02.205.017.414-.006.619Z",
        fill: "#0E1F66",
      }),
      React.createElement("path", {
        d: "M3.216 9.979c.102.037.136-.065.188-.106.519-.43 1.031-.868 1.544-1.309.485-.413.963-.83 1.448-1.243.54-.458 1.083-.912 1.626-1.37.486-.413.967-.83 1.452-1.244.523-.444 1.046-.891 1.572-1.339.055-.044.13-.068.14-.154.03-.027.072.004.103-.023h.13c-.038.136-.171.184-.264.266-.266.24-.543.465-.813.694-.31.263-.625.526-.936.789l-.755.645c-.372.315-.748.629-1.117.947l-.755.645c-.321.274-.642.544-.963.813l-.756.646-.778.656c-.26.219-.516.444-.776.663-.089.075-.184.15-.277.225-.02.017-.04.031-.065 0 0-.065.018-.136.052-.201Z",
        fill: "#699AD1",
      }),
      React.createElement("path", {
        d: "M7.954 4.11c-.02.122-.14.153-.215.222-.263.235-.533.457-.803.686-.314.267-.629.53-.943.796-.253.215-.502.43-.755.646-.184.157-.365.314-.55.471-.02.017-.04.031-.065 0 .133-.205.284-.4.448-.584A8.988 8.988 0 0 1 7.144 4.55c.264-.16.523-.328.81-.44Z",
        fill: "#88ABD9",
      }),
      React.createElement("path", {
        d: "M12.389 3.19c-.086-.01-.175.028-.257-.023.086.01.175-.028.257.024Z",
        fill: "#5591CD",
      }),
      React.createElement("path", {
        d: "M11.285 3.19c-.027.038-.068.021-.102.024h-.052c.048-.044.103-.017.154-.023Z",
        fill: "#689AD1",
      }),
      React.createElement("path", {
        d: "M8.825 21.024a6.243 6.243 0 0 0 2.453-.386 7.357 7.357 0 0 0 2.105-1.186c.618-.502 1.151-1.076 1.506-1.797.192-.386.311-.803.349-1.23.034-.386-.031-.751-.137-1.113.01-.09.092-.13.14-.192a1.91 1.91 0 0 0 .376-.802.664.664 0 0 1 .041-.117c.116.233.208.475.273.725.09.352.14.71.113 1.072a4.23 4.23 0 0 1-.55 1.787 5.905 5.905 0 0 1-1.182 1.449c-.41.365-.861.683-1.346.94a7.483 7.483 0 0 1-1.855.706 7.11 7.11 0 0 1-1.23.178c-.202.01-.4.027-.598.017-.147-.014-.304-.003-.458-.051Z",
        fill: "#0E1F66",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
      ),
    ),
  );
};

var IconSuccess = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 48,
        height: 48,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("circle", {
        cx: 24,
        cy: 24,
        r: 24,
        fill: "currentColor",
      }),
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m16 24.718 1.768-1.768 4.066 4.066L30.849 18l1.768 1.768L21.834 30.55 16 24.718Z",
        fill: "currentColor",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", {
          fill: "currentColor",
          d: "M0 0h48v48H0z",
        }),
      ),
    ),
  );
};

var IconFail = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 48,
        height: 48,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("circle", {
        cx: 24,
        cy: 24,
        r: 24,
        fill: "currentColor",
      }),
      React.createElement("path", {
        d: "m25.308 23.54 4.773 4.774-1.767 1.767-4.773-4.773-4.773 4.773L17 28.314l4.773-4.773L17 18.768 18.768 17l4.773 4.773L28.314 17l1.767 1.768-4.773 4.773Z",
        fill: "currentColor",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", {
          fill: "currentColor",
          d: "M0 0h48v48H0z",
        }),
      ),
    ),
  );
};

var SizeMd = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 40,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z",
        fill: "currentColor",
      }),
      React.createElement("path", {
        d: "M15.972 9.432a1.016 1.016 0 0 0-.979 0l-2.245 1.284-1.525.837-2.245 1.284a1.015 1.015 0 0 1-.979 0l-1.784-1.005c-.288-.167-.49-.474-.49-.809V9.042a.9.9 0 0 1 .49-.81l1.755-.976c.288-.168.662-.168.979 0l1.756.976c.288.168.49.475.49.81v1.284l1.524-.866V8.177a.9.9 0 0 0-.489-.81L8.978 5.525a1.016 1.016 0 0 0-.979 0L4.69 7.367a.9.9 0 0 0-.489.81v3.711a.9.9 0 0 0 .49.81L8 14.539c.287.168.661.168.978 0l2.245-1.255 1.525-.866 2.245-1.255c.288-.168.662-.168.979 0l1.756.976c.287.168.489.475.489.81v1.981a.9.9 0 0 1-.49.81l-1.755 1.004a1.016 1.016 0 0 1-.979 0l-1.755-.977c-.288-.167-.49-.474-.49-.809v-1.284l-1.525.865v1.284a.9.9 0 0 0 .49.81l3.31 1.841c.287.168.661.168.978 0l3.31-1.841c.288-.168.489-.475.489-.81v-3.712a.9.9 0 0 0-.49-.809l-3.338-1.87Z",
        fill: "currentColor",
      }),
    ),
    React.createElement(
      "g",
      { clipPath: "url(#b)", fillRule: "evenodd", clipRule: "evenodd" },
      React.createElement("path", {
        d: "M16 12c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12Z",
        fill: "currentColor",
      }),
      React.createElement("path", {
        d: "M29.424 12.947c-.08.006-.49.03-1.407.03-.73 0-1.247-.021-1.429-.03-2.818-.124-4.921-.616-4.921-1.205 0-.588 2.103-1.08 4.921-1.205v1.92c.185.013.712.045 1.441.045.875 0 1.314-.037 1.393-.044v-1.92c2.812.126 4.91.617 4.91 1.204 0 .588-2.098 1.08-4.91 1.204h.002Zm0-2.608V8.621h3.925V6H22.664v2.62h3.924v1.719c-3.19.146-5.588.78-5.588 1.538 0 .759 2.398 1.391 5.588 1.539v5.507h2.836v-5.51c3.182-.146 5.576-.778 5.576-1.536s-2.392-1.39-5.576-1.538Z",
        fill: "currentColor",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", {
          fill: "currentColor",
          d: "M0 0h24v24H0z",
        }),
      ),
      React.createElement(
        "clipPath",
        { id: "b" },
        React.createElement("path", {
          fill: "currentColor",
          transform: "translate(16)",
          d: "M0 0h24v24H0z",
        }),
      ),
    ),
  );
};

var SizeSm = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 32,
        height: 20,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z",
        fill: "currentColor",
      }),
      React.createElement("path", {
        d: "M13.31 7.86a.846.846 0 0 0-.816 0l-1.87 1.07-1.272.698-1.87 1.07a.847.847 0 0 1-.816 0L5.18 9.86a.798.798 0 0 1-.408-.674V7.535a.75.75 0 0 1 .408-.675l1.463-.814c.24-.14.552-.14.816 0l1.463.814c.24.14.407.396.407.675v1.07l1.272-.721v-1.07a.75.75 0 0 0-.408-.675l-2.71-1.534a.846.846 0 0 0-.816 0L3.908 6.139a.75.75 0 0 0-.408.675v3.093c0 .279.144.535.408.674l2.758 1.535c.24.14.552.14.816 0l1.87-1.046 1.272-.721 1.87-1.047c.24-.14.552-.14.816 0l1.463.814c.24.14.408.396.408.675v1.65a.75.75 0 0 1-.408.675l-1.463.837a.846.846 0 0 1-.816 0l-1.463-.813a.798.798 0 0 1-.407-.675v-1.07l-1.272.721v1.07c0 .28.144.535.408.674l2.758 1.535c.24.14.552.14.816 0l2.758-1.535a.798.798 0 0 0 .408-.674v-3.093a.75.75 0 0 0-.408-.674L13.31 7.86Z",
        fill: "currentColor",
      }),
    ),
    React.createElement(
      "g",
      { clipPath: "url(#b)", fillRule: "evenodd", clipRule: "evenodd" },
      React.createElement("path", {
        d: "M12 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10Z",
        fill: "currentColor",
      }),
      React.createElement("path", {
        d: "M23.187 10.789a18.23 18.23 0 0 1-1.173.026c-.608 0-1.039-.019-1.19-.026-2.349-.104-4.102-.513-4.102-1.004 0-.49 1.753-.9 4.102-1.004v1.6c.153.011.593.037 1.2.037.73 0 1.095-.03 1.16-.036v-1.6c2.344.104 4.093.514 4.093 1.003 0 .49-1.748.9-4.092 1.004h.002Zm0-2.173V7.184h3.27V5h-8.904v2.184h3.27v1.432c-2.658.122-4.656.65-4.656 1.282s1.998 1.159 4.656 1.282v4.59h2.363v-4.592c2.652-.122 4.647-.65 4.647-1.28 0-.633-1.993-1.16-4.647-1.282Z",
        fill: "currentColor",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", {
          fill: "currentColor",
          d: "M0 0h20v20H0z",
        }),
      ),
      React.createElement(
        "clipPath",
        { id: "b" },
        React.createElement("path", {
          fill: "currentColor",
          transform: "translate(12)",
          d: "M0 0h20v20H0z",
        }),
      ),
    ),
  );
};

var SizeXs = function (props) {
  return React.createElement(
    "svg",
    __assign(
      {
        width: 28,
        height: 16,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      props,
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z",
        fill: "currentColor",
      }),
      React.createElement("path", {
        d: "M10.648 6.288a.677.677 0 0 0-.652 0l-1.497.856-1.017.558-1.497.856a.677.677 0 0 1-.652 0l-1.19-.67a.639.639 0 0 1-.326-.54v-1.32a.6.6 0 0 1 .326-.54l1.17-.65a.677.677 0 0 1 .653 0l1.17.65a.639.639 0 0 1 .327.54v.856l1.017-.577V5.45a.6.6 0 0 0-.327-.54L5.985 3.685a.677.677 0 0 0-.652 0L3.126 4.912a.6.6 0 0 0-.326.54v2.473a.6.6 0 0 0 .326.54l2.207 1.228a.677.677 0 0 0 .652 0l1.497-.837 1.017-.577 1.497-.837a.677.677 0 0 1 .652 0l1.17.65a.639.639 0 0 1 .327.54v1.321a.6.6 0 0 1-.327.54l-1.17.67a.677.677 0 0 1-.652 0l-1.17-.652a.638.638 0 0 1-.327-.539v-.856l-1.017.577v.856a.6.6 0 0 0 .326.54l2.207 1.227a.677.677 0 0 0 .652 0l2.207-1.228a.639.639 0 0 0 .326-.54V8.075a.6.6 0 0 0-.326-.54l-2.226-1.246Z",
        fill: "currentColor",
      }),
    ),
    React.createElement(
      "g",
      { clipPath: "url(#b)", fillRule: "evenodd", clipRule: "evenodd" },
      React.createElement("path", {
        d: "M12 8a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
        fill: "currentColor",
      }),
      React.createElement("path", {
        d: "M20.95 8.631c-.054.004-.328.02-.939.02-.486 0-.831-.014-.952-.02-1.879-.083-3.281-.41-3.281-.803 0-.392 1.402-.72 3.28-.804v1.28c.124.01.476.03.962.03.583 0 .875-.024.928-.029v-1.28c1.874.084 3.274.412 3.274.803 0 .392-1.4.72-3.274.803h.002Zm0-1.738V5.747h2.616V4h-7.123v1.747h2.615v1.145c-2.126.098-3.725.52-3.725 1.026s1.6.928 3.725 1.026v3.671h1.891V8.943c2.121-.098 3.718-.52 3.718-1.025 0-.506-1.595-.927-3.718-1.026Z",
        fill: "currentColor",
      }),
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "clipPath",
        { id: "a" },
        React.createElement("path", {
          fill: "currentColor",
          d: "M0 0h16v16H0z",
        }),
      ),
      React.createElement(
        "clipPath",
        { id: "b" },
        React.createElement("path", {
          fill: "currentColor",
          transform: "translate(12)",
          d: "M0 0h16v16H0z",
        }),
      ),
    ),
  );
};

export {
  About,
  Add,
  Apps,
  ArrowBottomLeft,
  ArrowBottomLeftSmall,
  ArrowBottomRight,
  ArrowBottomRightSmall,
  ArrowDoubleRightSmall,
  ArrowDown,
  ArrowLeft,
  ArrowLeftLg,
  ArrowRight,
  ArrowRightLg,
  ArrowTopLeft,
  ArrowTopLeftSmall,
  ArrowTopRight,
  ArrowTopRightSmall,
  ArrowUp,
  BalanceFill,
  BarGraph,
  Bitcoin,
  Camera,
  ChevronDown,
  ChevronDownSmall,
  ChevronLeft,
  ChevronLeftSmall,
  ChevronRight,
  ChevronRightSmall,
  ChevronUp,
  ChevronUpSmall,
  Close,
  Copy,
  Cross,
  Day,
  Download,
  EcosystemDAppsFill,
  Exclamation,
  EyeHide,
  EyeView,
  Filter,
  Gas,
  IconFail,
  IconSuccess,
  Info,
  Link,
  Lock,
  Menu,
  Minus,
  More,
  NewFill,
  Night,
  Notification,
  PieChart,
  Play,
  Plus,
  Redo,
  Refresh,
  Resizer,
  Search,
  SelectNetworkEthereum,
  SelectNetworkGnosis,
  SelectNetworkOptimism,
  SelectToken1inch,
  SelectTokenAave,
  SelectTokenAda,
  SelectTokenArbitrum,
  SelectTokenBusd,
  SelectTokenDai,
  SelectTokenEth,
  SelectTokenLink,
  SelectTokenMatic,
  SelectTokenTel,
  SelectTokenUni,
  SelectTokenUsdc,
  SelectTokenUsdt,
  SelectTokenWbtc,
  SelectTokenWeth,
  SelectWalletBitski,
  SelectWalletCoinbase,
  SelectWalletMetamask,
  SelectWalletVenly,
  SelectWalletWalletConnect,
  Send,
  Settings,
  SizeMd,
  SizeSm,
  SizeXs,
  Step1,
  Step2,
  Step3,
  Stepper,
  SupportFill,
  Swap,
  SwapFill,
  SwapHor,
  SwapHorizontal,
  Tick,
  Token,
  TokensQuickswap,
  TokensSwapr,
  TokensUniswap,
  TransactionsFill,
  Undo,
  Unlock,
  User,
  Warning,
};
