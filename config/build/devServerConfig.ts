import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { IbuildOptions } from "../types/types";

export function devServer(options: IbuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 5001,
    open: true,
    historyApiFallback: true,
  };
}
