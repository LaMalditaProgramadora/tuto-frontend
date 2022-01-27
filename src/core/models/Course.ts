import { Section } from './Section';

export interface Course {
  idCourse: number;
  name: string;
  code: string;
  sections: Section[];
}
