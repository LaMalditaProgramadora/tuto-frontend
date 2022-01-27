import { Tutorship } from './Tutorship';

export interface Topic {
  idTopic: number;
  description: string;
  tutorships: Tutorship[];
}
