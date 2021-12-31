import { Section } from "./Section";
import { Tutorship } from "./Tutorship";

export class Student {
    public idStudent: number;
    public code: string;
    public fullName: string;
    public sections: Section[];
    public tutorships: Tutorship[];
}