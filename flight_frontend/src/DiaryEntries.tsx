import {DiaryEntry} from "./types/DiaryEntry";
import React from "react";
import {DiaryEntryComponent} from "./DiaryEntryComponent";

interface DiaryEntriesProps {
    diaryEntries: DiaryEntry[];
}

export const DiaryEntries = (props: DiaryEntriesProps) => {

    return <>
        <h2>Diary Entries</h2>
        {props.diaryEntries.map(value => <DiaryEntryComponent key={value.id} entry={value}/>)}
    </>;
};