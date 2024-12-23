import { ModuleOptions } from "webpack";
import { IbuildOptions } from "../types/types";
import ReactRefreshTypeScript from 'react-refresh-typescript';
export function loaders(options: IbuildOptions): ModuleOptions["rules"] {
  const {mode} = options;
  const isDevelopment = mode === 'development'
  const reactHotRefresh = {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          getCustomTransformers: () => ({
            before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: isDevelopment,
        },
      },
    ],
  };
  const assets = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [assets, scssLoader, tsLoader];
}
