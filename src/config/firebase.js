import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCyVI8dlBZdxfayWGbwjwKt_GXa9P3p-gY',
    authDomain: 'social-app-f2aa7.firebaseapp.com',
    databaseURL: 'https://social-app-f2aa7.firebaseio.com',
    projectId: 'social-app-f2aa7',
    storageBucket: 'social-app-f2aa7.appspot.com',
    messagingSenderId: '203563039085',
    appId: '1:203563039085:web:d77a57ec06ab16fc314264'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
