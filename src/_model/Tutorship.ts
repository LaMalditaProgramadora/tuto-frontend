import { Tutor } from "./Tutor";
import { Topic } from "./Topic";
import { Student } from "./Student";

export class Tutorship {
    public idTutorship: number;
    public date: Date;
    public reason: string;
    public solution: string;
    public tutor: Tutor;
    public topic: Topic;
    public student: Student;
}