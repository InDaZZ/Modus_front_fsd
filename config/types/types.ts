export type buildMode = "development" | "production";

export interface IENV {
  mode: buildMode;
  port: number;
}
export interface IbuildPaths {
  enteryPiont: string;
  htmlFile: string;
  outPut: string;
  srcPath: string;
}

export interface IbuildOptions {
  port: number;
  paths: IbuildPaths;
  mode: buildMode;
}
