import { fileURLToPath } from "url";
import { dirname as pathDirname } from "path";

export function filename(importMeta) {
  return importMeta.url ? fileURLToPath(importMeta.url) : "";
}

export function dirname(importMeta) {
  return pathDirname(filename(importMeta));
}
