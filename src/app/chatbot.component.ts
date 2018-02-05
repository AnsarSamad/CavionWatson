import {Component} from '@angular/core'
import {ChatbotService} from './services/chatbot.service'
@Component({
    templateUrl: 'chatbot.html',
    selector: 'chat-bot'
  })
export class ChatBotComponent{

  userInput :string="Hello";
  watsonResponse : string = "";
  constructor(private chatbotService : ChatbotService){
    
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