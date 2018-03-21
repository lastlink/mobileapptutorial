import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCVdrX4O-8WrNFBqAE0N7kA0tiKju9zTxU",
  authDomain: "mobileapp-7557e.firebaseapp.com",
  databaseURL: "https://mobileapp-7557e.firebaseio.com",
  projectId: "mobileapp-7557e",
  storageBucket: "mobileapp-7557e.appspot.com",
  messagingSenderId: "704008135574"
};

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth