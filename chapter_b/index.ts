import express from "express";
import {calculateBmi} from "./bmiCalculator";
import {calculateExercises} from "./exerciseCalculator";

const app = express();

app.use(express.json());


app.get("/hello", (_req, res) => {
    res.send("Hello full stack!");
});

app.get("/bmi", (req, res) => {
    console.log(req.query);


    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    if (isNaN(height) || isNaN((weight))) {
        return res.status(400).send({error: "malformatted parameters"});
    }

    return res.send({height, weight, bmi: calculateBmi(height, weight)});
});


app.post("/exercises", (req, res) => {

    const malformattedParameters = {
        error: "malformatted parameters"
    };
    const parametersMissing = {
        error: "parameters missing"
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if ((!req.body.target) || (!req.body.daily_exercises)) {
        return res.status(400).send(parametersMissing);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const target = Number(req.body.target);
    if (isNaN(target)) {
        return res.status(400).send(malformattedParameters);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (!Array.isArray(req.body.daily_exercises)) {
        return res.status(400).send(malformattedParameters);
    }

    const exercises: number[] = [];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    for (const exercise of req.body.daily_exercises) {
        const num = Number(exercise);
        if (isNaN(num)) {
            return res.status(400).send(malformattedParameters);
        }
        exercises.push(num);
    }

    return res.send(calculateExercises(target, exercises));
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});