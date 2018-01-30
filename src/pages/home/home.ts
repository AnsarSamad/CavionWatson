import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatBotComponent} from  '../../app/chatbot.component'
import {DashboardComponent} from  '../../app/dashboard/dashboard.component';
import { LoginService } from '../../app/services/login.service';
import {NgForm} from  '@angular/forms'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isInvalidLogin  :boolean = false;
  constructor(public navCtrl: NavController , public chatbot : ChatBotComponent ,public loginService:LoginService) {

  }

  doChat(){
    this.navCtrl.push(ChatBotComponent);
  }

  login(ngForm : NgForm){
      console.log(JSON.stringify(ngForm.value));
      if(this.loginService.login(ngForm.value.username,ngForm.value.password)){
        console.log('Login Success');      
        this.navCtrl.push(DashboardComponent);
      }else{
        this.isInvalidLogin = true;
      }
   
    }
  
}
