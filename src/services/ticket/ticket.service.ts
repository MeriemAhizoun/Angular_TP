import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    this.ticketList.push(ticket);
    this.tickets$.next(this.ticketList);
  }

  deleteTicket(ticket: Ticket) {
    console.log('service');
    this.ticketList = this.ticketList.filter(t => t.title !== ticket.title);
    this.tickets$.next(this.ticketList);
  }

  archiveTicket(ticket: Ticket) {
    for (let i in this.ticketList) {
      if (this.ticketList[i].title == ticket.title) {
        if (ticket.archived == false) {
          this.ticketList[i].archived = true;
          console.log('archived');
        }
      }
    }
    this.tickets$.next(this.ticketList);
    for (let i in this.ticketList) {
      console.log(this.ticketList[i].archived);
    }
  }
}
