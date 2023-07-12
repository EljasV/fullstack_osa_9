import diagnosesData from "../../data/diagnoses";
import {Diagnose} from "../types/diagnose";

const getEntries = (): Diagnose[] => {
    return diagnosesData;
};



export default {
    getEntries
};