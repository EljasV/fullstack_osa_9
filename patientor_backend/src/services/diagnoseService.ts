import diagnosesData from "../../data/diagnoses";
import {Diagnosis} from "../types/diagnosis";

const getEntries = (): Diagnosis[] => {
    return diagnosesData;
};



export default {
    getEntries
};