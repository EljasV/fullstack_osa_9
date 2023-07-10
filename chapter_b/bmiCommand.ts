import {calculateBmi} from "./bmiCalculator";

const errorMsg = "You must supply two number arguments to the program.";
if (process.argv.length != 4) {
    console.error(errorMsg);
    process.exit(1);
}
const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);
if (isNaN(height) || isNaN(weight)) {
    console.error(errorMsg);
    process.exit(1);
}

console.log(calculateBmi(height, weight));