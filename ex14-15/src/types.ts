interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

interface CoursePartDescription extends CoursePartBase {
    description: string
}

interface CoursePartBasic extends CoursePartBase, CoursePartDescription {
    kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
}

interface CoursePartBackground extends CoursePartBase, CoursePartDescription {
    backgroundMaterial: string;
    kind: "background"
}

interface CoursePartSpecial extends CoursePartBase ,CoursePartDescription{
    kind: "special"
    requirements: string[]
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;
