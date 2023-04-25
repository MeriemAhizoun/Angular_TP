import { Injectable } from '@angular/core';
import {Student} from '../../models/student';
import {STUDENTS_MOCK} from '../../mocks/sudents.mock';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = STUDENTS_MOCK;
  constructor() { }

  /*getStudentById(id: number): Student {
    console.log('>> ' + id);
    const s = this.students.find(student => student.id === id);
    console.log('>>> ' + s.id);
    return s;
  }*/

  getStudentById(id: number): Student {
    return this.students.find(student => student.id == id);
    /* for (let s in this.students) {
      console.log('><  ' + this.students[s].id);
      console.log('\n');
      if (this.students[s].id == id) {
        console.log('yes');
      }
    }
  */
  }

}
