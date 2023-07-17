import {DiaryEntry} from "./types/DiaryEntry";
import React from "react";

interface DiaryEntryComponentProps {
    entry: DiaryEntry;
}

export const DiaryEntryComponent = (props: DiaryEntryComponentProps) => {
    return <div>
        <b>{props.entry.date}</b>
        <div>Weather: {props.entry.weather}</div>
        <div>Visibility: {props.entry.visibility}</div>
        <br/>
    </div>;
};