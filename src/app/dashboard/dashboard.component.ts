import {Component,OnInit} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
    selector:'dashboard',
    templateUrl:'dashboard.html'
})


export class DashboardComponent implements OnInit {

    tickets: FirebaseListObservable<any[]>;
    constructor(public af: AngularFireDatabase){

    }
    ngOnInit() {
        this.tickets = this.af.list('/Tickets');
        console.log("Tickets :" + this.tickets);
    
  }
}