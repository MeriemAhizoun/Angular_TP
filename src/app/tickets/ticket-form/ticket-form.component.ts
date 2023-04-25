import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import {Major} from '../../../models/enum/major';
import {STUDENTS_MOCK} from '../../../mocks/sudents.mock';
import {Student} from '../../../models/student';
import {StudentService} from '../../../services/student/student.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  public ticketForm: FormGroup;
  // public MAJOR_LIST = Major;
  public MAJOR_LIST = ['SI', 'GE', 'EI'];
  public STUDENT_LIST = STUDENTS_MOCK;
  public selectStudentID: number;

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService: StudentService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: [''],
      student: [{} as Student]
    });
  }

  ngOnInit() {
  }

  addTicket() {
    /*const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;

    const studentId = this.selectStudentID;
    console.log('Selected Student ID:', studentId);

    this.studentService.getStudentById(studentId);
    console.log('Selected Student:', student);

    if (student) {
      console.log('Selected Student ID:', student.id);
    }

    ticketToCreate.student = student;
    console.log('Ticket to Create:', ticketToCreate);

    this.ticketService.addTicket(ticketToCreate);*/

    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    console.log('>> id' + this.selectStudentID);
    const student: Student = this.studentService.getStudentById(this.selectStudentID);
    console.log('Student ' + student);
    ticketToCreate.student = student;
    ticketToCreate.archived = false;
    this.ticketService.addTicket(ticketToCreate);
  }
}
