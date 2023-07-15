import {CoursePart} from "./types"

interface PartProps {
    part: CoursePart
}

export const Part = (props: PartProps) => {
    switch (props.part.kind) {
        case "background":
            return <div>
                <div>
                    <b key={props.part.name}>{props.part.name} {props.part.exerciseCount}</b>
                </div>
                <div>
                    <i>{props.part.description}</i>
                </div>
                <div>
                    Required skills: {props.part.backgroundMaterial}
                </div>
            </div>
        case "basic":
            return <div>
                <div>
                    <b key={props.part.name}>{props.part.name} {props.part.exerciseCount}</b>
                </div>
                <div>
                    <i>{props.part.description}</i>
                </div>
            </div>
        case "group":
            return <div>
                <div>
                    <b key={props.part.name}>{props.part.name} {props.part.exerciseCount}</b>
                </div>
                <div>
                    Project exercises {props.part.groupProjectCount}
                </div>
            </div>
        case "special":
            return <div>
                <div>
                    <b key={props.part.name}>{props.part.name} {props.part.exerciseCount}</b>
                </div>
                <div>
                    <i>{props.part.description}</i>
                </div>
                <div>
                    Requirements: {props.part.requirements.join(" ")}
                </div>
            </div>
        default:
            return <>
            </>
    }
};