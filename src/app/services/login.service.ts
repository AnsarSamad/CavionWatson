import {Injectable} from '@angular/core'
import { HttpClient} from '@angular/common/http';
import { Validator } from '../base/validator';

@Injectable()

export class LoginService extends Validator{
    constructor(private http: HttpClient){
        super();
    }
    login(username:String,password:String){
        //return this.http.post('http://localhost:3000/login/validate',{"username":username,"password":password});
        return this.ValidateBnkUser(username,password);
    }
}