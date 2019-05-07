import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: "AIzaSyDwJ8_LfbIpoFKkRipUWCjxbiDUjjs5CyY",
	authDomain: "chat-app-6547e.firebaseapp.com",
	databaseURL: "https://chat-app-6547e.firebaseio.com",
	projectId: "chat-app-6547e",
	storageBucket: "chat-app-6547e.appspot.com",
	messagingSenderId: "512615367691",
	appId: "1:512615367691:web:3814b0df66da4408"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };