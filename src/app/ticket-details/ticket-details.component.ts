import {Component,OnInit} from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import {TicketComponent} from  '../../app/dashboard/ticket.component';
import {TicketService} from  '../services/ticketService'
import { ToastController ,LoadingController } from 'ionic-angular';


@Component({
    selector:'ticket-details',
    templateUrl:'ticket-details.html'
})


export class TicketDetailsComponent implements OnInit {

    ticket: any;
    tickets: FirebaseListObservable<any[]>;
    loader= null;
    constructor(public af: AngularFireDatabase, public navCtrl: NavController, public alertCtrl: AlertController, public navParams:NavParams,public toastCtrl: ToastController,public loadingCtrl: LoadingController,public ticketService:TicketService){
      this.ticket = this.navParams.get('currentTicket');
      this.tickets = this.navParams.get('allTickets');
      this.loader = this.loadingCtrl.create({
        content: "Please wait...",
      });
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
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.tickets.remove(key);
            this.navCtrl.push(TicketComponent);
          }
        }
      ]
    });
    confirm.present();
  }

  approveTicket(currentTicket){    
    this.loader.present();
    this.ticketService.approveTicket(currentTicket)
    .subscribe((response)=>{
        console.log('ticket got approved :'+response);
        let toast = this.toastCtrl.create({
          message: "Your ticket is approved",
          duration: 3000,
          position: 'top'
        });
        this.loader._destroy();
        toast.present();
        this.navCtrl.push(TicketComponent);
    })
  }

    ngOnInit() {    
      
    }


    
}