import { Section } from "./Section";

export interface Teacher {
    idTeacher: number;
    code: string;
    fullName: string;
    sections: Section[];
}