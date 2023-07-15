require("dotenv").config();
const fileId = process.env.FILE_ID;

/** @type {import('@figma-export/types').FigmaExportRC} */
export const commands = [
  [
    "styles",

    {
      fileId: fileId,
      // version: 'xxx123456', // optional - file's version history is only supported on paid Figma plans
      // onlyFromPages: ['icons'], // optional - Figma page names (all pages when not specified)
      outputters: [
        require("@figma-export/output-styles-as-sass")({
          output: "./output/styles",
        }),
      ],
    },
  ],
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
                  removeViewBox: false,
                },
              },
            },
            {
              name: "removeDimensions",
              active: true,
            },
          ],
        }),
      ],
      outputters: [
        require("@figma-export/output-components-as-svgr")({
          output: "./output/components",
        }),
      ],
    },
  ],
];
