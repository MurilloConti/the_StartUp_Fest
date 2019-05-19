import firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAwNMoIwSxZtMPeOZxA69kqWQ-DrtWzGww",
  authDomain: "desafioonovolab.firebaseapp.com",
  databaseURL: "https://desafioonovolab.firebaseio.com",
  projectId: "desafioonovolab",
  storageBucket: "desafioonovolab.appspot.com",
  messagingSenderId: "996716195973",
  appId: "1:996716195973:web:a6c366cc5273cb42"
};
firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser


// firebase collections
const propostasCollection = db.collection('Proposta')
const pitchCollection = db.collection('Apresentacao')
const desenvolvimentoCollection = db.collection('Desenvolvimento')

export {
    db,
    auth,
    propostasCollection,
    pitchCollection,
    desenvolvimentoCollection
}