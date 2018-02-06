import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../app/services/login.service';
import {DashboardComponent} from  '../../app/dashboard/dashboard.component';
import { HomePage } from '../../pages/home/home';
import {NgForm} from  '@angular/forms'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

isInvalidLogin  :boolean = false;
constructor(public navCtrl: NavController , public loginService:LoginService) {

}

goHome(){
  this.navCtrl.push(HomePage);
}

login(ngForm : NgForm) {
    console.log(JSON.stringify(ngForm.value));
    this.loginService.login(ngForm.value.username,ngForm.value.password)
    .then((response)=>{
      this.navCtrl.push(DashboardComponent);
    })      
  
  }
  
}
