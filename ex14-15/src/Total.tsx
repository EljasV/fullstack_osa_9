interface TotalProps {
    courseParts: ({ exerciseCount: number; name: string })[];
}

export const Total = (props: TotalProps) => {
    return <p>
        Number of exercises{" "}
        {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>;
};