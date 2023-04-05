type Mods = Record<string, string | boolean>;

export const classNames = (
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
) => [
    cls,
    ...additional.filter(Boolean),
    Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
    // eslint-disable-next-line no-shadow
        .map(([cls]) => cls),
].join(' ');
