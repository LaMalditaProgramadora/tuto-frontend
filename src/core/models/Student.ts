import { Section } from './Section';
import { Tutorship } from './Tutorship';

export interface Student {
  idStudent: number;
  code: string;
  fullName: string;
  sections: Section[];
  tutorships: Tutorship[];
}
