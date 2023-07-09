import * as process from "process";

interface exerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}


const calculateExercises = (target: number, days: number[]): exerciseResult => {
    const descriptions = ["You need to exercise more.", "Not too bad but could be better", "Great! You reached the target."];

    const periodLength = days.length;
    const trainingDays = days.filter(value => value != 0).length;
    const sum = days.reduce((total, currentValue) => total + currentValue, 0);
    const average = sum / periodLength;
    const success = average >= target;

    let rating = 1;
    if (average >= target) {
        rating = 3;
    } else if (average >= (target / 2)) {
        rating = 2;
    }

    const ratingDescription = descriptions[rating - 1];

    return {
        average,
        periodLength,
        rating,
        ratingDescription,
        success,
        target,
        trainingDays
    };
};

console.log(process.argv);

const errorMsg = "You must supply many number arguments, where the first is the target value and the rest are exercise amounts";
if (process.argv.length < 4) {
    console.error(errorMsg);
    process.exit(1);
}

const targetNumber = Number(process.argv[2]);
if (isNaN(targetNumber)) {
    console.error(errorMsg);
    process.exit(1);
}


const days: number[] = []
for (let i = 3; i < process.argv.length; i++) {
    const dayNumber = Number(process.argv[i]);
    if (isNaN(dayNumber)) {
        console.error(errorMsg)
        process.exit(1)
    }
    days.push(dayNumber)
}

console.log(calculateExercises(targetNumber, days));