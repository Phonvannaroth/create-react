import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = `${process.env.REACT_APP_NOT_SECRET_CODE}`;
firebase.initializeApp(JSON.parse(firebaseConfig));

export default firebase
