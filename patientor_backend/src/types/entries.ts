import {Diagnosis} from "./diagnosis";

interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<Diagnosis["code"]>;
}

export interface OccupationalHealthcareEntry extends BaseEntry {
    type: "OccupationalHealthcare";
    employerName: string;
    sickLeave?: { startDate: string, endDate: string };
}

export interface HospitalEntry extends BaseEntry {
    type: "Hospital";
    discharge: { date: string, criteria: string }
}

export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating
}

export type Entry = OccupationalHealthcareEntry | HospitalEntry | HealthCheckEntry;

type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;

export type EntryWithoutId = UnionOmit<Entry, "id">
