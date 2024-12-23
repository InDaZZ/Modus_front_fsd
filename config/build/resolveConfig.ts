import { Configuration } from "webpack";
import { IbuildOptions } from "../types/types";
export function resolveConfig(
  options: IbuildOptions
): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": options.paths.srcPath,
    },
  };
}
