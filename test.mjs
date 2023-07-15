import fs from "fs";
import path from "path";
import $ from "cheerio";

const directories = ["output/components/Icons", "output/components/Icons/icon"];
let errors = 0;

directories.forEach((dir) =>
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isFile() && file !== "index.js") {
      const viewBox = $.load(fs.readFileSync(filePath))("svg").attr("viewBox");
      if (!viewBox) {
        console.error(
          `Error: \`${filePath}\` has a viewBox of \x1b[31m\`${viewBox}\`\x1b[0m`,
        );
        errors++;
      }
    }
  }),
);

if (errors > 0) {
  process.exit(1);
} else {
  console.log("Tests passed!");
}
