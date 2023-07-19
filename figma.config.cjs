require("dotenv").config();
const fileId = process.env.FILE_ID;

/** @type {import('@figma-export/types').FigmaExportRC} */
module.exports = {
  commands: [
    // [
    //   "styles",
    //   {
    //     fileId: fileId,
    //     // version: 'xxx123456', // optional - file's version history is only supported on paid Figma plans
    //     // onlyFromPages: ['icons'], // optional - Figma page names (all pages when not specified)
    //     outputters: [
    //       require("@figma-export/output-styles-as-sass")({
    //         output: "./src/styles",
    //       }),
    //     ],
    //   },
    // ],
    [
      "components",
      {
        fileId,
        onlyFromPages: ["💜 Icons"],
        transformers: [
          require("@figma-export/transform-svg-with-svgo")({
            plugins: [
              {
                name: "preset-default",

                params: {
                  overrides: {
                    removeViewBox: true,
                  },
                },
              },
              {
                name: "addAttributesToSVGElement",
                active: true,
              },

              {
                name: "removeDimensions",
                active: false,
              },
            ],
          }),
        ],
        outputters: [
          require("@figma-export/output-components-as-svgr")({
            output: "./src",
            getFileExtension: () => ".tsx",
            getSvgrConfig: () => ({
              typescript: true,
            }),
          }),
        ],
      },
    ],
  ],
};
