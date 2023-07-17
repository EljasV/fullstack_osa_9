import React, {useEffect, useState} from 'react';
import axios from "axios";
import {DiaryEntry, toDiaryEntry} from "./types/DiaryEntry";
import {DiaryEntries} from "./DiaryEntries";
import {NewEntryForm} from "./NewEntryForm";

const App = () => {

    const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);

    const [errorText, setErrorText] = useState<string | null>(null);

    const showError = (error: string) => {
        setErrorText(error);
        setTimeout(() => setErrorText(null), 4000);
    };

    useEffect(() => {
        axios.get("http://localhost:3001/api/diaries").then(response => {
            const data = response.data;
            const formatted: DiaryEntry[] = [];
            if (Array.isArray(data)) {
                for (const datum of data) {
                    const entry = toDiaryEntry(datum);
                    if (entry !== null) {
                        formatted.push(entry);
                    }
                }
            }
            setDiaryEntries(formatted);
        });
    }, []);


    return (
        <div>
            <p style={{color: "red"}}>{errorText}</p>
            <NewEntryForm setDiaryEntries={setDiaryEntries} showError={showError}/>
            <DiaryEntries diaryEntries={diaryEntries}/>
        </div>
    );
};

export default App;
