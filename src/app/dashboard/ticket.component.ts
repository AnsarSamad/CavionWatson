import {Component,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { HomePage } from '../../pages/home/home';
import {TicketDetailsComponent} from  '../ticket-details/ticket-details.component';

@Component({
    selector:'dashboard',
    templateUrl:'ticket.html'
})


export class TicketComponent implements OnInit {

    tickets: FirebaseListObservable<any[]>;
    constructor(public af: AngularFireDatabase, public navCtrl: NavController){

    }
    goHome(){
        this.navCtrl.push(HomePage);
    }
    goTicketDetails(){
        this.navCtrl.push(TicketDetailsComponent);
    }
    ngOnInit() {
        this.tickets = this.af.list('/Tickets');
        console.log("Tickets :" + this.tickets);
    
  }
}