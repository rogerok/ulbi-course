import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port } = options;
  return {
    open: true,
    port,
    historyApiFallback: true,
  };
}
