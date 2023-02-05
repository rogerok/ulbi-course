type Mods = Record<string, string | boolean>;

export const classNames = (cls: string, mods: Mods, additional: string[]) => {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(" ");
};
