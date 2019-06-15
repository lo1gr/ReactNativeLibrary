import firebase from 'firebase';

class Firebase {
  constructor(){
    this.init();
    this.observeAuth();
  }

  init = () => {
    firebase.initializeApp({
      apiKey: "AIzaSyBhdR8M9y8jd0gguNwpVKJmx4GIGuBUYtM",
      authDomain: "chatapp-8fe39.firebaseapp.com",
      databaseURL: "https://chatapp-8fe39.firebaseio.com",
      projectId: "chatapp-8fe39",
      storageBucket: "",
      messagingSenderId: "104659843156",
      appId: "1:104659843156:web:a299ce8cd690c409"
    });
  };

  observeAuth = () => {
    firebase.auth.onAuthStateChanged(this.onAuthStateChanged)
  }

  onAuthStateChanged = (user) => {
     if(!user){
       try{
         firebase.auth().signInAnonymously();
       } catch ({message}) {

       }
     }
  }

  get uid(){
    return (firebase.auth().currentUser || {}).uid
  }

  get ref(){
    return firebase.database.ref('message')
  }

  parse = snapshot => {
    const {timestamp: NumberStamp, text, user} = snapshot.val();
    const {key: _id} = snapshot;
    const timestamp = new Date(nnumberStamp);

    const message = {
      _id,
      timestamp,
      text,
      user
    }
    return message;
  }

  on = callback => {
    this.ref
      .limitToLast(50)
      .on('child_added', snapshot => callback(this.parse(snapshot)))
  }

  get timestamp(){
    return firebase.database.ServerValue.TIMESTAMP;
  }

  send = message => {
    for (let i = 0; i < message.length; i++) {
      const {text, user} = message[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message)
    }
  };

  append = message => this.ref().push(message);

// to turn connection off from database
  off(){
    this.ref.off();
  }
}

// want to export
Firebase.shared = new Firebase()
export default Firebase;

// we merged entire helper class to database and exported default class
