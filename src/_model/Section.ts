import { Teacher } from "./Teacher";
import { Course } from "./Course";
import { Student } from "./Student";

export class Section {
    public idSection: number;
    public code: string;
    public period: string;
    public teacher: Teacher;
    public course: Course;
    public students: Student[];
}