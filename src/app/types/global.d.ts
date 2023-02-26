declare module "*scss" {
  interface IClassnames {
    [className: string]: string;
  }
  const classNames: IClassnames;
  export = classNames;
}

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
