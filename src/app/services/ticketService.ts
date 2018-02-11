import {Injectable} from '@angular/core'
import {AppConfig} from '../base/appconfig';
import { HttpClient} from '@angular/common/http';
import { Validator } from '../base/validator';

@Injectable()

export class TicketService{
    constructor(private http:HttpClient ,private appConfig:AppConfig){
       
    }
    approveTicket(issue_title){
        let request = this.appConfig.getServerUrl();
        console.log('server url is:'+request);      
        return this.http.post("http://localhost:3000/dyncrm/addnewcase" ,{"issue_title":issue_title} );
    }
}