import { copyFileSync } from "node:fs";

copyFileSync(
  "dist/client/index.html",
  "dist/client/404.html",
);

console.log("Created dist/client/404.html");
