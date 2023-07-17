import React, {useState} from "react";
import axios from "axios";
import {DiaryEntry} from "./types/DiaryEntry";

interface NewEntryFormProps {
    setDiaryEntries: (value: ((prevState: DiaryEntry[]) => DiaryEntry[]) | DiaryEntry[]) => void
    showError: ((error: string) => void)
}

export const NewEntryForm = (props: NewEntryFormProps) => {

    const [date, setDate] = useState("");
    const [visibility, setVisibility] = useState("");
    const [weather, setWeather] = useState("");
    const [comment, setComment] = useState("");

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(date, visibility, weather, comment);

        axios.post("http://localhost:3001/api/diaries", {date, visibility, weather, comment}).then(res => {
            props.setDiaryEntries(prevState => prevState.concat(res.data));
        }).catch(reason => {
            props.showError("Error: " + reason.response.data);
        });

    };

    return <>
        <h2>Add New Entry</h2>
        <form onSubmit={onSubmit}>
            <div>
                Date
                <input type="date" value={date} onChange={event => {
                    setDate(event.target.value);
                }}/>
            </div>
            <div>
                Visibility
                great <input type="radio" name="visibility" onChange={() => setVisibility("great")}/>
                good <input type="radio" name="visibility" onChange={() => setVisibility("good")}/>
                ok <input type="radio" name="visibility" onChange={() => setVisibility("ok")}/>
                poor <input type="radio" name="visibility" onChange={() => setVisibility("poor")}/>
            </div>
            <div>
                Weather
                sunny <input type="radio" name={"weather"} onChange={() => setWeather("sunny")}></input>
                rainy <input type="radio" name={"weather"} onChange={() => setWeather("rainy")}></input>
                cloudy <input type="radio" name={"weather"} onChange={() => setWeather("cloudy")}></input>
                stormy <input type="radio" name={"weather"} onChange={() => setWeather("stormy")}></input>
                windy <input type="radio" name={"weather"} onChange={() => setWeather("windy")}></input>
            </div>
            <div>
                Comment
                <input value={comment} onChange={event => setComment(event.target.value)}/>
            </div>
            <button type="submit">Add</button>
        </form>
    </>;
};