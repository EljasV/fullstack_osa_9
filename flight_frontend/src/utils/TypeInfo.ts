export const isString = (object: unknown): object is string => {
    return typeof object === "string" || object instanceof String;
};

export const isNumber = (object: unknown): object is number => {
    return !isNaN(Number(object));
};

export const isDate = (object: unknown): object is string => {
    return isString(object) && Boolean(Date.parse(object as string));
};