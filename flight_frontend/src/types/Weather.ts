import {isString} from "../utils/TypeInfo";

export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Windy = 'windy',
}

const isWeather = (object: unknown): object is Weather => {
    return isString(object) && Object.values(Weather).map(value => value.toString()).includes(object);
};
export const toWeatherEntry = (object: unknown): Weather | null => {
    return isWeather(object) ? object : null;
};
