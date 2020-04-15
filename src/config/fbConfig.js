import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyAMCSc7uzf7w3atX00awfNZxPzYYr9tduc',
	authDomain: 'proplanner-base.firebaseapp.com',
	databaseURL: 'https://proplanner-base.firebaseio.com',
	projectId: 'proplanner-base',
	storageBucket: 'proplanner-base.appspot.com',
	messagingSenderId: '602867783364',
	appId: '1:602867783364:web:740324e29d86b2559e5b91',
	measurementId: 'G-CTXD4PY5ZW'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true }); //
firebase.analytics();

export default firebase;
