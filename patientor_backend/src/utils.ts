import {Gender, NewPatientEntry} from "./types/patient";


const isString = (text: unknown): text is string => {
    return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(value => value.toString()).includes(param);
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error("Incorrect or missing date:" + date);
    }
    return date;
};

const parseString = (s: unknown): string => {
    if (!s || !isString(s)) {
        throw new Error("Incorrect or missing string:" + s);
    }
    return s;
};

const parseGender = (s: unknown): Gender => {
    if (!s || !isString(s) || !isGender(s)) {
        throw new Error("Incorrect or missing gender: " + s);
    }
    return s;
};

export const toNewPatientEntry = (object: unknown): NewPatientEntry => {
    if (!object || typeof object !== "object") {
        throw new Error("Incorrect or missing data!");
    }
    if (!("dateOfBirth" in object) || !("gender" in object) || !("name" in object) || !("ssn" in object) || !("occupation" in object)) {
        throw new Error("Incorrect data: some fields are missing!");
    }

    return {
        dateOfBirth: parseDate(object.dateOfBirth),
        gender: parseGender(object.gender),
        name: parseString(object.name),
        ssn: parseString(object.ssn),
        occupation: parseString(object.occupation)
    };

};

