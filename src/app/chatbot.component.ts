import {Component,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import {ChatbotService} from './services/chatbot.service'
@Component({
    templateUrl: 'chatbot.html',
    selector: 'chat-bot'
  })
export class ChatBotComponent implements OnInit {

  userInput :string="";
  watsonResponse : string = "";
  constructor(private chatbotService : ChatbotService, private navCtrl: NavController){
    
  }

 goHome(){
  this.navCtrl.push(HomePage);
}

  ngOnInit(){
    this.chatbotService.getData("conversation_start")
    .subscribe((response:string)=>{
      this.watsonResponse = response;
      this.userInput = "";
    })
  }

  send(){
    console.log('user input is:'+this.userInput);
   this.chatbotService.getData(this.userInput)
   .subscribe((response:string)=>{     
      this.watsonResponse = response;
      this.userInput = "";
      console.log('watson response is:'+this.watsonResponse);
   })
  }
}