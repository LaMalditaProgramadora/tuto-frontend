import { Teacher } from "./Teacher";
import { Course } from "./Course";
import { Student } from "./Student";

export interface Section {
  idSection: number;
  code: string;
  period: string;
  teacher: Teacher;
  course: Course;
  students: Student[];
}
