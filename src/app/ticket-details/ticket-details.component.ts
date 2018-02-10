import {Component,OnInit} from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import {TicketComponent} from  '../../app/dashboard/ticket.component';

@Component({
    selector:'ticket-details',
    templateUrl:'ticket-details.html'
})


export class TicketDetailsComponent implements OnInit {

    ticket: any;
    tickets: FirebaseListObservable<any[]>;
    constructor(public af: AngularFireDatabase, public navCtrl: NavController, public alertCtrl: AlertController, public navParams:NavParams){
      this.ticket = this.navParams.get('currentTicket');
      this.tickets = this.navParams.get('allTickets');
    }

    goTickets(){
        this.navCtrl.push(TicketComponent);
    }

    deleteTicket(key) {
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
            this.tickets.remove(key);
            this.navCtrl.push(TicketComponent);
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