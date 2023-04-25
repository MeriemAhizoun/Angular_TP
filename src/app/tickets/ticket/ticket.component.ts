import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input() ticket: Ticket;

  @Output() ticketDeleted: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  @Output() ticketArchived: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  @Output() ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }

  deleteTicket() {
    console.log('--> delete ' + this.ticket.title);
    this.ticketDeleted.emit(this.ticket);
  }

  archiveTicket() {
    this.ticketArchived.emit(this.ticket);
  }
}
