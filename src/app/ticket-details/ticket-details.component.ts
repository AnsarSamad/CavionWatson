import {Component,OnInit} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import {TicketComponent} from  '../../app/dashboard/ticket.component';

@Component({
    selector:'ticket-details',
    templateUrl:'ticket-details.html'
})


export class TicketDetailsComponent implements OnInit {

    tickets: FirebaseListObservable<any[]>;
    constructor(public af: AngularFireDatabase, public navCtrl: NavController, public alertCtrl: AlertController){

    }

    goTickets(){
        this.navCtrl.push(TicketComponent);
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
    
    }
}