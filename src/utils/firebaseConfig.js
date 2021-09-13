import firebase from 'firebase';

const firebaseConfig = {
   apiKey: 'AIzaSyAzyylGW0YBh97eiVxXTXAqldo95BNifKg',
   authDomain: 'react-video-authen.firebaseapp.com',

   databaseURL:
      'https://react-video-authen-default-rtdb.europe-west1.firebasedatabase.app',

   projectId: 'react-video-authen',

   storageBucket: 'react-video-authen.appspot.com',

   messagingSenderId: '1005720071337',

   appId: '1:1005720071337:web:3fa14117ce3e9fe09f0db8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
