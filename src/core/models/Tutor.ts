import { Tutorship } from "./Tutorship";

export interface Tutor {
  idTutor: number;
  code: string;
  fullName: string;
  tutorships: Tutorship[];
}
