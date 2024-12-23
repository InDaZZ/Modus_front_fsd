import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";
import { loaders } from "./loaderConfig";
import { devServer } from "./devServerConfig";
import { plugin } from "./pluginConfig";
import { resolveConfig } from "./resolveConfig";
import { IbuildOptions } from "../types/types";

export function webpackBuildConfig(
  options: IbuildOptions
): webpack.Configuration {
  const { mode, paths, port } = options;
  const isDevBuild = options.mode === "development";
  return {
    mode: options.mode ?? "production",
    entry: paths.enteryPiont,
    module: {
      rules: loaders(options),
    },
    resolve: resolveConfig(options),
    output: {
      filename: "build.[contenthash].js",
      path: paths.outPut,
      clean: true,
    },
    plugins: plugin(options),
    devtool: isDevBuild ? "inline-source-map" : false,
    devServer: isDevBuild ? devServer(options) : undefined,
  };
}
