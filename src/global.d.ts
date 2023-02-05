declare module "*scss" {
  interface IClassnames {
    [className: string]: string;
  }
  const classNames: IClassnames;
  export = classNames;
}
