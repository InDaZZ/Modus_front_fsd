import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import { Configuration } from "webpack";
import { IbuildOptions } from "../types/types";
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

export function plugin(options: IbuildOptions): Configuration["plugins"] {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(options.paths.htmlFile),
      alwaysWriteToDisk: true,
    }),
    new ReactRefreshWebpackPlugin()
  ];
}
