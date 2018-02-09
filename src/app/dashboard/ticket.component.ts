import {Component,OnInit} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { HomePage } from '../../pages/home/home';
import {TicketDetailsComponent} from  '../ticket-details/ticket-details.component';

@Component({
    selector:'dashboard',
    templateUrl:'ticket.html'
})


export class TicketComponent implements OnInit {

    tickets: FirebaseListObservable<any[]>;
    constructor(public af: AngularFireDatabase, public navCtrl: NavController, public alertCtrl: AlertController){

    }
    goHome(){
        this.navCtrl.push(HomePage);
    }
    goTicketDetails(){
        this.navCtrl.push(TicketDetailsComponent);
    }
    deleteTicket() {
        let confirm = this.alertCtrl.create({
        title: 'Are you want to delete this ticket?',
        
        buttons: [
            {
            text: 'Cancel',
            handler: () => {
                console.log('Disagree clicked');
            }
            },
            {
            text: 'Delete',
            handler: () => {
                console.log('Agree clicked');
            }
            }
        ]
        });
        confirm.present();
    }

    ngOnInit() {
        this.tickets = this.af.list('/Tickets');
        console.log("Tickets :" + this.tickets);
    
  }
}