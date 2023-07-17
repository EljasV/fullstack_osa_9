import {toWeatherEntry, Weather} from "./Weather";
import {toVisibilityEntry, Visibility} from "./Visibility";
import {isDate, isNumber} from "../utils/TypeInfo";


export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
}


export const toDiaryEntry = (object: unknown): DiaryEntry | null => {
    if (!object) {
        return null;
    }
    if (typeof object !== "object") {
        return null;
    }

    const id = "id" in object && isNumber(object.id) ? Number(object.id) : null;
    const date = "date" in object && isDate(object.date) ? object.date : null;
    const visibility = "visibility" in object ? toVisibilityEntry(object.visibility) : null;
    const weather = "weather" in object ? toWeatherEntry(object.weather) : null;

    if (weather && id && date && visibility) {
        return {id: id, date: date, visibility: visibility, weather: weather};
    }
    return null;
};