import patientsData from "../../data/patients";
import {NewPatientEntry, NonSensitivePatient, Patient} from "../types/patient";
import {v1 as uuid} from "uuid";

const getEntries = (): Patient[] => {
    return patientsData;
};

const getNonsensitiveEntries = (): NonSensitivePatient[] => {
    return patientsData.map(({dateOfBirth, gender, id, name, occupation}) => ({
        dateOfBirth,
        gender,
        id,
        name,
        occupation,
    }));
};

const addEntry = (newPatientEntry: NewPatientEntry): Patient => {
    const patient = {...newPatientEntry, id: uuid()};
    patientsData.push(patient);
    return patient;
};

const getById = (id: string): Patient | undefined => {
    return patientsData.find(value => value.id === id)
}

export default {
    getEntries,
    getNonsensitiveEntries,
    addEntry,
    getById
};