import * as firebase from 'firebase';

class FirebaseConfig {
    private static firebaseConfig;
    // Initialize Firebase
    config = {
       
      };

    private constructor() {
        firebase.initializeApp(this.config);
    }
    static initialize(): FirebaseConfig {
        if (this.firebaseConfig == null) {
            this.firebaseConfig = new FirebaseConfig();
        }
        return this.firebaseConfig;
    }
    getDbReference() {
        return firebase.database().ref('/User');
    }
}

export { FirebaseConfig };