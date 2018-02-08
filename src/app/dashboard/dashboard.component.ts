import {Component} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
    selector:'dashboard',
    templateUrl:'dashboard.html'
})


export class DashboardComponent{

    tickets: FirebaseListObservable<any[]>;
    constructor(public af: AngularFireDatabase){

    }
    ngOnInit() {
        this.tickets = this.af.list('/Tickets');
        console.log("Tickets :" + this.tickets);
    
  }
}