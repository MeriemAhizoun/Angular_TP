import { Ticket } from '../models/ticket';
import { Major } from '../models/enum/major';
import {STUDENTS_MOCK} from './sudents.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: '',
    date: dateToday,
    student: STUDENTS_MOCK[0],
    major: Major.SI,
    archived: true
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCK[1],
    major: Major.GE,
    archived: false
  },
  {
    title: 'SI6 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCK[1],
    major: Major.SI,
    archived: false
  }
];
