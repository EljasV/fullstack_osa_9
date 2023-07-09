import * as process from "process";

const calculateBmi = (height: number, weight: number): string => {
    const heightMeters = height / 100;


    const bmi = weight / (heightMeters * heightMeters);

    if (bmi < 16) {
        return "Underweight (Severe thinness)";
    } else if (bmi < 17) {
        return "Underweight (Moderate thinness)";
    } else if (bmi < 18.5) {
        return "Underweight (Mild thinness)";
    } else if (bmi < 25) {
        return "Normal (Healthy weight)";
    } else if (bmi < 30) {
        return "Overweight (Pre-obese)";
    } else if (bmi < 35) {
        return "Obese (Class I)"
    } else if (bmi < 40) {
        return "Obese (Class II)";
    } else {
        return "Obese (Class III)";
    }
};


const errorMsg = "You must supply two number arguments to the program."
if (process.argv.length != 4) {
    console.error(errorMsg)
    process.exit(1)
}
const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);
if (isNaN(height) || isNaN(weight)) {
    console.error(errorMsg)
    process.exit(1)
}

console.log(calculateBmi(height, weight));