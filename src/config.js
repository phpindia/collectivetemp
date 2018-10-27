import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDo3orVTUqBi4qWDjHJR1d2_2xO_gsErhw",
  authDomain: "collectivegiving.firebaseapp.com",
  databaseURL: "https://collectivegiving.firebaseio.com",
  projectId: "collectivegiving",
  storageBucket: "collectivegiving.appspot.com",
  messagingSenderId: "904452422522"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;