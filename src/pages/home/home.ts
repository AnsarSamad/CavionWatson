import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatBotComponent} from  '../../app/chatbot.component'
import {DashboardComponent} from  '../../app/dashboard/dashboard.component';
import { LoginService } from '../../app/services/login.service';
import { LoginPage } from '../../pages/login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , public chatbot : ChatBotComponent) {

  }

  doChat(){
    this.navCtrl.push(ChatBotComponent);
  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }
   
}
