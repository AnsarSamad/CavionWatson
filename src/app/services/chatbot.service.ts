import {Injectable} from '@angular/core'
import { HttpClient} from '@angular/common/http';
import {AppConfig} from '../base/appconfig';
@Injectable()

export class ChatbotService{
    
    properties = null;
    constructor(private http:HttpClient ,private appConfig:AppConfig){
        
    }
    getData(userInput:string){
        let request = this.appConfig.getServerUrl();
        console.log('server url is:'+request);      
        return this.http.post("http://localhost:3000/watson" ,{"userInput":userInput} );
    }
}