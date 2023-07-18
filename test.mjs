import fs from "fs";
import path from "path";
import $ from "cheerio";

const directories = ["src/Icons", "src/Icons/icon"];
let errors = 0;

directories.forEach((dir) =>
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isFile() && file !== "index.ts") {
      const width = $.load(fs.readFileSync(filePath))("svg").attr("width");
      const height = $.load(fs.readFileSync(filePath))("svg").attr("height");
      if (!width && !height) {
        console.error(
          `Error: \`${filePath}\` has a width of \x1b[31m\`${width}\`\x1b[0m`,
          `and a height of \x1b[31m\`${height}\`\x1b[0m`,
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
