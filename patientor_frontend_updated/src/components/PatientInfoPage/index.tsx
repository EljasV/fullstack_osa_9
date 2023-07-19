import {useParams} from "react-router-dom"
import {Diagnosis, Gender, Patient} from "../../types";
import {useEffect, useState} from "react"
import patientService from "../../services/patients"
import diagnosisService from "../../services/diagnoses"
import {Female, Male, Transgender} from "@mui/icons-material";

const PatientInfoPage = () => {
    const id = useParams().id as string;

    const [patient, setPatient] = useState<Patient>()
    const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const pat = patientService.getIndividual(id);
            const diag = await diagnosisService.get();
            setPatient(await pat);
            setDiagnoses(await diag);
        }
        void fetchData();
    }, [])

    if (!patient) {
        return null;
    }

    const icon = patient.gender === Gender.Female ? <Female/> : patient.gender === Gender.Male ? <Male/> :
        <Transgender/>;


    return <div>
        <h2>{patient.name} {icon}</h2>
        <div>ssn: {patient.ssn}</div>
        <div>occupation: {patient.occupation}</div>
        <h3>Entries</h3>
        {patient.entries.map(entry => {
            return <div>
                {entry.date} <i>{entry.description}</i>
                <ul>
                    {entry.diagnosisCodes?.map(code =>
                        <li>{code} {diagnoses.find(value => value.code === code)?.name}</li>)}
                </ul>
            </div>
        })}
    </div>
}

export default PatientInfoPage;