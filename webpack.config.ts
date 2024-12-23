import * as path from "path";
import * as webpack from "webpack";
import { webpackBuildConfig } from "./config/build/webpackBuildConfig";
import { IbuildPaths } from "./config/types/types";

type buildMode = "development" | "production";
interface IENV {
  mode: buildMode;
  port: number;
}

const paths: IbuildPaths = {
  enteryPiont: path.resolve(__dirname, "src", "index.tsx"),
  htmlFile: path.resolve(__dirname, "public", "index.html"),
  outPut: path.resolve(__dirname, "public"),
  srcPath: path.resolve(__dirname, "src"),
};

export default (env: IENV) => {
  const isDevBuild = env.mode === "development";

  const config: webpack.Configuration = webpackBuildConfig({
    mode: env.mode,
    paths: paths,
    port: env.port ?? 3000,
  });

  return config;
};
