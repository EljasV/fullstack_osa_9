import express from "express";

import patientService from "../services/patientService";
import {toNewPatientEntry} from "../utils";

const router = express.Router();


router.get("/", (_req, res) => {
    res.send(patientService.getNonsensitiveEntries());
});

router.post("/", (req, res) => {
    try {
        const body = toNewPatientEntry(req.body);
        const addedPatient = patientService.addEntry(body);
        res.json(addedPatient);
    } catch (error: unknown) {
        let errorMessage = "Something went wrong!";
        if (error instanceof Error) {
            errorMessage += " Error:" + error.message;
        }
        res.status(400).send(errorMessage);
    }
});


router.get("/:id", (req, res) => {
    const found = patientService.getById(req.params.id)
    if (found) {
        return res.json(found)
    }
    return res.status(404).send()
});

export default router;