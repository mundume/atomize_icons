const fs = require("fs");
const $ = require("cheerio");

const directories = ["output/icons"];
let errors = 0;

directories.forEach((dir) =>
  fs.readdirSync(dir).forEach((file) => {
    const viewBox = $.load(fs.readFileSync(`${dir}/${file}`))("svg").attr(
      "viewBox"
    );
    if (!viewBox ) {
      console.error(
        `Error: \`${dir}/${file}\` has a viewBox of \x1b[31m\`${viewBox}\`\x1b[0m`
      );
      errors++;
    }
  })
);

if (errors > 0) {
  process.exit(1);
} else {
  console.log("Tests passed!");
}