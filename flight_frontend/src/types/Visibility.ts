import {isString} from "../utils/TypeInfo";

export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
}


const isVisibility = (object: unknown): object is Visibility => {
    return isString(object) && Object.values(Visibility).map(value => value.toString()).includes(object);

};

export const toVisibilityEntry = (visibility: unknown): Visibility | null => {
    return isVisibility(visibility) ? visibility : null;
};