import { Tutor } from "./Tutor";
import { Topic } from "./Topic";
import { Student } from "./Student";

export interface Tutorship {
  idTutorship: number;
  date: Date;
  reason: string;
  solution: string;
  tutor: Tutor;
  topic: Topic;
  student: Student;
}
