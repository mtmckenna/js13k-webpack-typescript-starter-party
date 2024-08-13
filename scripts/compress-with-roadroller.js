import fs from "fs";
const distDir = process.cwd() + "/dist";
const srcDir = process.cwd() + "/src";
import { Packer } from "roadroller";
import { minify } from "html-minifier-terser"

const data = fs.readFileSync(`${distDir}/main.js`, "utf8");
const index = fs.readFileSync(`${srcDir}/index.html`, "utf8");
const minifiedIndex = await minify(index, { minifyCSS: true, collapseWhitespace: true, removeComments: true, removeAttributeQuotes: true, removeRedundantAttributes: true, removeScriptTypeAttributes: true, removeStyleLinkTypeAttributes: true, useShortDoctype: true });

const inputs = [{
    action: "eval",
    type: "js",
    data
}];

const options = {};
const packer = new Packer(inputs, options);

await packer.optimize(); // takes less than 10 seconds by default

const { firstLine, secondLine } = packer.makeDecoder();
const output = `${firstLine}${secondLine}`;
const updatedIndex = `${minifiedIndex}<script>${output}</script>`;
fs.writeFileSync(`${distDir}/index.html`, updatedIndex);
