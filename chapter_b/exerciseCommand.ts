import process from "process";
import {calculateExercises} from "./exerciseCalculator";

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


const days: number[] = [];
for (let i = 3; i < process.argv.length; i++) {
    const dayNumber = Number(process.argv[i]);
    if (isNaN(dayNumber)) {
        console.error(errorMsg);
        process.exit(1);
    }
    days.push(dayNumber);
}

console.log(calculateExercises(targetNumber, days));
