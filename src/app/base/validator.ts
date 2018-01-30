import { FirebaseConfig } from "./firebaseConfig";

export class Validator{
    firebase = FirebaseConfig.initialize();
    constructor(){
        
    }
    ValidateBnkUser(username:String,password:String){
        this.firebase.getDbReference().on("value", function(snapshot) {
            console.log(snapshot.val());
            if(snapshot.val() !=  null){
                return true;
            }
          }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            return false;
          });
    }
}