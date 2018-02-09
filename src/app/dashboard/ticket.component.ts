import {Component,OnInit} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
    selector:'dashboard',
    templateUrl:'ticket.html'
})


export class TicketComponent implements OnInit {

    tickets: FirebaseListObservable<any[]>;
    constructor(public af: AngularFireDatabase){

    }
    ngOnInit() {
        this.tickets = this.af.list('/Tickets');
        console.log("Tickets :" + this.tickets);
    
  }
}