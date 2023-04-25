import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public displayTicketArchived: Boolean = false;
  public archiveTitle: String = 'Show Archived Ticket';

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
  }

  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }

  deleteTicket(ticket: Ticket) {
    console.log('Delete ticket --> ' + ticket.title);
    this.ticketService.deleteTicket(ticket);
    // this.ticketList = this.ticketService.tickets$.getValue();
  }

  archiveTicket(ticket: Ticket) {
    this.ticketService.archiveTicket(ticket);
  }

  archive() {
    if (!this.displayTicketArchived) {
      this.displayTicketArchived = true;
      this.archiveTitle = 'Hide archived Ticket';
    }
    else {
      this.displayTicketArchived = false;
      this.archiveTitle = 'Show Archived Ticket';
    }
  }
}
