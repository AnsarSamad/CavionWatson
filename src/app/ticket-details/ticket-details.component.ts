import {Component,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import {TicketComponent} from  '../../app/dashboard/ticket.component';

@Component({
    selector:'ticket-details',
    templateUrl:'ticket-details.html'
})


export class TicketDetailsComponent implements OnInit {

    tickets: FirebaseListObservable<any[]>;
    constructor(public af: AngularFireDatabase, public navCtrl: NavController){

    }

    goTickets(){
        this.navCtrl.push(TicketComponent);
    }

    ngOnInit() {
      
    
  }
}