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
  ngInput : string = "";
  watsonResponseArray : string[];
  messages:{question:string,answer:string}[]=[];
  constructor(private chatbotService : ChatbotService, private navCtrl: NavController){
    
  }

 goHome(){
  this.navCtrl.push(HomePage);
}

  ngOnInit(){
    this.chatbotService.getData("conversation_start")
    .subscribe((response:any)=>{
      this.watsonResponseArray = response.output;
      this.userInput = "";
      this.messages.push({"question":"","answer":this.watsonResponseArray[0]});
    })
  }

  send(){
    console.log('user input is:'+this.userInput);
    this.ngInput = this.userInput;
    this.userInput = "";
   this.chatbotService.getData(this.ngInput)
   .subscribe((response:any)=>{     
      this.watsonResponseArray = response.output;
      console.log('watson response action :'+response.action)
      console.log('Watson response data :'+response.data);
      console.log('watson response is:'+this.watsonResponseArray);
      if(response.action != undefined){
          this.chatbotService.processWatsonAction(response.action,response.data)
          .subscribe((cavionresponse:any)=>{
              console.log('node server returned cavion response '+cavionresponse.output);
              this.watsonResponseArray = cavionresponse.output;    
              this.messages.push({"question":"","answer":this.watsonResponseArray[0]});  
              this.chatbotService.processWatsonAction(cavionresponse.action,cavionresponse.data)  
              .subscribe((cavionmfaresponse:any)=>{
                this.watsonResponseArray = cavionmfaresponse.output; 
                this.messages.push({"question":"","answer":this.watsonResponseArray[0]}); 
              })
          })
      }
      this.messages.push({"question":this.ngInput,"answer":this.watsonResponseArray[0]});
   })
  }
}