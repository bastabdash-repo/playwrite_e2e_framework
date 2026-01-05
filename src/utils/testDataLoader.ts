import fs from "fs";
import path from "path";

export function loadTestData(fileName: string) {
  return JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "src/test-data", fileName),
      "utf-8"
    )
  );
}