import { FirebaseConfig } from "./firebaseConfig";

export class Validator{
    firebase = FirebaseConfig.initialize();
    constructor(){
        
    }
    ValidateBnkUser(username:String,password:String){
        return new Promise((resolve,reject)=>{
            this.firebase.getDbReference().on("value", function(snapshot) {
                console.log(snapshot.val());
                if(snapshot.val() !=  null){
                    resolve(true);
                }
              }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
                reject();
              });
        })

    }
}